import React from "react";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { Provider } from "react-redux";
import AppEntry from "./AppEntry";
import {Layout} from "antd";

const store = configureStore({ reducer: rootReducer });

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout style={{ height: '100%'}}>
        <Layout.Content style={{ padding: '50px 50px' }}>
          <AppEntry />
        </Layout.Content>
      </Layout>
    </Provider>
  );
};

export default App;
