import React from "react";
import "./App.css";
import Routes from "./Routes";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { Provider } from "react-redux";

const store = configureStore({ reducer: rootReducer });

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
