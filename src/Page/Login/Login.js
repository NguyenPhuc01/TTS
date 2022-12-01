import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "../Login/Login.module.css";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../Store/Actions/AuthAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(LoginUser(values));
    navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
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
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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

// Login.propTypes = {};

// const mapStateToProps = (state) => ({
//   userLogin: state.Reducer.userLogin,
//   LoginUser: PropTypes.func.isRequired,
// });

export default Login;
