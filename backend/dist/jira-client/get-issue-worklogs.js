"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIssueWorklogs = (issues, client, filter) => {
  return Promise.all(
    issues.map(issue =>
      client.issue.getWorkLogs({ issueId: issue.id }).then(worklogResponse => {
        const worklogs = worklogResponse.worklogs.filter(
          worklog => !filter || filter(worklog)
        );
        return {
          issueKey: issue.key,
          worklogs
        };
      })
    )
  );
};
