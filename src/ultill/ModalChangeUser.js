import { Button, Form, Input, Modal } from "antd";
import React from "react";

const ModalChangeUser = (props) => {
  const [form] = Form.useForm();

  return (
    <div>
      <Modal
        title="Basic Modal"
        open={props.isOpenModalChange}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <Form
          form={props.form}
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={props.onChangeUser}
          onFinishFailed={props.onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="id"
            name="id"
            rules={[{ required: false, message: "Please input your id!" }]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="phone"
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button type="primary" htmlType="submit">
              change
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalChangeUser;
