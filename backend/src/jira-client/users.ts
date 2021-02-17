import * as JiraClient from "jira-connector";

export interface FindUsersContext {
  query: string;
  jiraClient: JiraClient;
}

export const findUsers = ({ query, jiraClient }: FindUsersContext) =>
  jiraClient.user.search({ query });

export interface GetUserContext {
  accountId: string;
  jiraClient: JiraClient;
}

export const getUser = ({ accountId, jiraClient }: GetUserContext) => {
  const options = {
    uri: jiraClient.buildURL("/user"),
    method: "GET",
    json: true,
    followAllRedirects: true,
    qs: { accountId },
  };

  return jiraClient.makeRequest(options);
};
