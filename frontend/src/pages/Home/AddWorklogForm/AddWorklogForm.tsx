import React, { useEffect } from "react";
import { DatePicker, Form, InputNumber, Typography } from "antd";
import { FormComponentProps } from "antd/lib/form";
import IssueSearch from "../IssueSearch/IssueSearch";
import * as moment from "moment";

export interface AddWorklogFormProps {
  validationPassed: boolean;
  initialDate: moment.Moment;
  onChange: () => void;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};

const AddWorklogForm: React.FC<FormComponentProps & AddWorklogFormProps> = ({
  form,
  initialDate,
  validationPassed,
  onChange
}) => {
  const { getFieldDecorator } = form;

  useEffect(() => {
    form.resetFields();
  }, [initialDate]);

  return (
    <Form onChange={onChange}>
      <Form.Item label="Issue" {...formItemLayout}>
        {getFieldDecorator("issue", {
          rules: [{ required: true, message: "Please select issue" }]
        })(<IssueSearch />)}
      </Form.Item>
      <Form.Item label="Started at" {...formItemLayout}>
        {getFieldDecorator("started", {
          rules: [{ required: true, message: "Please select date" }],
          initialValue: initialDate
        })(<DatePicker showTime={true} />)}
      </Form.Item>
      <Form.Item label="Hours" labelCol={{ sm: 4 }} wrapperCol={{ sm: 4 }}>
        {getFieldDecorator("hours", {
          rules: [{ required: true, message: "Please select date" }],
          initialValue: 0
        })(<InputNumber min={0} max={24} />)}
      </Form.Item>
      <Form.Item label="Minutes" labelCol={{ sm: 4 }} wrapperCol={{ sm: 4 }}>
        {getFieldDecorator("minutes", {
          rules: [{ required: true, message: "Please select date" }],
          initialValue: 0
        })(<InputNumber min={0} max={59} />)}
      </Form.Item>
      {validationPassed ? (
        ""
      ) : (
        <Typography.Text type="danger">
          Minutes or hours need to be provided
        </Typography.Text>
      )}
    </Form>
  );
};

export default AddWorklogForm;
