import { User } from "./models/User";
import { createReducer } from "@reduxjs/toolkit";
import { AppActionTypes } from "./appActions";

export interface AppState {
  user: User | null;
  isAuthenticated: boolean | undefined;
}

const defaultState: AppState = {
  user: null,
  isAuthenticated: undefined
};

export const appReducer = createReducer(defaultState, {
  [AppActionTypes.SetUser]: (state, action) => ({
    ...state,
    user: action.payload
  }),
  [AppActionTypes.ClearUser]: state => ({
    ...state,
    user: null,
    isAuthenticated: false
  }),
  [AppActionTypes.SetAuthenticated]: (state, action) => ({
    ...state,
    isAuthenticated: action.payload
  })
});
