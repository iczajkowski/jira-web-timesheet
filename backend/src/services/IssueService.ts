import { ClientConfig } from "../jira-client/models/client-config";
import { jiraClientFactory } from "src/jira-client/jira-client-factory";

const searchIssue = (query: string, config: ClientConfig) => {
  const issue = jiraClientFactory(config).issue as any;
  return issue.getIssuePicker({ query });
};

export default {
  searchIssue
};
