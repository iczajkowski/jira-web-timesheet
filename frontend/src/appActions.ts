import { AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./models/User";

export enum AppActionTypes {
  SetUser = "APP_SET_USER",
  ClearUser = "APP_CLEAR_USER"
}

export interface SetUserAction extends PayloadAction<User> {
  type: AppActionTypes.SetUser;
  payload: User;
}

export interface ClearUserAction extends AnyAction {
  type: AppActionTypes.ClearUser;
}

export type AppActions = SetUserAction | ClearUserAction;

export const setUserAction = (user: User): SetUserAction => ({
  type: AppActionTypes.SetUser,
  payload: user
});
