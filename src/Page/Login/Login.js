import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "../Login/Login.module.css";
import { LoginUser } from "../../Store/Actions/Action";
import { useNavigate } from "react-router-dom";
const Login = ({ LoginUser, userLogin }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    LoginUser(values);
   
  };

  console.log("🚀 ~ file: Login.js ~ line 9 ~ Login ~ userLogin", userLogin);
  // const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(userLogin.token);
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
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              className={styles.userName}
              label="Username"
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
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
      <Col md={6}></Col>
    </Row>
  );
};

Login.propTypes = {};

const mapStateToProps = (state) => ({
  userLogin: state.Reducer.userLogin,
  LoginUser: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { LoginUser })(Login);
