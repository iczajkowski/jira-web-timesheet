import React, { FormEvent } from "react";
import "./LoginForm.css";
import { Button, Form, Input } from "antd";
import { LoginRequest } from "../../models/LoginRequest";
import { FormComponentProps } from "antd/lib/form";
import { WrappedFormUtils } from "antd/lib/form/Form";

interface Props {
  onSubmit: (request: LoginRequest) => void;
  isLoggingIn?: boolean;
  form?: WrappedFormUtils;
}

const LoginForm: React.FunctionComponent<Props & FormComponentProps> = ({
  onSubmit,
  isLoggingIn,
  form
}) => {
  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    form.validateFields((error, values) => {
      if (!error) {
        onSubmit(values);
      }
    });
  };

  const { getFieldDecorator } = form;

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Item>
        {getFieldDecorator("email", {
          rules: [{ required: true, message: "Please input your email" }]
        })(<Input placeholder="Email" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("url", {
          rules: [{ required: true, message: "Please input URL" }]
        })(<Input placeholder="URL" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("apiToken", {
          rules: [{ required: true, message: "Please input token" }]
        })(<Input placeholder="Token" />)}
      </Form.Item>
      <Form.Item>
        <Button
          loading={isLoggingIn}
          type="primary"
          htmlType="submit"
          className="login-form__button"
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedLoginForm = Form.create<Props & FormComponentProps>({
  name: "login"
})(LoginForm);

export default WrappedLoginForm;
