import { Col, Dropdown, Row, Space, Button } from "antd";
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import DropDown from "../../Ultill/DropDown";
import { Link, useNavigate } from "react-router-dom";
import ModalAddProduct from "./ModalAddProduct";
import { useSelector } from "react-redux";
import styled from "styled-components";

// const RowNavBar = styled.div`
//   background-color: #17171b;
//   display: flex;
//   align-items: center;
//   height: 70px;
// `;
const LogoNavbar = styled.h1`
  color: #fff;
  margin-left: 20px;
  margin-bottom: 0px;
  cursor: pointer;
`;
const NavCenter = styled.div`
  display: flex;
`;
const InputSearch = styled.input`
  width: 100%;
  padding: 3px 5px;
  color: #17171b;
  :focus {
    outline: none;
  }
`;
const NavBarRight = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 20px;
  color: #fff !important;
`;
const NavBar = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const token = useSelector((state) => state.Auth.userLogin);
  const isLoading = useSelector((state) => state.Product.loadingAdd);
  const handleAddProduct = () => {
    setIsModalOpen(true);
  };
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/dangNhap");
  };
  return (
    <Row
      style={{
        background: "#17171b",
        display: "flex",
        alignItems: "center",
        height: "70px",
      }}
    >
      <Col md={4}>
        <LogoNavbar
          onClick={() => {
            navigate("/");
          }}
        >
          MOVEA
        </LogoNavbar>
      </Col>
      <Col md={14}>
        <NavCenter>
          <>
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
              isLoading={isLoading}
            />
          </>

          <InputSearch
            type="text"
            value={props.search}
            onChange={props.onChange}
          />

          <Link to={"/getAllUser"}>getUser</Link>
        </NavCenter>
      </Col>
      <Col md={6}>
        <NavBarRight>
          {token ? (
            <Button onClick={handleLogOut}>Log Out</Button>
          ) : (
            <Dropdown overlay={DropDown}>
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ color: "#fff" }}>
                  Register / Login
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          )}
        </NavBarRight>
      </Col>
    </Row>
  );
};

export default NavBar;
