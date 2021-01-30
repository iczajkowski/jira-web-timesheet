import { ClientConfig } from "../jira-client/models/client-config";
import { createJiraClient } from "../jira-client/createJiraClient";
import { getWorklogs } from "../jira-client/worklogs";
import { WorklogEntryRequest } from "../models/worklog-request";
import { toJiraDateTimeFormat } from "../jira-client/date";
import moment from "moment";
import { ForbiddenError } from "../errors/ForbiddenError";

const worklogService = (config: ClientConfig) => {
  const jiraClient = createJiraClient(config);

  return {
    getWorklogs: (from: Date, to: Date, accountId: string) => {
      return getWorklogs(jiraClient)(from, to, accountId);
    },

    addWorklog: (request: WorklogEntryRequest) => {
      const started = moment(request.started).toDate();
      return jiraClient.issue.addWorkLog({
        timeSpentSeconds: request.timeSpent,
        issueId: request.issueId,
        started: toJiraDateTimeFormat(started)
      });
    },

    deleteWorklog: async (issueId: string, worklogId: string) => {
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
