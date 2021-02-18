import { createAction } from "@reduxjs/toolkit";
import { Holiday } from "../../models/Holiday";
import { User } from "../../models/User";

export enum WorklogActionTypes {
  LoadWorklogs = "WORKLOGS_LOAD",
  LoadedWorklogs = "WORKLOGS_LOADED",
  LoadedHolidays = "WORKLOG_HOLIDAYS_LOADED",
  ErrorLoadingWorklogs = "WORKLOGS_ERROR",
}

export interface LoadWorklogsPayload {
  user: User;
  month: number;
  year: number;
}

export interface LoadedHolidaysPayload {
  holidays: Holiday[];
}

export const loadWorklogsAction = createAction<LoadWorklogsPayload>(WorklogActionTypes.LoadWorklogs);

export const loadedWorklogsAction = createAction<any>(WorklogActionTypes.LoadedWorklogs);

export const errorLoadingWorklogsAction = createAction<any>(WorklogActionTypes.ErrorLoadingWorklogs);

export const loadedHolidaysAction = createAction<LoadedHolidaysPayload>(WorklogActionTypes.LoadedHolidays);
