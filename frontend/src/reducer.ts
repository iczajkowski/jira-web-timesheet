import { appReducer, AppState } from "./appReducer";
import { combineReducers } from "redux";
import { loginReducer, LoginState } from "./components/Login/loginReducer";
import { worklogReducer, WorklogState } from "./components/Home/worklogReducer";

export interface RootState {
  appState: AppState;
  login: LoginState;
  worklogs: WorklogState;
}

export const rootReducer = combineReducers({
  appState: appReducer,
  login: loginReducer,
  worklogs: worklogReducer
});
