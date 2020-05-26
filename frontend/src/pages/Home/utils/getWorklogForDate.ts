import { DATE_FORMAT, WorklogGroups } from "./groupWorklogsByDates";
import moment from "moment";

export const getWorklogForDate = (
  worklogGroups: WorklogGroups,
  date: moment.Moment
) => {
  const key = date.format(DATE_FORMAT);
  return worklogGroups[key] || [];
};
