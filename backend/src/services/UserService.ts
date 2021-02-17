import { ClientConfig } from "../jira-client/models/client-config";
import { createJiraClient } from "../jira-client/createJiraClient";
import { findUsers, getUser as getUserApi } from "../jira-client/users";

const userService = (config: ClientConfig) => {
  const jiraClient = createJiraClient(config);

  return {
    getCurrentUser: () => jiraClient.myself.getMyself(),
    searchUsers: (query: string) => findUsers({ query, jiraClient }),
    getUser: (accountId: string) => getUserApi({ accountId, jiraClient }),
  };
};

export default userService;
