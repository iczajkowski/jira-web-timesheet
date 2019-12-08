import React from "react";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { Provider } from "react-redux";
import AppEntry from "./AppEntry";

const store = configureStore({ reducer: rootReducer });

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  );
};

export default App;
