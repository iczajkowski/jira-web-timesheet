import axios from "axios";
import { isNil, mapValues } from "lodash";
import { Holiday } from "../models/Holiday";
import holidayCache from "../services/holidaysCache";

export interface GetHolidayParams {
  /**
   * Month numbered from 1 (January is 1)
   */
  month: number;
  year: number;
  /**
   * Alpha 2 country code
   */
  country: string;
}

export const getHolidays = (params: GetHolidayParams): Promise<Holiday[]> => {
  const cached = holidayCache.get(params);
  if(!isNil(cached)) {
    return Promise.resolve(cached);
  }

  const stringParams = mapValues(params, (value) => value.toString());
  const queryParams = new URLSearchParams(stringParams);
  return axios.get("api/holidays", { params: queryParams }).then(({ data }) => {
    holidayCache.save(params, data);
    return data;
  });
};
