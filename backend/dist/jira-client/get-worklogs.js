"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const search_issues_1 = require("./search-issues");
const get_issue_worklogs_1 = require("./get-issue-worklogs");
exports.getWorklogs = ({ from, to, jiraClient, userName }) =>
  __awaiter(void 0, void 0, void 0, function*() {
    const searchTo = moment_1
      .default(to)
      .add(1, "day")
      .toDate();
    const issuesResponse = yield search_issues_1.searchIssues(
      jiraClient,
      from,
      searchTo,
      userName
    );
    return yield get_issue_worklogs_1.getIssueWorklogs(
      issuesResponse.issues,
      jiraClient,
      worklog => filterWorklog(worklog, userName, from, searchTo)
    );
  });
const filterWorklog = (worklog, name, from, to) => {
  const momentStarted = moment_1.default(worklog.started);
  const isBetween =
    momentStarted.isSameOrAfter(moment_1.default(from)) &&
    momentStarted.isSameOrBefore(moment_1.default(to));
  return worklog.author.displayName === name && isBetween;
};
