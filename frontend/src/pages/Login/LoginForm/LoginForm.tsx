import React, { FormEvent } from "react";
import "./LoginForm.css";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { AuthenticateRequest } from "../../../api/users";

const { Text } = Typography;

interface Props {
  onSubmit: (request: AuthenticateRequest) => void;
  isLoggingIn?: boolean;
  loginError?: any;
  form?: WrappedFormUtils;
}

const LoginForm: React.FunctionComponent<Props & FormComponentProps> = ({
  onSubmit,
  isLoggingIn,
  loginError,
  form
}) => {
  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    form.validateFields((error: any, values: AuthenticateRequest) => {
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
        {getFieldDecorator("rememberMe", {
          valuePropName: "checked",
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)}
      </Form.Item>
      <Button
        loading={isLoggingIn}
        type="primary"
        htmlType="submit"
        className="login-form__button"
      >
        Log in
      </Button>
      {loginError && (
        <div className="login-form__error">
          <Text type="danger">Incorrect login data</Text>
        </div>
      )}
    </Form>
  );
};

const WrappedLoginForm = Form.create<Props & FormComponentProps>({
  name: "login"
})(LoginForm);

export default WrappedLoginForm;
