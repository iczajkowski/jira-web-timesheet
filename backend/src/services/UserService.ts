import { ClientConfig } from "../jira-client/models/client-config";
import { jiraClientFactory } from "../jira-client/jira-client-factory";
import { findUsers, getUser as getUserApi } from "../jira-client/users";

const userService = (config: ClientConfig) => {
  const jiraClient = jiraClientFactory(config);

  return {
    getCurrentUser: () => jiraClient.myself.getMyself(),
    searchUsers: (query: string) => findUsers({ query, jiraClient }),
    getUser: (accountId: string) => getUserApi({ accountId, jiraClient })
  };
};

export default userService;
