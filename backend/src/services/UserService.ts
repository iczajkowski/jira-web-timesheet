import { ClientConfig } from "../jira-client/models/client-config";
import { jiraClientFactory } from "../jira-client/jira-client-factory";
import { findUsers } from "../jira-client/users";

const getUser = (config: ClientConfig) =>
  jiraClientFactory(config).myself.getMyself();

const searchUsers = (query: string, config: ClientConfig) =>
  findUsers({ query, jiraClient: jiraClientFactory(config) });

export default {
  getUser,
  searchUsers
};
