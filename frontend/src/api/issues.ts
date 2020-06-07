import axios, { AxiosResponse } from "axios";
import { IssueSearchResponse } from "../models/Issue";

export const issues = (
  query: string
): Promise<AxiosResponse<IssueSearchResponse[]>> =>
  axios.get("/api/issues", { params: { query } });
