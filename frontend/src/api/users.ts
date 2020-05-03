import axios, { AxiosResponse } from "axios";
import { User, UserWithUrl } from "../models/User";

export interface AuthenticateRequest {
  email: string;
  url: string;
  apiToken: string;
  rememberMe: boolean;
}

export const authenticate = (request: AuthenticateRequest) =>
  axios.post("/api/users/authenticate", request);

export const current = () => axios.get<UserWithUrl>("/api/users/current");

export const logout = () => axios.post("api/users/logout");

export const searchUsers = (name: string): Promise<AxiosResponse<User[]>> => {
  return axios.get("/api/users/search", { params: { query: name } });
};

export const getUser = (accountId: string): Promise<AxiosResponse<User>> => {
  const encodedUrlParams = encodeURIComponent(accountId);
  return axios.get(`/api/users/${encodedUrlParams}`);
};
