import { createReducer } from "@reduxjs/toolkit";
import { LoginActionTypes } from "./loginActions";

export interface LoginState {
  isLoggingIn: boolean;
  error: any;
}

export const defaultState: LoginState = {
  isLoggingIn: false,
  error: null
};

export const loginReducer = createReducer(defaultState, {
  [LoginActionTypes.Login]: (state, action) => ({
    ...state,
    isLoggingIn: true
  }),
  [LoginActionTypes.LoginSuccess]: (state, action) => ({
    ...state,
    isLoggingIn: false
  }),
  [LoginActionTypes.SetError]: (state, action) => ({
    ...state,
    error: action.payload,
    isLoggingIn: false
  })
});
