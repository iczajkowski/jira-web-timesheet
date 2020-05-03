import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { authenticateDispatch } from "../../dispatchers/authenticate";
import { RootState } from "../../reducer";
import { Redirect } from "react-router-dom";
import { Card, Col, Layout, Row } from "antd";
import "./Login.css";
import { AuthenticateRequest } from "../../api/users";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const onLogin = (loginRequest: AuthenticateRequest) =>
    authenticateDispatch(loginRequest)(dispatch);

  const isAuthenticated = useSelector(
    (state: RootState) => state.appState.isAuthenticated
  );

  const isLoggingIn = useSelector(
    (state: RootState) => state.login.isLoggingIn
  );

  const loginError = useSelector((state: RootState) => state.login.error);

  return isAuthenticated ? (
    <Redirect to={{ pathname: "dashboard" }} />
  ) : (
    <Layout style={{ height: "100%" }}>
      <Layout.Content style={{ padding: "50px 50px" }}>
        <Row className="login__card-wrapper">
          <Col md={{ span: 12, offset: 6 }} xl={{ span: 8, offset: 8 }}>
            <Card className="login__card">
              <h2>Sign in</h2>
              <LoginForm
                onSubmit={onLogin}
                isLoggingIn={isLoggingIn}
                loginError={loginError}
              />
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default Login;
