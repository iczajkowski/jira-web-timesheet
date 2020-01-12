import { Worklog } from "../../models/Worklog";
import { getDateInTimezone } from "../../utils/date";

export interface WorklogModel {
  issueKey: string;
  timeSpent: number;
  started: string;
}

export type WorklogGroups = { [key: string]: WorklogModel[] };

export const DATE_FORMAT = "YYYY-MM-DD";

const mergeWorklogs = (group1: WorklogGroups, group2: WorklogGroups) => {
  const result = Object.assign({}, group1);
  return Object.keys(group2).reduce((previous, current) => {
    const group2Value = group2[current];
    const previousValue = previous[current] || [];
    const mergedValue = [...previousValue, ...group2Value];
    return { ...previous, [current]: mergedValue };
  }, result);
};

export const groupWorklogsByDates = (
  worklogList: Worklog[],
  userTimezone: string
): WorklogGroups => {
  if (!worklogList) {
    return {};
  }

  return worklogList.reduce((groupedWorklogs, worklog) => {
    const worklogs = worklog.worklogs.reduce(
      (groupedWorklogEntries, worklogEntry) => {
        const startDate = getDateInTimezone(
          worklogEntry.started,
          userTimezone
        ).format(DATE_FORMAT);
        const entries = groupedWorklogEntries[startDate] || [];
        const newEntries = [
          ...entries,
          {
            issueKey: worklog.issueKey,
            timeSpent: worklogEntry.timeSpentSeconds,
            started: worklogEntry.started
          }
        ];
        return { ...groupedWorklogEntries, [startDate]: newEntries };
      },
      {} as WorklogGroups
    );
    return mergeWorklogs(groupedWorklogs, worklogs);
  }, {});
};
