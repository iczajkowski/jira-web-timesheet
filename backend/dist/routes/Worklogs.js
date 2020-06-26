"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Authentication_1 = require("../shared/Authentication");
const http_status_codes_1 = require("http-status-codes");
const WorklogService_1 = __importDefault(require("../services/WorklogService"));
const moment_1 = __importDefault(require("moment"));
const ForbiddenError_1 = require("../errors/ForbiddenError");
const router = express_1.Router();
const toDates = ({ from, to }) => ({
    from: moment_1.default(from),
    to: moment_1.default(to)
});
router.get("", Authentication_1.authentication.checkToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { from, to } = toDates(req.query);
    const { accountId } = req.query;
    if (!from.isValid() || !to.isValid() || !accountId) {
        return res.status(http_status_codes_1.BAD_REQUEST).end();
    }
    const config = req.params[Authentication_1.authentication.DECODED_CONFIG];
    try {
        const worklogs = yield WorklogService_1.default.getWorklogs({
            config,
            from: from.toDate(),
            to: to.toDate(),
            accountId
        });
        return res.status(http_status_codes_1.OK).json(worklogs);
    }
    catch (e) {
        console.error(e);
        return res.status(http_status_codes_1.INTERNAL_SERVER_ERROR);
    }
}));
router.post("", Authentication_1.authentication.checkToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = req.body;
        const config = req.params[Authentication_1.authentication.DECODED_CONFIG];
        const response = yield WorklogService_1.default.addWorklog({ config, request });
        return res.status(http_status_codes_1.OK).json(response);
    }
    catch (error) {
        console.error(error);
        return res.status(http_status_codes_1.INTERNAL_SERVER_ERROR);
    }
}));
router.delete("/:issueId/:worklogId", Authentication_1.authentication.checkToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { issueId, worklogId } = req.params;
    try {
        const config = req.params[Authentication_1.authentication.DECODED_CONFIG];
        const response = yield WorklogService_1.default.deleteWorklog({
            config,
            worklogId,
            issueId
        });
        return res.status(http_status_codes_1.OK).json(response);
    }
    catch (error) {
        console.error(error);
        if (error instanceof ForbiddenError_1.ForbiddenError) {
            return res.status(http_status_codes_1.FORBIDDEN);
        }
        else {
            return res.status(http_status_codes_1.INTERNAL_SERVER_ERROR);
        }
    }
}));
exports.default = router;
