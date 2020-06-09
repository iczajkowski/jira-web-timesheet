import { Worklog } from "../../../models/Worklog";
import { WorklogModel } from "./groupWorklogsByDates";

export const sumTotalLoggedTime = (
  worklogs: (Worklog | WorklogModel)[]
): number => {
  if (!worklogs) {
    return 0;
  } else if (isWorklogs(worklogs)) {
    return sumForWorklog(worklogs);
  } else {
    return sumForWorklogModels(worklogs as WorklogModel[]);
  }
};

const sumForWorklog = (worklogs: Worklog[]): number => {
  return worklogs.reduce(
    (sum, worklog) =>
      sum +
      worklog.worklogs.reduce(
        (subSum, worklogItem) => subSum + worklogItem.timeSpentSeconds,
        0
      ),
    0
  );
};

const sumForWorklogModels = (worklogs: WorklogModel[]): number => {
  return worklogs.reduce((sum, worklog) => sum + worklog.timeSpent, 0);
};

const isWorklogs = (value: any[]): value is Worklog[] => {
  const firstItem = value[0];
  if (!firstItem) {
    return false;
  }
  return firstItem["worklogs"] instanceof Array;
};
