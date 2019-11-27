import { appReducer, AppState } from "./appReducer";
import { combineReducers } from "redux";

export interface RootState {
  appState: AppState;
}

export const rootReducer = combineReducers({
  appState: appReducer
});
