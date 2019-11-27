import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/dashboard">
        <DashboardPage />
      </Route>
      <Route path="*">
        <Redirect to={{ pathname: "dashboard" }} />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
