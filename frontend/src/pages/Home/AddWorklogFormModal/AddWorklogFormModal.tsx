import AddWorklogForm from "../AddWorklogForm/AddWorklogForm";
import { Form, Modal } from "antd";
import React, { useEffect, useState } from "react";
import * as moment from "moment";
import { FormComponentProps } from "antd/lib/form";
import { postWorklog } from "../../../api/worklogs";
import { IssueSearchResponse } from "../../../models/Issue";
import { WorklogEntryRequest } from "../../../models/Worklog";
import { getInitialDurationValue } from "./initialDurationValue";

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
  timeLoggedForSelectedDate: number;
  onHideModal: () => void;
  onAdded: () => void;
}

const AddWorklogFormModal: React.FC<FormComponentProps &
  AddWorklogFormModalProps> = ({
  selectedDate,
  modalVisible,
  timeLoggedForSelectedDate,
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

  const { hours, minutes } = getInitialDurationValue(timeLoggedForSelectedDate);

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
        initialDate={selectedDate}
        initialHours={hours}
        initialMinutes={minutes}
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
