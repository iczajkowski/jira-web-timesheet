import { ClientConfig } from "../jira-client/models/client-config";
import { jiraClientFactory } from "../jira-client/jira-client-factory";

const issueService = (config: ClientConfig) => {
  const jiraClient = jiraClientFactory(config);

  return {
    searchIssue: (query: string) => {
      return jiraClient.myself
        .getMyself()
        .then((myself: { accountId: string }) => {
          const { accountId } = myself;
          const issue = jiraClient.issue as any;
          const currentJQL = `assignee was ${accountId}`;
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
