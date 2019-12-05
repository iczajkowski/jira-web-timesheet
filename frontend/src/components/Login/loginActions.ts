import { PayloadAction, AnyAction, createAction } from "@reduxjs/toolkit";
import { LoginRequest } from "../../models/LoginRequest";

export enum LoginActionTypes {
  Login = "LOGIN_LOGIN",
  LoginSuccess = "LOGIN_SUCCESS",
  SetError = "LOGIN_SET_ERROR"
}

export interface LoginAction extends PayloadAction<LoginRequest> {
  type: LoginActionTypes.Login;
  payload: LoginRequest;
}

export interface LoginSuccess extends AnyAction {
  type: LoginActionTypes.LoginSuccess;
}

export interface ErrorAction extends PayloadAction<any> {
  type: LoginActionTypes.SetError;
  payload: any;
}

export type LoginActions = LoginAction | LoginSuccess | ErrorAction;

export const loginAction = createAction<LoginRequest>(LoginActionTypes.Login);
export const loginSuccess = createAction<void>(LoginActionTypes.LoginSuccess);
export const setError = createAction<any>(LoginActionTypes.SetError);
