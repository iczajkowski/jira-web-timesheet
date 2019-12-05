import { LoginRequest } from "../../models/LoginRequest";
import { Dispatch } from "react";
import { loginAction } from "./loginActions";
import {} from "axios";

export const authenticate = (request: LoginRequest) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loginAction(request));
  };
};
