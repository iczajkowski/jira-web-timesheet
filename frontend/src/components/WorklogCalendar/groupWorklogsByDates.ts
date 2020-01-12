import { Worklog } from "../../models/Worklog";

export const groupWorklogsByDates = (worklogs: Worklog[]) => {
  if (!worklogs) {
    return {};
  }

  return worklogs.reduce((groupedWorklogs, worklog) => {
    const worklogs = worklog.worklogs.reduce(
      (groupedWorklogEntries, worklogEntry) => {
        const startDate = worklogEntry.started;
        const entries = groupedWorklogEntries[startDate] || [];
        const newEntries = [
          ...entries,
          {
            issueKey: worklog.issueKey,
            timeSpent: worklogEntry.timeSpent,
            started: worklogEntry.started
          }
        ];
        return { ...groupedWorklogEntries, [startDate]: newEntries };
      },
      {} as any
    );
    return { ...groupedWorklogs, ...worklogs };
  }, {});
};
