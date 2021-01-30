import { SimpleDuration, toSimpleDuration } from "../../../utils/duration";
import { FULL_WORKDAY_IN_SECONDS } from "../../../utils/constants";

export const getInitialDurationValue = (
  timeLoggedForSelectedDate: number
): SimpleDuration => {
  const leftTimeToLog = FULL_WORKDAY_IN_SECONDS - timeLoggedForSelectedDate;
  const hasFullDayLogged = leftTimeToLog < 0;

  if (hasFullDayLogged) {
    return {
      hours: 0,
      minutes: 0
    };
  }

  return toSimpleDuration(leftTimeToLog);
};
