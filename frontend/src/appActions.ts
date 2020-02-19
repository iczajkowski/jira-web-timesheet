import { AnyAction, createAction, PayloadAction } from "@reduxjs/toolkit";
import { User, UserWithUrl } from "./models/User";

export enum AppActionTypes {
  SetUser = "APP_SET_USER",
  ClearUser = "APP_CLEAR_USER",
  SetAuthenticated = "APP_SET_AUTHENTICATED",
  Logout = "APP_LOGOUT"
}

export interface SetUserAction extends PayloadAction<UserWithUrl> {
  type: AppActionTypes.SetUser;
  payload: { user: User; url: string };
}

export interface ClearUserAction extends AnyAction {
  type: AppActionTypes.ClearUser;
}

export interface LogoutAction extends AnyAction {
  type: AppActionTypes.Logout;
}

export type AppActions = SetUserAction | ClearUserAction | LogoutAction;

export const setUserAction = (payload: {
  user: User;
  url: string;
}): SetUserAction => ({
  type: AppActionTypes.SetUser,
  payload
});

export const setAuthenticatedAction = createAction<boolean>(
  AppActionTypes.SetAuthenticated
);

export const logoutAction = createAction(AppActionTypes.Logout);

export const clearUserAction = createAction(AppActionTypes.ClearUser);
