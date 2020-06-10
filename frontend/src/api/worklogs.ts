import axios from "axios";
import { User } from "../models/User";
import moment from "moment";

export interface GetWorklogsParams {
  user: User;
  from: Date;
  to: Date;
}

const formatDates = ({ from, to }: { from: Date; to: Date }) => {
  const format = "YYYY-MM-DD";
  return {
    from: moment(from).format(format),
    to: moment(to).format(format)
  };
};

export const getWorklogs = ({ from, to, user }: GetWorklogsParams) => {
  const formattedDate = formatDates({ from, to });
  return axios.get(
    `/api/worklogs?from=${formattedDate.from}&to=${formattedDate.to}&accountId=${user.accountId}`
  );
};

export const postWorklog = (worklog: any) => {
  return axios.post("api/worklogs", worklog);
};

export const deleteWorklog = ({
  worklogId,
  issueId
}: {
  worklogId: string;
  issueId: string;
}) => {
  return axios.delete(`/api/worklogs/${issueId}/${worklogId}`);
};
