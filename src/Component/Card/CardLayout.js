import { Card } from "antd";
import React from "react";
import styled from "styled-components";
const { Meta } = Card;
const CardImage = styled.img`
  width: 200px;
  height: 200px;
  padding-top: 10px;
`;
const CardLayout = (props) => {
  return (
    <Card hoverable cover={<CardImage alt="example" src={props.image} />}>
      <Meta title={props.title} description={props.description} />
    </Card>
  );
};

export default CardLayout;
