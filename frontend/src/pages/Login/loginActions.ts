import { createAction } from "@reduxjs/toolkit";

export enum LoginActionTypes {
  Login = "LOGIN_LOGIN",
  LoginSuccess = "LOGIN_SUCCESS",
  SetError = "LOGIN_SET_ERROR"
}

export const loginAction = createAction<void>(LoginActionTypes.Login);
export const loginSuccess = createAction<void>(LoginActionTypes.LoginSuccess);
export const setError = createAction<any>(LoginActionTypes.SetError);
