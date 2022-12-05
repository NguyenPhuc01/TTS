import { Col, Dropdown, Row, Space, Button } from "antd";
import React, { useEffect, useState } from "react";
import styles from "../NavBar/NavBar.module.css";
import { DownOutlined } from "@ant-design/icons";
import DropDown from "../../Ultill/DropDown";
import { Link, useNavigate } from "react-router-dom";
import ModalAddProduct from "./ModalAddProduct";
import { useSelector } from "react-redux";
const NavBar = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const token = useSelector((state) => state.Auth.userLogin);
  const handleAddProduct = () => {
    setIsModalOpen(true);
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
              setIsModalOpen={setIsModalOpen}
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
                      Register / Login
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
