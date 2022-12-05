import React from "react";
import { Button, Form, Input, InputNumber, Modal } from "antd";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Store/Actions/Product";
const ModalAddProduct = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    const data = {
      ...values,
      id: Math.floor(Math.random() * 10000),
    };
    dispatch(addProduct(data));
    setIsModalOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
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
            <InputNumber />
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
              add product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalAddProduct;
