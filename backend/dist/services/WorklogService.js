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
const jira_client_factory_1 = require("../jira-client/jira-client-factory");
const get_worklogs_1 = require("../jira-client/get-worklogs");
const date_1 = require("../jira-client/date");
const moment_1 = __importDefault(require("moment"));
const getWorklogs = ({ config, from, to, accountId }) => __awaiter(void 0, void 0, void 0, function* () {
    const jiraClient = jira_client_factory_1.jiraClientFactory(config);
    return yield get_worklogs_1.getWorklogs({
        from,
        to,
        jiraClient,
        accountId
    });
});
const addWorklog = ({ config, request }) => __awaiter(void 0, void 0, void 0, function* () {
    const jiraClient = jira_client_factory_1.jiraClientFactory(config);
    const started = moment_1.default(request.started).toDate();
    return jiraClient.issue.addWorkLog({
        timeSpentSeconds: request.timeSpent,
        issueId: request.issueId,
        started: date_1.toJiraDateTimeFormat(started)
    });
});
exports.default = {
    getWorklogs,
    addWorklog
};
