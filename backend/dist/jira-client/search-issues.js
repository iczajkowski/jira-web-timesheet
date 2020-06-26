"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_1 = require("./date");
exports.searchIssues = (client, from, to, author) => {
    const jql = buildJQL(from, to, author);
    return client.search.search({
        jql,
        startAt: 0,
        maxResults: getMaxInt32()
    });
};
const buildJQL = (from, to, author) => {
    return `worklogAuthor = "${author}" AND worklogDate >= "${date_1.toJiraDateFormat(from)}" AND worklogDate <= "${date_1.toJiraDateFormat(to)}"`;
};
const getMaxInt32 = () => {
    return Math.pow(2, 31) - 1;
};
