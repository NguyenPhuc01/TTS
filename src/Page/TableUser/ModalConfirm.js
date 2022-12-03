import { Button, Modal, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
const { confirm } = Modal;

const showDeleteConfirm = () => {
  confirm({
    title: "Are you sure delete this task?",
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

const ModalConfirm = () => {
  return (
    <div>
      <Space wrap>
        <Button onClick={showDeleteConfirm} type="dashed">
          Delete
        </Button>
      </Space>
    </div>
  );
};

export default ModalConfirm;
