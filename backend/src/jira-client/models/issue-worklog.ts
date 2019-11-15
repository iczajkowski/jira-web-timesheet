import { Worklog } from "./worklog";

export interface IssueWorklog {
  issueKey: string;
  worklogs: Worklog[];
}
