"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createJiraClient_1 = require("../jira-client/createJiraClient");
const issueService = (config) => {
    const jiraClient = createJiraClient_1.createJiraClient(config);
    return {
        searchIssue: (query) => {
            return jiraClient.myself
                .getMyself()
                .then((myself) => {
                const { accountId } = myself;
                const issue = jiraClient.issue;
                const currentJQL = `assignee was ${accountId}`;
                return issue.getIssuePicker({
                    query,
                    currentJQL,
                    showSubTasks: true
                });
            });
        }
    };
};
exports.default = issueService;
