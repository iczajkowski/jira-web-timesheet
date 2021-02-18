import { Dispatch } from "redux";
import {
  errorLoadingWorklogsAction,
  loadedHolidaysAction,
  loadedWorklogsAction,
  loadWorklogsAction,
} from "../pages/Home/worklogActions";
import { getWorklogs, GetWorklogsParams } from "../api/worklogs";
import { getHolidays } from "../api/holidays";

export const getWorklogsDispatch = (params: GetWorklogsParams) => {
  return (dispatch: Dispatch) => {
    const month = params.from.getMonth();
    const year = params.from.getFullYear();
    dispatch(
      loadWorklogsAction({
        user: params.user,
        month,
        year,
      })
    );

    getHolidays({ country: "pl", month: month + 1, year }).then((holidays) => dispatch(loadedHolidaysAction({ holidays })));

    getWorklogs(params)
      .then((worklogsResponse) => {
        dispatch(loadedWorklogsAction(worklogsResponse.data));
      })
      .catch(() => {
        dispatch(errorLoadingWorklogsAction());
      });
  };
};
