"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createJiraClient_1 = require("../jira-client/createJiraClient");
const users_1 = require("../jira-client/users");
const userService = (config) => {
    const jiraClient = createJiraClient_1.createJiraClient(config);
    return {
        getCurrentUser: () => jiraClient.myself.getMyself(),
        searchUsers: (query) => users_1.findUsers({ query, jiraClient }),
        getUser: (accountId) => users_1.getUser({ accountId, jiraClient })
    };
};
exports.default = userService;
