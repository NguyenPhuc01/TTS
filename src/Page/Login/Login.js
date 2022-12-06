import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  notification,
  Row,
  Spin,
} from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Store/Actions/Auth";
import { useEffect } from "react";
import styled from "styled-components";
const FormLogin = styled.div`
  margin-top: 20px;
`;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoding = useSelector((state) => state.Auth.loading);
  const error = useSelector((state) => state.Auth.error);
  console.log("🚀 ~ file: Login.js:13 ~ Login ~ error", error);
  console.log("🚀 ~ file: Login.js:12 ~ Login ~ isLogin", isLoding);
  const onLogin = (values) => {
    console.log("Success:", values);
    dispatch(loginUser(values, navigate));
  };
  const onLoginFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (error) {
      notification.open({
        message: "Notification",
        description: error?.response?.data,
      });
    }
  }, [error]);
  return (
    <Row>
      <Col md={6}></Col>
      <Col md={12}>
        <FormLogin>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 12,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onLogin}
            onFinishFailed={onLoginFailed}
            autoComplete="off"
          >
            <Form.Item
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
                span: 12,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 18,
                span: 12,
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
        </FormLogin>
      </Col>
      <Col md={6}></Col>
    </Row>
  );
};

export default Login;
