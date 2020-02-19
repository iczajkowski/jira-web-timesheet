import { LoginRequest } from "../models/LoginRequest";
import { Dispatch } from "react";
import {
  loginAction,
  loginSuccess,
  setError
} from "../components/Login/loginActions";
import axios, { AxiosError, AxiosResponse } from "axios";
import { User, UserWithUrl } from "../models/User";
import {
  clearUserAction,
  logoutAction,
  setAuthenticatedAction,
  setUserAction
} from "../appActions";

export const authenticate = (request: LoginRequest) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loginAction());
    axios
      .post("/api/users/authenticate", request)
      .then(_ => {
        dispatch(loginSuccess());
        return axios.get("/api/users/current");
      })
      .then((userResponse: AxiosResponse<User>) => {
        dispatch(setUserAction({ user: userResponse.data, url: request.url }));
        dispatch(setAuthenticatedAction(true));
      })
      .catch((error: AxiosError) => {
        dispatch(setError(error.response && error.response.status));
      });
  };
};

export const checkAuthenticate = () => {
  return (dispatch: Dispatch<any>) => {
    axios
      .get("/api/users/current")
      .then((userResponse: AxiosResponse<UserWithUrl>) => {
        dispatch(setUserAction(userResponse.data));
        dispatch(setAuthenticatedAction(true));
      })
      .catch(() => {
        dispatch(setAuthenticatedAction(false));
      });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(logoutAction());
    axios.post("api/users/logout").then(() => dispatch(clearUserAction()));
  };
};
