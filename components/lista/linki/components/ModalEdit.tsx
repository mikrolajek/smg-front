import { Modal, Button } from "antd";
import { useState } from "react";

export const ModalEdit = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e: any) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e: any) => {
    setVisible(false);
    console.log(e);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Edytuj link"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalEdit;
