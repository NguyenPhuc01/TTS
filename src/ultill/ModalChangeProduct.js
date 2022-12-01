import { Button, Form, Input, Modal } from "antd";
import React from "react";

const ModalChangeProduct = (props) => {
  return (
    <div>
      <Modal
        title="Basic Modal"
        open={props.show}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <Form
          form={props.form}
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={props.onFinish}
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
            label="title"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input your price!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please input your image!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input your category!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="danger" htmlType="submit">
              Change Product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalChangeProduct;
