import { Card } from "antd";
import styled from "styled-components";
import React from "react";
const TitleUSer = styled.p``;

const CardAuth = (props) => {
  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card
          title={props.title}
          bordered={false}
          style={{ width: 300, border: "solid 1px black", margin: "10px" }}
        >
          <TitleUSer>{props.username}</TitleUSer>
          <TitleUSer>{props.password}</TitleUSer>
          <TitleUSer>{props.email}</TitleUSer>
          <TitleUSer>{props.phone}</TitleUSer>
        </Card>
      </div>
    </div>
  );
};

export default CardAuth;
