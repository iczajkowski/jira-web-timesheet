import * as JiraClient from "jira-connector";

export interface FindUsersContext {
  query: string;
  jiraClient: JiraClient;
}

export const findUsers = ({ query, jiraClient }: FindUsersContext) =>
  jiraClient.user.search({ query });
