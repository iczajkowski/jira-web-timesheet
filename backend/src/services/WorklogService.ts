import { ClientConfig } from "../jira-client/models/client-config";
import { jiraClientFactory } from "../jira-client/jira-client-factory";
import { User } from "../jira-client/models/user";
import { getWorklogs as getWorklogsApi } from "../jira-client/get-worklogs";

const getWorklogs = async ({
  config,
  from,
  to
}: {
  config: ClientConfig;
  from: Date;
  to: Date;
}) => {
  console.log("test", config);
  const jiraClient = jiraClientFactory(config);
  const { displayName } = (await jiraClient.myself.getMyself()) as User;
  return await getWorklogsApi({
    from,
    to,
    jiraClient,
    userName: displayName
  });
};

export default {
  getWorklogs
};
