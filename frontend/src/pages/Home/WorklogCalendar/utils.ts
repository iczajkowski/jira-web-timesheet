import { Moment } from "moment";
import { Holiday } from "../../../models/Holiday";

export const getHoliday = (holidays: Holiday[]) => (date: Moment): Holiday | null => {
  const monthNumber = date.month() + 1;
  const year = date.year();
  const day = date.date();
  return (
    holidays.find(({date}) => {
      return date.day === day && date.month === monthNumber && year === date.year;
    }) || null
  );
};

const getHolidayNameByLang = (lang: string) => (holiday: Holiday) => {
  const result = holiday.name.find((value) => value.lang === lang);
  return result && result.text;
};

export const getHolidayName = (holiday: Holiday): string => {
  const getDefaultName = getHolidayNameByLang("pl");
  const getFallbackName = getHolidayNameByLang("en");
  return getDefaultName(holiday) || getFallbackName(holiday) || "";
};
