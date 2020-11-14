import React, { FormEvent } from "react";
import "./LoginForm.css";
import {
  Button,
  Checkbox,
  Form,
  Icon,
  Input,
  Popover,
  Tooltip,
  Typography
} from "antd";
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
        })(
          <Input
            placeholder="Email"
            prefix={<Icon type="user"></Icon>}
            suffix={
              <Tooltip title="Please input your jira account email">
                <Icon type="info-circle" />
              </Tooltip>
            }
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("url", {
          rules: [{ required: true, message: "Please input URL" }]
        })(
          <Input
            addonBefore="https://"
            placeholder="URL"
            suffix={
              <Tooltip title="Please enter your jira instance url - ex. www.atlassian.com">
                <Icon type="info-circle" />
              </Tooltip>
            }
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("apiToken", {
          rules: [{ required: true, message: "Please input token" }]
        })(
          <Input
            placeholder="API Token"
            suffix={
              <Popover
                content={
                  <span>
                    To generate API token for this app go to
                    <a
                      className="jira-link"
                      href="https://id.atlassian.com/manage-profile/security/api-tokens"
                      target="_blank"
                    >
                      https://id.atlassian.com/manage-profile/security/api-tokens
                    </a>
                  </span>
                }
              >
                <Icon type="info-circle" />
              </Popover>
            }
          />
        )}
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
