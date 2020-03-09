import { createReducer } from "@reduxjs/toolkit";
import { WorklogActionTypes } from "./worklogActions";
import { User } from "../../models/User";

export interface WorklogState {
  isFetchingWorklogs: boolean;
  user: User | null;
  worklogs: any;
  error: any;
}

export const defaultState: WorklogState = {
  isFetchingWorklogs: false,
  user: null,
  worklogs: null,
  error: null
};

export const worklogReducer = createReducer(defaultState, {
  [WorklogActionTypes.LoadWorklogs]: (state, action) => ({
    ...state,
    user: action.payload.user,
    isFetchingWorklogs: true,
    error: null
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
