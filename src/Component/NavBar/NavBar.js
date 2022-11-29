import {
  Col,
  Dropdown,
  Row,
  Menu,
  Space,
  Button,
  Modal,
  Form,
  Input,
  Checkbox,
  InputNumber,
} from "antd";
import React, { useState } from "react";
import styles from "../NavBar/NavBar.module.css";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import DropDown from "../../ultill/DropDown";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProduct } from "../../Store/Actions/Action";
import Modall from "../../ultill/Modall";
const NavBar = (props, { addProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
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
    addProduct(data);
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <Row className={styles.navbar}>
      <Col md={4}>
        <div>
          <div>
            <h1 className={styles.Name}>MOVEA</h1>
          </div>
        </div>
      </Col>
      <Col md={14}>
        <div className={styles.nav}>
          <div>
            <span>Movies</span>
          </div>
          <div>
            <Button
              onClick={handleAddProduct}
              style={{
                marginLeft: "30px",
              }}
            >
              ADD PRODUCT
            </Button>
            <Modall
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
        </div>
      </Col>
      <Col md={6}>
        <div className={styles.login}>
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
        </div>
      </Col>
    </Row>
  );
};

NavBar.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addProduct })(NavBar);
