import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { LoginRequest } from "../../models/LoginRequest";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./authenticate";
import { RootState } from "../../reducer";
import { Redirect } from "react-router-dom";

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
    <LoginForm onSubmit={onLogin} />
  );
};

export default Login;
