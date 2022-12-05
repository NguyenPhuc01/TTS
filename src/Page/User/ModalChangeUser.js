import { Button, Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Store/Actions/UserAction";

const ModalChangeUser = ({ dataUSer, setShowModalUser, showModal }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleOk = () => {
    setShowModalUser(false);
  };
  const handleCancel = () => {
    setShowModalUser(false);
  };

  useEffect(() => {
    form.setFieldsValue({
      id: dataUSer.id,
      username: dataUSer.username,
      email: dataUSer.email,
      password: dataUSer.password,
      phone: dataUSer.phone,
    });
  }, [dataUSer, form]);
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(updateUser(values.id, values));
    setShowModalUser(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Modal
        forceRender
        title="Basic Modal"
        open={showModal}
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
