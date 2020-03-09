import axios, { AxiosResponse } from "axios";
import { User } from "../models/User";

export const searchUsers = (name: string): Promise<AxiosResponse<User[]>> => {
  return axios.get("/api/users/search", { params: { query: name } });
};
