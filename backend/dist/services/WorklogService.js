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
const createJiraClient_1 = require("../jira-client/createJiraClient");
const worklogs_1 = require("../jira-client/worklogs");
const date_1 = require("../jira-client/date");
const moment_1 = __importDefault(require("moment"));
const ForbiddenError_1 = require("../errors/ForbiddenError");
const worklogService = (config) => {
    const jiraClient = createJiraClient_1.createJiraClient(config);
    return {
        getWorklogs: (from, to, accountId) => {
            return worklogs_1.getWorklogs(jiraClient)(from, to, accountId);
        },
        addWorklog: (request) => {
            const jiraClient = createJiraClient_1.createJiraClient(config);
            const started = moment_1.default(request.started).toDate();
            return jiraClient.issue.addWorkLog({
                timeSpentSeconds: request.timeSpent,
                issueId: request.issueId,
                started: date_1.toJiraDateTimeFormat(started)
            });
        },
        deleteWorklog: (issueId, worklogId) => __awaiter(void 0, void 0, void 0, function* () {
            const jiraClient = createJiraClient_1.createJiraClient(config);
            const myself = yield jiraClient.myself.getMyself();
            const worklog = yield jiraClient.issue.getWorkLog({
                issueId,
                id: worklogId
            });
            const authorID = worklog.author.accountId;
            if (myself.accountId !== authorID) {
                throw new ForbiddenError_1.ForbiddenError();
            }
            else {
                return jiraClient.issue.deleteWorkLog({ id: worklogId, issueId });
            }
        })
    };
};
exports.default = worklogService;
