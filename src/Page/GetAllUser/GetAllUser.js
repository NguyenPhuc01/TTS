import { Button, Col, Form, Input, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardAuth from "../../Component/CardAuth/CardAuth";
import {
  addUser,
  getAllUser,
  removeUser,
  updateUser,
} from "../../Store/Actions/AuthAction";
import ModalAddUser from "../../ultill/ModalAddUser";
import ModalChangeUser from "../../ultill/ModalChangeUser";
import styles from "../GetAllUser/GetAllUser.module.css";
const GetAllUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenModalChange, setIsOpenModalChange] = useState(false);
  const [idUser, setIdUser] = useState(0);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setIsOpenModalChange(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsOpenModalChange(false);
  };
  //   const handleBtnOk = () => {
  //     setIsOpenModalChange(false);
  //   };
  const onFinish = (values) => {
    console.log("Success:", values);
    const data = {
      id: Math.floor(Math.random() * 10) * 3,
      ...values,
    };
    dispatch(addUser(data));
    setIsModalOpen(!isModalOpen);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const user = useSelector((state) => state);
  const allUser = user?.AuthReducer?.allUser;

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };

  const handleChangeUser = ({ id, password, phone, username, email }) => {
    console.log({ id, password, phone, username });

    setIdUser(id);
    form.setFieldsValue({
      id: id,
      phone: phone,
      password: password,
      email: email,
      username: username,
    });
    setIsOpenModalChange(true);
    console.log({ form });
  };

  const onChangeUser = (values) => {
    const dataUser = {
      id: idUser,
      ...values,
    };

    dispatch(updateUser(idUser, dataUser));
    setIsOpenModalChange(false);
  };

  return (
    <Row>
      <Col>
        <Button className="" onClick={showModal}>
          add User
        </Button>
        <div className={styles.user}>
          {allUser.map((e) => {
            return (
              <div key={e.id}>
                <CardAuth
                  title={`user widthId: ${e.id}`}
                  username={e.username}
                  password={e.password}
                  email={e.email}
                  phone={e.phone}
                />

                <div className={styles.btnfuc}>
                  <Button
                    onClick={() => {
                      handleChangeUser({
                        id: e.id,
                        username: e.username,
                        password: e.password,
                        email: e.email,
                        phone: e.phone,
                      });
                    }}
                  >
                    change
                  </Button>
                  <Button
                    onClick={() => {
                      handleRemoveUser(e.id);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <ModalAddUser
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        />
        <Modal
          title="Basic Modal"
          open={isOpenModalChange}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onChangeUser}
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
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
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
      </Col>
    </Row>
  );
};

export default GetAllUser;
