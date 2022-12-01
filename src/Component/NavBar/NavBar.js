import { Col, Dropdown, Row, Space, Button } from "antd";
import React, { useState } from "react";
import styles from "../NavBar/NavBar.module.css";
import { DownOutlined } from "@ant-design/icons";
import DropDown from "../../ultill/DropDown";
import { addProduct } from "../../Store/Actions/Action";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ModalAddProduct from "../../ultill/ModalAddProduct";
const NavBar = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  // const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleAddProduct = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (newProduct) => {
    const data = {
      ...newProduct,
      id: Math.floor(Math.random() * 10000),
    };
    dispatch(addProduct(data));
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/dangNhap");
  };
  return (
    <Row className={styles.navbar}>
      <Col md={4}>
        <div className="">
          <div>
            <h1
              className={styles.Name}
              onClick={() => {
                navigate("/");
              }}
            >
              MOVEA
            </h1>
          </div>
        </div>
      </Col>
      <Col md={14}>
        <div className={styles.nav}>
          <div>
            <Button
              onClick={handleAddProduct}
              style={{
                marginLeft: "30px",
              }}
            >
              ADD PRODUCT
            </Button>
            <ModalAddProduct
              isModalOpen={isModalOpen}
              handleOk={handleOk}
              handleCancel={handleCancel}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              name="ADD PRODUCT"
            />
          </div>

          <div className={styles.search}>
            <input type="text" value={props.search} onChange={props.onChange} />
          </div>

          <div>
            <Link to={"/getAllUser"}>getUser</Link>
          </div>
        </div>
      </Col>
      <Col md={6}>
        <div className={styles.login}>
          <div>
            {token ? (
              <div>
                <Button onClick={handleLogOut}>Log Out</Button>
              </div>
            ) : (
              <div>
                <Dropdown overlay={DropDown}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space style={{ color: "#fff" }}>
                      Đăng ký / Đăng Nhập
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default NavBar;
