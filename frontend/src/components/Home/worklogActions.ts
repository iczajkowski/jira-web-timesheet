import { createAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";

export enum WorklogActionTypes {
  LoadWorklogs = "WORKLOGS_LOAD",
  LoadedWorklogs = "WORKLOGS_LOADED",
  ErrorLoadingWorklogs = "WORKLOGS_ERROR"
}

export interface LoadWorklogsPayload {
  user: User;
}

export const loadWorklogsAction = createAction<LoadWorklogsPayload>(
  WorklogActionTypes.LoadWorklogs
);
export const loadedWorklogsAction = createAction<any>(
  WorklogActionTypes.LoadedWorklogs
);
export const errorLoadingWorklogsAction = createAction<any>(
  WorklogActionTypes.ErrorLoadingWorklogs
);
