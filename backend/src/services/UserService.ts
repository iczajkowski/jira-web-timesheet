import { ClientConfig } from "../jira-client/models/client-config";
import { jiraClientFactory } from "../jira-client/jira-client-factory";
import { findUsers, getUser as getUserApi } from "../jira-client/users";

const getCurrentUser = (config: ClientConfig) =>
  jiraClientFactory(config).myself.getMyself();

const searchUsers = (query: string, config: ClientConfig) =>
  findUsers({ query, jiraClient: jiraClientFactory(config) });

const getUser = (accountId: string, config: ClientConfig) =>
  getUserApi({ accountId, jiraClient: jiraClientFactory(config) });

export default {
  getCurrentUser,
  searchUsers,
  getUser
};
