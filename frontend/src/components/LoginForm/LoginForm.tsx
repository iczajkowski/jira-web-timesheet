import React, { ChangeEvent, FormEvent, useState } from "react";
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
    <form onSubmit={onFormSubmit}>
      Email
      <input onChange={event => handleInputChange(event, onEmailChange)} />
      URL:
      <input onChange={event => handleInputChange(event, onURLChange)} />
      Token:
      <input onChange={event => handleInputChange(event, onTokenChange)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
