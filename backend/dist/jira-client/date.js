"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const JIRA_DATE_FORMAT = "YYYY-MM-DD";
const JIRA_DATE_TIME_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSSZZ";
exports.toJiraDateFormat = (date) => {
    return moment_1.default(date).format(JIRA_DATE_FORMAT);
};
exports.fromJiraDate = (date) => {
    return moment_1.default(date, JIRA_DATE_FORMAT).toDate();
};
exports.toJiraDateTimeFormat = (date) => {
    return moment_1.default(date).format(JIRA_DATE_TIME_FORMAT);
};
