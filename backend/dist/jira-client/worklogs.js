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
const moment_1 = __importDefault(require("moment"));
const issues_1 = require("./issues");
exports.getWorklogs = (jiraClient) => (from, to, accountId) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTo = moment_1.default(to)
        .add(1, "day")
        .toDate();
    const issuesResponse = yield issues_1.searchIssues(jiraClient)(from, searchTo, accountId);
    return yield getIssueWorklogs(issuesResponse.issues, jiraClient, worklog => filterWorklog(worklog, accountId, from, searchTo));
});
const filterWorklog = (worklog, accountId, from, to) => {
    const momentStarted = moment_1.default(worklog.started);
    const isBetween = momentStarted.isSameOrAfter(moment_1.default(from)) &&
        momentStarted.isSameOrBefore(moment_1.default(to));
    return isBetween && worklog.author.accountId === accountId;
};
const getIssueWorklogs = (issues, client, filter) => {
    return Promise.all(issues.map((issue) => client.issue
        .getWorkLogs({ issueId: issue.id })
        .then((worklogResponse) => {
        const worklogs = worklogResponse.worklogs.filter(worklog => !filter || filter(worklog));
        return {
            issueKey: issue.key,
            worklogs
        };
    })));
};
