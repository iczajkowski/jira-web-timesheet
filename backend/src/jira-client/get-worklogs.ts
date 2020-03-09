import moment from "moment";
import * as JiraClient from "jira-connector";
import { Worklog } from "./models/worklog";
import { searchIssues } from "./search-issues";
import { getIssueWorklogs } from "./get-issue-worklogs";

export interface WorklogClientInput {
  from: Date;
  to: Date;
  jiraClient: JiraClient;
  accountId: string;
}

export const getWorklogs = async ({
  from,
  to,
  jiraClient,
  accountId
}: WorklogClientInput) => {
  const searchTo = moment(to)
    .add(1, "day")
    .toDate();
  const issuesResponse = await searchIssues(
    jiraClient,
    from,
    searchTo,
    accountId
  );

  return await getIssueWorklogs(issuesResponse.issues, jiraClient, worklog =>
    filterWorklog(worklog, accountId, from, searchTo)
  );
};

const filterWorklog = (
  worklog: Worklog,
  accountId: string,
  from: Date,
  to: Date
) => {
  const momentStarted = moment(worklog.started);
  const isBetween =
    momentStarted.isSameOrAfter(moment(from)) &&
    momentStarted.isSameOrBefore(moment(to));
  return isBetween && worklog.author.accountId === accountId;
};
