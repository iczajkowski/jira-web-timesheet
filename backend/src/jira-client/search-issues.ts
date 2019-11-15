import * as JiraClient from "jira-connector";
import { IssuesResponse } from "./models/issues-response";
import moment from "moment";

export const searchIssues = (
  client: JiraClient,
  from: Date,
  to: Date,
  author: string
): Promise<IssuesResponse> => {
  const jql = buildJQL(from, to, author);
  return client.search.search({
    jql,
    startAt: 0,
    maxResults: getMaxInt32()
  });
};

const buildJQL = (from: Date, to: Date, author: string) => {
  return `worklogAuthor = "${author}" AND worklogDate >= "${toJiraDateFormat(
    from
  )}" AND worklogDate <= "${toJiraDateFormat(to)}"`;
};

const getMaxInt32 = () => {
  return Math.pow(2, 31) - 1;
};

const JIRA_DATE_FORMAT = "YYYY-MM-DD";

export const toJiraDateFormat = (date: Date): string => {
  return moment(date).format(JIRA_DATE_FORMAT);
};

export const fromJiraDate = (date: string): Date => {
  return moment(date, JIRA_DATE_FORMAT).toDate();
};
