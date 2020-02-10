"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const configuration_validator_1 = require("../jira-client/configuration-validator");
const UserService_1 = __importDefault(require("./../services/UserService"));
const jira_error_mapper_1 = require("../jira-client/jira-error-mapper");
const Authentication_1 = require("../shared/Authentication");
const router = express_1.Router();
router.get("/current", Authentication_1.authentication.checkToken, (req, res) =>
  __awaiter(void 0, void 0, void 0, function*() {
    const config = req.params[Authentication_1.authentication.DECODED_CONFIG];
    const user = yield UserService_1.default.getUser(config);
    return res.status(http_status_codes_1.OK).json(user);
  })
);
router.post("/logout", Authentication_1.authentication.checkToken, (req, res) =>
  __awaiter(void 0, void 0, void 0, function*() {
    return Authentication_1.authentication.clearToken(res).end();
  })
);
router.post("/authenticate", (req, res) =>
  __awaiter(void 0, void 0, void 0, function*() {
    const config = req.body;
    if (!configuration_validator_1.cofigValidator(config)) {
      return res.status(http_status_codes_1.BAD_REQUEST).end();
    }
    try {
      const user = yield UserService_1.default.getUser(config);
      if (!user) {
        return res.status(http_status_codes_1.UNAUTHORIZED);
      }
      return Authentication_1.authentication
        .setToken(res, config)
        .status(http_status_codes_1.OK)
        .end();
    } catch (error) {
      const jiraError = jira_error_mapper_1.mapJiraError(error);
      const response = res.status(jiraError.httpStatusCode);
      return jiraError.message
        ? response.json({ message: jiraError.message })
        : response.end();
    }
  })
);
exports.default = router;
