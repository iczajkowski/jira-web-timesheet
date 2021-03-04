"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUsers = ({ query, jiraClient }) => jiraClient.user.search({ query });
exports.getUser = ({ accountId, jiraClient }) => {
    const options = {
        uri: jiraClient.buildURL("/user"),
        method: "GET",
        json: true,
        followAllRedirects: true,
        qs: { accountId },
    };
    return jiraClient.makeRequest(options);
};
