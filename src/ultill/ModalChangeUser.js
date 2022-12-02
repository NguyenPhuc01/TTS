import { Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../Store/Actions/AuthAction";

const ModalChangeUser = (props) => {
  const [form] = Form.useForm();
  const [show, setShow] = useState(props.showModal);
  const dispatch = useDispatch();

  const handleOk = () => {
    setShow(false);
  };
  const handleCancel = () => {
    setShow(false);
  };
  useEffect(() => {
    form.setFieldsValue({
      id: props.dataUSer.id,
      username: props.dataUSer.username,
      email: props.dataUSer.email,
      password: props.dataUSer.password,
      phone: props.dataUSer.phone,
    });
  }, [show]);
  // form.setFieldsValue({
  //   id: props.dataUSer.id,
  //   username: props.dataUSer.username,
  //   email: props.dataUSer.email,
  //   password: props.dataUSer.password,
  //   phone: props.dataUSer.phone,
  // });
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(updateUser(values.id, values));
    props.setShowModalUser(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    setShow(props.showModal);
  }, [props]);
  return (
    <div>
      <Modal
        forceRender
        title="Basic Modal"
        open={show}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
