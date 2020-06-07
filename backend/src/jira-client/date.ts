import moment from "moment";
const JIRA_DATE_FORMAT = "YYYY-MM-DD";
const JIRA_DATE_TIME_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSSZZ";

export const toJiraDateFormat = (date: Date): string => {
  return moment(date).format(JIRA_DATE_FORMAT);
};

export const fromJiraDate = (date: string): Date => {
  return moment(date, JIRA_DATE_FORMAT).toDate();
};

export const toJiraDateTimeFormat = (date: Date): string => {
  return moment(date).format(JIRA_DATE_TIME_FORMAT);
};
