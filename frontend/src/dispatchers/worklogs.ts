import { Dispatch } from "redux";
import {
  errorLoadingWorklogsAction,
  loadedWorklogsAction,
  loadWorklogsAction
} from "../pages/Home/worklogActions";
import { getWorklogs, GetWorklogsParams } from "../api/worklogs";

export const getWorklogsDispatch = (params: GetWorklogsParams) => {
  return (dispatch: Dispatch) => {
    const month = params.from.getMonth();
    const year = params.from.getFullYear();
    dispatch(
      loadWorklogsAction({
        user: params.user,
        month,
        year
      })
    );
    getWorklogs(params)
      .then(worklogsResponse => {
        dispatch(loadedWorklogsAction(worklogsResponse.data));
      })
      .catch(() => {
        dispatch(errorLoadingWorklogsAction());
      });
  };
};
