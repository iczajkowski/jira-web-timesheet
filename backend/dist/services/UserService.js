"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jira_client_factory_1 = require("../jira-client/jira-client-factory");
const users_1 = require("../jira-client/users");
const getCurrentUser = (config) => jira_client_factory_1.jiraClientFactory(config).myself.getMyself();
const searchUsers = (query, config) => users_1.findUsers({ query, jiraClient: jira_client_factory_1.jiraClientFactory(config) });
const getUser = (accountId, config) => users_1.getUser({ accountId, jiraClient: jira_client_factory_1.jiraClientFactory(config) });
exports.default = {
    getCurrentUser,
    searchUsers,
    getUser
};
