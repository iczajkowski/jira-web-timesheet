import moment from "moment";
import * as JiraClient from "jira-connector";
import { Worklog } from "./models/worklog";
import { searchIssues } from "./issues";
import { IssueWorklog } from "./models/issue-worklog";
import { IssueResponse } from "./models/issues-response";

export interface WorklogClientInput {
  from: Date;
  to: Date;
  jiraClient: JiraClient;
  accountId: string;
}

export const getWorklogs = (jiraClient: JiraClient) => async (
  from: Date,
  to: Date,
  accountId: string
) => {
  //Add one more day because of timezone issues
  const searchTo = moment(to)
    .add(1, "day")
    .toDate();

  const issuesResponse = await searchIssues(jiraClient)(
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

const getIssueWorklogs = (
  issues: IssueResponse[],
  client: JiraClient,
  filter?: (worklog: Worklog) => boolean
): Promise<IssueWorklog[]> => {
  return Promise.all(
    issues.map((issue: any) =>
      client.issue
        .getWorkLogs({ issueId: issue.id })
        .then((worklogResponse: { worklogs: Worklog[] }) => {
          const worklogs = worklogResponse.worklogs.filter(
            worklog => !filter || filter(worklog)
          );
          return {
            issueKey: issue.key,
            worklogs
          };
        })
    )
  );
};
