import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./reducer";
import { Route, Redirect } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";

// @ts-ignore
const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.appState.isAuthenticated
  );

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <MainLayout>{children}</MainLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
