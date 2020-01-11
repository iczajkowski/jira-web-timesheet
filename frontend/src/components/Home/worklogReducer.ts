import { createReducer } from "@reduxjs/toolkit";
import { WorklogActionTypes } from "./worklogActions";

export interface WorklogState {
  isFetchingWorklogs: boolean;
  worklogs: any;
  error: any;
}

export const defaultState: WorklogState = {
  isFetchingWorklogs: false,
  worklogs: null,
  error: null
};

export const worklogReducer = createReducer(defaultState, {
  [WorklogActionTypes.LoadWorklogs]: state => ({
    ...state,
    isFetchingWorklogs: true
  }),
  [WorklogActionTypes.LoadedWorklogs]: (state, action) => ({
    ...state,
    worklogs: action.payload,
    isFetchingWorklogs: false
  }),
  [WorklogActionTypes.ErrorLoadingWorklogs]: (state, action) => ({
    ...state,
    error: action.payload,
    isFetchingWorklogs: false
  })
});
