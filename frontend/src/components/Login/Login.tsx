import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { LoginRequest } from "../../models/LoginRequest";

const Login: React.FC = () => {
  const onLogin = (loginRequest: LoginRequest) =>
    console.log("onLogin", loginRequest);

  return (
    <div>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default Login;
