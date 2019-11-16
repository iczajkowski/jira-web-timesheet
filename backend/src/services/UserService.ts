import { ClientConfig } from "../jira-client/models/client-config";
import { jiraClientFactory } from "../jira-client/jira-client-factory";

const getUser = (config: ClientConfig) => {
  return jiraClientFactory(config).myself.getMyself();
};

export default {
  getUser
};
