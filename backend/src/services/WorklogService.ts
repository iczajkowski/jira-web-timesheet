import { ClientConfig } from "../jira-client/models/client-config";
import { jiraClientFactory } from "../jira-client/jira-client-factory";
import { getWorklogs as getWorklogsApi } from "../jira-client/get-worklogs";
import { WorklogEntryRequest } from "../models/worklog-request";
import { toJiraDateTimeFormat } from "../jira-client/date";
import moment from "moment";

const getWorklogs = async ({
  config,
  from,
  to,
  accountId
}: {
  config: ClientConfig;
  from: Date;
  to: Date;
  accountId: string;
}) => {
  const jiraClient = jiraClientFactory(config);
  return await getWorklogsApi({
    from,
    to,
    jiraClient,
    accountId
  });
};

const addWorklog = async ({
  config,
  request
}: {
  config: ClientConfig;
  request: WorklogEntryRequest;
}) => {
  const jiraClient = jiraClientFactory(config);
  const started = moment(request.started).toDate();
  return jiraClient.issue.addWorkLog({
    timeSpentSeconds: request.timeSpent,
    issueId: request.issueId,
    started: toJiraDateTimeFormat(started)
  });
};

export default {
  getWorklogs,
  addWorklog
};
