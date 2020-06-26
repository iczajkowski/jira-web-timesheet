import AddWorklogForm from "../AddWorklogForm/AddWorklogForm";
import { Form, Modal } from "antd";
import React, { useState } from "react";
import * as moment from "moment";
import { FormComponentProps } from "antd/lib/form";
import { postWorklog } from "../../../api/worklogs";
import { IssueSearchResponse } from "../../../models/Issue";
import { WorklogEntryRequest } from "../../../models/Worklog";

interface WorklogForm {
  issue: IssueSearchResponse;
  started: moment.Moment;
  hours: number;
  minutes: number;
}

const formToWorklogRequest = ({
  issue,
  started,
  hours,
  minutes
}: WorklogForm): WorklogEntryRequest => {
  const issueId = issue.id;
  const startedString = started.format();
  const timeSpentSeconds = hours * 3600 + minutes * 60;
  return {
    issueId,
    started: startedString,
    timeSpent: timeSpentSeconds
  };
};

export interface AddWorklogFormModalProps {
  selectedDate: moment.Moment;
  modalVisible: boolean;
  onHideModal: () => void;
  onAdded: () => void;
}

const AddWorklogFormModal: React.FC<FormComponentProps &
  AddWorklogFormModalProps> = ({
  selectedDate,
  modalVisible,
  onHideModal,
  onAdded,
  form
}) => {
  const [pending, setPending] = useState(false);
  const [validationPassed, setValidationPassed] = useState(true);

  const validateTimeSpent = () => {
    const minutes = form.getFieldValue("minutes");
    const hours = form.getFieldDecorator("hours");
    const valid = minutes || hours;
    setValidationPassed(!!valid);
  };

  const handleOk = () => {
    validateTimeSpent();
    form.validateFields(err => {
      if (!err && validationPassed) {
        setPending(true);
        const request = formToWorklogRequest(
          form.getFieldsValue() as WorklogForm
        );
        postWorklog(request).then(() => {
          setPending(false);
          onAdded();
        });
      }
    });
  };

  const handleFormChange = () => {
    validateTimeSpent();
  };

  const initialDate = selectedDate
    .clone()
    .hour(8)
    .minute(0)
    .second(0);

  return (
    <Modal
      title="Log Time"
      visible={modalVisible}
      confirmLoading={pending}
      onCancel={onHideModal}
      onOk={handleOk}
    >
      <AddWorklogForm
        form={form}
        initialDate={initialDate}
        validationPassed={validationPassed}
        onChange={handleFormChange}
      />
    </Modal>
  );
};

const WrappedAddWorklogFormModal = Form.create<
  FormComponentProps & AddWorklogFormModalProps
>()(AddWorklogFormModal);

export default WrappedAddWorklogFormModal;
