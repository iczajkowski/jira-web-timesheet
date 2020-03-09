import { ClientConfig } from "../jira-client/models/client-config";
import { jiraClientFactory } from "../jira-client/jira-client-factory";
import { getWorklogs as getWorklogsApi } from "../jira-client/get-worklogs";

const getWorklogs = async ({
  config,
  from,
  to,
  accountId
}: {
  config: ClientConfig;
  from: Date;
  to: Date;
  accountId: string;
}) => {
  const jiraClient = jiraClientFactory(config);
  return await getWorklogsApi({
    from,
    to,
    jiraClient,
    accountId
  });
};

export default {
  getWorklogs
};
