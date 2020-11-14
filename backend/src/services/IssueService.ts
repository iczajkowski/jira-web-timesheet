import { ClientConfig } from "../jira-client/models/client-config";
import { createJiraClient } from "../jira-client/createJiraClient";

const issueService = (config: ClientConfig) => {
  const jiraClient = createJiraClient(config);

  return {
    searchIssue: (query: string) => {
      return jiraClient.myself
        .getMyself()
        .then((myself: { accountId: string }) => {
          const { accountId } = myself;
          const issue = jiraClient.issue as any;
          const currentJQL = `assignee was ${accountId} or key = ${query}`;
          return issue.getIssuePicker({
            query,
            currentJQL,
            showSubTasks: true
          });
        });
    }
  };
};

export default issueService;
