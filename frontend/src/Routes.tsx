import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import PrivateRoute from "./PrivateRoute";

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/dashboard">
        <Home />
      </PrivateRoute>
      <Route path="*">
        <Redirect to={{ pathname: "dashboard" }} />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
