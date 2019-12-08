import { appReducer, AppState } from "./appReducer";
import { combineReducers } from "redux";
import { loginReducer, LoginState } from "./components/Login/loginReducer";

export interface RootState {
  appState: AppState;
  login: LoginState;
}

export const rootReducer = combineReducers({
  appState: appReducer,
  login: loginReducer
});
