"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
exports.searchIssues = (client, from, to, author) => {
  const jql = buildJQL(from, to, author);
  return client.search.search({
    jql,
    startAt: 0,
    maxResults: getMaxInt32()
  });
};
const buildJQL = (from, to, author) => {
  return `worklogAuthor = "${author}" AND worklogDate >= "${exports.toJiraDateFormat(
    from
  )}" AND worklogDate <= "${exports.toJiraDateFormat(to)}"`;
};
const getMaxInt32 = () => {
  return Math.pow(2, 31) - 1;
};
const JIRA_DATE_FORMAT = "YYYY-MM-DD";
exports.toJiraDateFormat = date => {
  return moment_1.default(date).format(JIRA_DATE_FORMAT);
};
exports.fromJiraDate = date => {
  return moment_1.default(date, JIRA_DATE_FORMAT).toDate();
};
