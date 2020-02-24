import React from "react";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { Provider } from "react-redux";
import AppEntry from "./AppEntry";
import { ConfigProvider } from "antd";
import "moment/locale/en-gb";
import en_GB from "antd/lib/locale-provider/en_GB";

const store = configureStore({ reducer: rootReducer });

const App: React.FC = () => {
  return (
    <ConfigProvider locale={en_GB}>
      <Provider store={store}>
        <AppEntry />
      </Provider>
    </ConfigProvider>
  );
};

export default App;
