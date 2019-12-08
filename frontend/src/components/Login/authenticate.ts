import { LoginRequest } from "../../models/LoginRequest";
import { Dispatch } from "react";
import { loginAction, loginSuccess, setError } from "./loginActions";
import axios, { AxiosError, AxiosResponse } from "axios";
import { User } from "../../models/User";
import { setAuthenticated, setUserAction } from "../../appActions";

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
        dispatch(setUserAction(userResponse.data));
        dispatch(setAuthenticated(true));
      })
      .catch((error: AxiosError) => {
        dispatch(setError((error.response && error.response.data) || null));
      });
  };
};

export const checkAuthenticate = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loginAction);
    axios
      .get("/api/users/current")
      .then((userResponse: AxiosResponse<User>) => {
        dispatch(setUserAction(userResponse.data));
        dispatch(setAuthenticated(true));
      })
      .catch((error: AxiosError) => {
        dispatch(setAuthenticated(false));
      });
  };
};
