import AddWorklogForm from "../AddWorklogForm/AddWorklogForm";
import { Form, Modal } from "antd";
import React, { useState } from "react";
import * as moment from "moment";
import { FormComponentProps } from "antd/lib/form";
import { postWorklog } from "../../../api/worklogs";
import { IssueSearchResponse } from "../../../models/Issue";
import { WorklogEntryRequest } from "../../../models/Worklog";
import { issues } from "../../../api/issues";

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

  const handleOk = () => {
    form.validateFields(err => {
      if (!err) {
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

  return (
    <Modal
      title="Log Time"
      visible={modalVisible}
      confirmLoading={pending}
      onCancel={onHideModal}
      onOk={handleOk}
    >
      <AddWorklogForm form={form} initialDate={selectedDate} />
    </Modal>
  );
};

const WrappedAddWorklogFormModal = Form.create<
  FormComponentProps & AddWorklogFormModalProps
>()(AddWorklogFormModal);

export default WrappedAddWorklogFormModal;
