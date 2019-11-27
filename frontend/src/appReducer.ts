import { User } from "./models/User";
import { createReducer } from "@reduxjs/toolkit";
import { AppActionTypes } from "./appActions";

export interface AppState {
  user: User | null;
}

const defaultState: AppState = {
  user: null
};

export const appReducer = createReducer(defaultState, {
  [AppActionTypes.SetUser]: (state, action) => ({
    ...state,
    user: action.payload
  }),
  [AppActionTypes.ClearUser]: state => ({
    ...state,
    user: null
  })
});
