import { Button, Checkbox, Col, Form, Input, Row, Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Login/Login.module.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Store/Actions/Auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoding = useSelector((state) => state.Auth.loading);
  console.log("🚀 ~ file: Login.js:12 ~ Login ~ isLogin", isLoding);
  const onLogin = (values) => {
    console.log("Success:", values);
    dispatch(loginUser(values, navigate));
  };
  const onLoginFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row>
      <Col md={6}></Col>
      <Col md={12}>
        <div className={styles.LoginForm}>
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onLogin}
            onFinishFailed={onLoginFailed}
            autoComplete="off"
          >
            <Form.Item
              className={styles.userName}
              label="username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              {isLoding ? (
                <Spin size="large" />
              ) : (
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </Col>
      <Col md={6}></Col>
    </Row>
  );
};

export default Login;
