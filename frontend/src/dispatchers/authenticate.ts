import { Dispatch } from "react";
import {
  loginAction,
  loginSuccess,
  setError
} from "../components/Login/loginActions";
import { AxiosError, AxiosResponse } from "axios";
import { UserWithUrl } from "../models/User";
import {
  clearUserAction,
  logoutAction,
  setAuthenticatedAction,
  setUserAction
} from "../appActions";
import {
  authenticate,
  AuthenticateRequest,
  current,
  logout
} from "../api/users";

export const authenticateDispatch = (request: AuthenticateRequest) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loginAction());
    authenticate(request)
      .then(() => {
        dispatch(loginSuccess());
        return current();
      })
      .then((userResponse: AxiosResponse<UserWithUrl>) => {
        dispatch(setUserAction(userResponse.data));
        dispatch(setAuthenticatedAction(true));
      })
      .catch((error: AxiosError) => {
        dispatch(setError(error.response && error.response.status));
      });
  };
};

export const checkAuthenticateDispatch = () => {
  return (dispatch: Dispatch<any>) => {
    current()
      .then((userResponse: AxiosResponse<UserWithUrl>) => {
        dispatch(setUserAction(userResponse.data));
        dispatch(setAuthenticatedAction(true));
      })
      .catch(() => {
        dispatch(setAuthenticatedAction(false));
      });
  };
};

export const logoutDispatch = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(logoutAction());
    logout().then(() => dispatch(clearUserAction()));
  };
};
