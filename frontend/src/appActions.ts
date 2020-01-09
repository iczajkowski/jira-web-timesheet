import { AnyAction, createAction, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./models/User";

export enum AppActionTypes {
  SetUser = "APP_SET_USER",
  ClearUser = "APP_CLEAR_USER",
  SetAuthenticated = "APP_SET_AUTHENTICATED",
  Logout = "APP_LOGOUT"
}

export interface SetUserAction extends PayloadAction<User> {
  type: AppActionTypes.SetUser;
  payload: User;
}

export interface ClearUserAction extends AnyAction {
  type: AppActionTypes.ClearUser;
}

export interface LogoutAction extends AnyAction {
  type: AppActionTypes.Logout;
}

export type AppActions = SetUserAction | ClearUserAction | LogoutAction;

export const setUserAction = (user: User): SetUserAction => ({
  type: AppActionTypes.SetUser,
  payload: user
});

export const setAuthenticatedAction = createAction<boolean>(
  AppActionTypes.SetAuthenticated
);

export const logoutAction = createAction(AppActionTypes.Logout);

export const clearUserAction = createAction(AppActionTypes.ClearUser);
