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
const IssueService_1 = __importDefault(require("./../services/IssueService"));
const router = express_1.Router();
router.get("", Authentication_1.authentication.checkToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req.query;
    if (!query) {
        return res.status(http_status_codes_1.BAD_REQUEST).end();
    }
    const config = req.params[Authentication_1.authentication.DECODED_CONFIG];
    const response = yield IssueService_1.default.searchIssue(query, config);
    const historySearchIssues = [
        ...response.sections[0].issues,
        ...response.sections[1].issues
    ].filter((value, index, array) => {
        return array.indexOf(value) === index;
    });
    return res.status(http_status_codes_1.OK).json(historySearchIssues);
}));
exports.default = router;
