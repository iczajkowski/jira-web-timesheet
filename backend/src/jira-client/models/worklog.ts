import { Author } from "./author";

export interface Worklog {
  created: string;
  updated: string;
  started: string;
  timeSpent: string;
  timeSpentSeconds: number;
  id: string;
  issueId: string;
  name: string;
  key: string;
  accountId: string;
  emailAddress: string;
  author: Author;
  updateAuthor: Author;
}
