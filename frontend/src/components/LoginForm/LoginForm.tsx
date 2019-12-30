import React, { ChangeEvent, FormEvent, useState } from "react";
import "./LoginForm.css";
import {Button, Form, Input} from "antd";
import { LoginRequest } from "../../models/LoginRequest";

interface Props {
  onSubmit: (request: LoginRequest) => void;
}

const LoginForm: React.FunctionComponent<Props> = ({ onSubmit }) => {
  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    apiToken: "",
    email: "",
    url: ""
  });

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(loginRequest);
  };

  const onEmailChange = (email: string) =>
    setLoginRequest({ ...loginRequest, email });

  const onURLChange = (url: string) =>
    setLoginRequest({ ...loginRequest, url });

  const onTokenChange = (apiToken: string) =>
    setLoginRequest({ ...loginRequest, apiToken });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    handler: (value: string) => void
  ) => {
    const value = event.target.value;
    handler(value);
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Item>
        <Input onChange={event => handleInputChange(event, onEmailChange)} placeholder="Email" />
      </Form.Item>
      <Form.Item>
        <Input onChange={event => handleInputChange(event, onURLChange)} placeholder="URL"  />
      </Form.Item>
      <Form.Item>
        <Input onChange={event => handleInputChange(event, onTokenChange)} placeholder="Token"  />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form__button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
