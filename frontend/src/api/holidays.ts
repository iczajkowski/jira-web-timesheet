import axios from "axios";
import { mapValues } from "lodash";
import { Holiday } from "../models/Holiday";

interface GetHolidayParams {
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
  const stringParams = mapValues(params, (value) => value.toString());
  const queryParams = new URLSearchParams(stringParams);
  return axios.get("api/holidays", { params: queryParams }).then(({ data }) => data);
};
