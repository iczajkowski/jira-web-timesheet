import moment from "moment";
import * as JiraClient from "jira-connector";
import { Worklog } from "./models/worklog";
import { searchIssues } from "./search-issues";
import { getIssueWorklogs } from "./get-issue-worklogs";

export interface WorklogClientInput {
  from: Date;
  to: Date;
  jiraClient: JiraClient;
  userName: string;
}

export const getWorklogs = async ({
  from,
  to,
  jiraClient,
  userName
}: WorklogClientInput) => {
  const searchTo = moment(to)
    .add(1, "day")
    .toDate();
  const issuesResponse = await searchIssues(
    jiraClient,
    from,
    searchTo,
    userName
  );

  return await getIssueWorklogs(issuesResponse.issues, jiraClient, worklog =>
    filterWorklog(worklog, userName, from, searchTo)
  );
};

const filterWorklog = (
  worklog: Worklog,
  name: string,
  from: Date,
  to: Date
) => {
  const momentStarted = moment(worklog.started);
  const isBetween =
    momentStarted.isSameOrAfter(moment(from)) &&
    momentStarted.isSameOrBefore(moment(to));
  return worklog.author.displayName === name && isBetween;
};
