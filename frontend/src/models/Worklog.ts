export interface Worklog {
  issueKey: string;
  worklogs: WorklogEntry[];
}

export interface WorklogEntry {
  comment: string;
  created: string;
  updated: string;
  started: string;
  timeSpent: string;
  timeSpentSeconds: number;
  id: string;
  issueId: string;
}
