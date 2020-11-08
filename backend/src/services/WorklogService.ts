import { ClientConfig } from "../jira-client/models/client-config";
import { jiraClientFactory } from "../jira-client/jira-client-factory";
import { getWorklogs as getWorklogsApi } from "../jira-client/get-worklogs";
import { WorklogEntryRequest } from "../models/worklog-request";
import { toJiraDateTimeFormat } from "../jira-client/date";
import moment from "moment";
import { ForbiddenError } from "../errors/ForbiddenError";

const worklogService = (config: ClientConfig) => {
  const jiraClient = jiraClientFactory(config);

  return {
    getWorklogs: (from: Date, to: Date, accountId: string) => {
      return getWorklogsApi({
        from,
        to,
        jiraClient,
        accountId
      });
    },

    addWorklog: (request: WorklogEntryRequest) => {
      const jiraClient = jiraClientFactory(config);
      const started = moment(request.started).toDate();
      return jiraClient.issue.addWorkLog({
        timeSpentSeconds: request.timeSpent,
        issueId: request.issueId,
        started: toJiraDateTimeFormat(started)
      });
    },

    deleteWorklog: async (issueId: string, worklogId: string) => {
      const jiraClient = jiraClientFactory(config);
      const myself = await jiraClient.myself.getMyself();
      const worklog = await jiraClient.issue.getWorkLog({
        issueId,
        id: worklogId
      });
      const authorID = worklog.author.accountId;
      if (myself.accountId !== authorID) {
        throw new ForbiddenError();
      } else {
        return jiraClient.issue.deleteWorkLog({ id: worklogId, issueId });
      }
    }
  };
};

export default worklogService;
