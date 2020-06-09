"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jira_client_factory_1 = require("../jira-client/jira-client-factory");
const searchIssue = (query, config) => {
    const jiraClient = jira_client_factory_1.jiraClientFactory(config);
    return jiraClient.myself.getMyself().then((myself) => {
        const { accountId } = myself;
        const issue = jiraClient.issue;
        const currentJQL = `assignee was ${accountId}`;
        return issue.getIssuePicker({ query, currentJQL });
    });
};
exports.default = {
    searchIssue
};
