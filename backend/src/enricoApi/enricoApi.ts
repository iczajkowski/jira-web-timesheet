import axios from "axios";
import { logger } from "../shared";

interface EnricoHolidayForMonthContext {
  /**
   * Month numbered from 1 (January is 1)
   */
  month: number;
  year: number;
  /**
   * Alpha 2 country code
   */
  country: string;
  holidayType: EnricoHolidayType;
}

export type EnricoHolidayType = "public_holiday" | "observance" | "school_holiday" | "other_day" | "extra_working_day";

export interface EnricoDate {
  day: number;
  month: number;
  year: number;
  dayOfWeek: number;
}

export interface EnricoEventName {
  lang: string;
  text: string;
}

export interface EnricoHoliday {
  date: EnricoDate;
  name: EnricoEventName[];
  holidayType: EnricoHolidayType;
}

const toStringParams = (obj: Record<string, any>) =>
  Object.keys(obj).reduce((aggregate: Record<string, string>, key: string) => {
    return { ...aggregate, [key]: String(obj[key]) };
  }, {});

export const getEnricoApi = (url: string) => {
  return {
    getHolidaysForMonth: (context: EnricoHolidayForMonthContext): Promise<EnricoHoliday[]> => {
      logger.debug(
        `Fetching enrico holidays for month: ${context.month}, year: ${context.year}, country: ${context.country}`
      );
      const urlParams = new URLSearchParams({ ...toStringParams(context), action: "getHolidaysForMonth" });
      return axios.get(url, { params: urlParams }).then((res) => res.data);
    },
  };
};

const enricoApi = getEnricoApi("https://kayaposoft.com/enrico/json/v2.0/");
export default enricoApi;
