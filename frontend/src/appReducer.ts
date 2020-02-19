import { User } from "./models/User";
import { createReducer } from "@reduxjs/toolkit";
import { AppActionTypes } from "./appActions";

export interface AppState {
  url: string | null;
  user: User | null;
  isAuthenticated: boolean | undefined;
}

const defaultState: AppState = {
  url: null,
  user: null,
  isAuthenticated: undefined
};

export const appReducer = createReducer(defaultState, {
  [AppActionTypes.SetUser]: (state, action) => ({
    ...state,
    user: action.payload.user,
    url: action.payload.url
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
