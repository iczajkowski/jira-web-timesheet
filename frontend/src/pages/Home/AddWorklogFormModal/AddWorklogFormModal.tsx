import AddWorklogForm from "../AddWorklogForm/AddWorklogForm";
import { Form, Modal } from "antd";
import React, { useState } from "react";
import * as moment from "moment";
import { FormComponentProps } from "antd/lib/form";
import { postWorklog } from "../../../api/worklogs";

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
        postWorklog({
          issue: form.getFieldValue("issue").id
        }).then(() => {
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
