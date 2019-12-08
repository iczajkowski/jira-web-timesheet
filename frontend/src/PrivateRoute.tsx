import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./reducer";
import { Route, Redirect } from "react-router-dom";

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
          children
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
