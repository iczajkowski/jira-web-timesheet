import { WorklogsRequest } from "../models/WorklogsRequest";
import { Dispatch } from "redux";
import {
  errorLoadingWorklogsAction,
  loadedWorklogsAction,
  loadWorklogsAction
} from "../components/Home/worklogActions";
import axios, { AxiosResponse } from "axios";
import moment from "moment";

const formatDates = ({ from, to }: { from: Date; to: Date }) => {
  const format = "YYYY-MM-DD";
  return {
    from: moment(from).format(format),
    to: moment(to).format(format)
  };
};

export const getWorklogs = (request: WorklogsRequest) => {
  return (dispatch: Dispatch) => {
    dispatch(loadWorklogsAction());
    const { from, to } = formatDates(request);
    axios
      .get(`/api/worklogs?from=${from}&to=${to}&accountId=${request.accountId}`)
      .then((worklogsResponse: AxiosResponse<any>) => {
        dispatch(loadedWorklogsAction(worklogsResponse.data));
      })
      .catch(() => {
        dispatch(errorLoadingWorklogsAction());
      });
  };
};
