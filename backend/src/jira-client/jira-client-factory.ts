import { ClientConfig } from "./models/client-config";
import JiraClient from "jira-connector";

export const jiraClientFactory = (config: ClientConfig) => {
  return new JiraClient({
    host: config.url,
    basic_auth: {
      email: config.email,
      api_token: config.apiToken
    }
  });
};
