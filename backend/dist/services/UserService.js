"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jira_client_factory_1 = require("../jira-client/jira-client-factory");
const getUser = config => {
  return jira_client_factory_1.jiraClientFactory(config).myself.getMyself();
};
exports.default = {
  getUser
};
