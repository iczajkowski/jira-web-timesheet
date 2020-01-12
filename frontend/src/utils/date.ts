import { Moment } from "moment";
import moment from "moment-timezone";

export const getDateInTimezone = (
  startDate: string,
  userTimezone: string
): Moment => {
  return moment.tz(moment(startDate), userTimezone);
};
