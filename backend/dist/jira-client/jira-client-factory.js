"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jira_connector_1 = __importDefault(require("jira-connector"));
exports.jiraClientFactory = (config) => {
    return new jira_connector_1.default({
        host: config.url,
        basic_auth: {
            email: config.email,
            api_token: config.apiToken
        }
    });
};
