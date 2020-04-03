import axios, { AxiosResponse } from "axios";
import { User } from "../models/User";

export const searchUsers = (name: string): Promise<AxiosResponse<User[]>> => {
  return axios.get("/api/users/search", { params: { query: name } });
};

export const getUser = (accountId: string): Promise<AxiosResponse<User>> => {
  const encodedUrlParams = encodeURIComponent(accountId);
  return axios.get(`/api/users/${encodedUrlParams}`);
};
