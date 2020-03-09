import { Dispatch } from "redux";
import {
  errorLoadingWorklogsAction,
  loadedWorklogsAction,
  loadWorklogsAction
} from "../components/Home/worklogActions";
import axios, { AxiosResponse } from "axios";
import moment from "moment";
import { User } from "../models/User";

const formatDates = ({ from, to }: { from: Date; to: Date }) => {
  const format = "YYYY-MM-DD";
  return {
    from: moment(from).format(format),
    to: moment(to).format(format)
  };
};

export interface GetWorklogsContext {
  user: User;
  from: Date;
  to: Date;
}

export const getWorklogs = ({ from, to, user }: GetWorklogsContext) => {
  return (dispatch: Dispatch) => {
    const formattedDate = formatDates({ from, to });
    dispatch(loadWorklogsAction({ user }));
    axios
      .get(
        `/api/worklogs?from=${formattedDate.from}&to=${formattedDate.to}&accountId=${user.accountId}`
      )
      .then((worklogsResponse: AxiosResponse<any>) => {
        dispatch(loadedWorklogsAction(worklogsResponse.data));
      })
      .catch(() => {
        dispatch(errorLoadingWorklogsAction());
      });
  };
};
