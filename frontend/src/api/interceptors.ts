import axios from "axios";
import { EnhancedStore } from "@reduxjs/toolkit";
import { clearUserAction } from "../appActions";

const interceptors = ({ dispatch }: EnhancedStore) => {
  axios.interceptors.response.use(undefined, (error: any) => {
    if (error.response.status === 401) {
      dispatch(clearUserAction());
    }
    return Promise.reject(error);
  });
};

export default interceptors;
