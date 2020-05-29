import React from "react";
import { Form, Input } from "antd";
import { FormComponentProps } from "antd/lib/form";
import IssueSearch from "../IssueSearch/IssueSearch";

const AddWorklogForm: React.FC<FormComponentProps> = ({ form }) => {
  const { getFieldDecorator } = form;

  return (
    <Form>
      <Form.Item label="Issue:">
        {getFieldDecorator("issue", {
          rules: [{ required: true, message: "Please select issue" }]
        })(<IssueSearch />)}
      </Form.Item>
    </Form>
  );
};

const WrappedAddWorklogForm = Form.create<FormComponentProps>()(AddWorklogForm);

export default WrappedAddWorklogForm;
