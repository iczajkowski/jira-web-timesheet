export interface IssuesResponse {
  expand: string;
  issues: IssueResponse[];
  maxResults: number;
  total: number;
}

export interface IssueResponse {
  expand: string;
  id: string;
  key: string;
  self: string;
  fields: { [key: string]: string };
}
