import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { LoginRequest } from "../../models/LoginRequest";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./authenticate";
import { RootState } from "../../reducer";
import { Redirect } from "react-router-dom";
import {Card, Layout} from "antd";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const onLogin = (loginRequest: LoginRequest) =>
    authenticate(loginRequest)(dispatch);

  const isAuthenticated = useSelector(
    (state: RootState) => state.appState.isAuthenticated
  );

  return isAuthenticated ? (
    <Redirect to={{ pathname: "dashboard" }} />
  ) : (

        <Card>
          <LoginForm onSubmit={onLogin} />
        </Card>
  );
};

export default Login;
