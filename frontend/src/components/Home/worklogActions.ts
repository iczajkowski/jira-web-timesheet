import { createAction } from "@reduxjs/toolkit";

export enum WorklogActionTypes {
  LoadWorklogs = "WORKLOGS_LOAD",
  LoadedWorklogs = "WORKLOGS_LOADED",
  ErrorLoadingWorklogs = "WORKLOGS_ERROR"
}

export const loadWorklogsAction = createAction<void>(
  WorklogActionTypes.LoadWorklogs
);
export const loadedWorklogsAction = createAction<any>(
  WorklogActionTypes.LoadedWorklogs
);
export const errorLoadingWorklogsAction = createAction<any>(
  WorklogActionTypes.ErrorLoadingWorklogs
);
