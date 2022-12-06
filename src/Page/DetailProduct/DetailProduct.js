import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Component/NavBar/NavBar";
import { getDetailProduct } from "../../Store/Actions/Product";
import styled from "styled-components";

const ProductImage = styled.img`
  width: 80%;
  padding: 10px;
  height: 500px;
`;
const TitleDetail = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;
const Title = styled.span`
  display: flex;
`;
const Price = styled.span`
  color: red;
`;
const DetailProduct = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  const detailProduct = useSelector((state) => state.Product.detail);
  return (
    <div>
      <NavBar />
      <Row>
        <Col md={8}>
          <ProductImage src={detailProduct?.image} alt="" />
        </Col>
        <Col md={16}>
          <>
            <TitleDetail>{`title: ${detailProduct?.title}`}</TitleDetail>

            <Price>Price: {detailProduct?.price}</Price>

            <Title>rate: {detailProduct?.rating?.rate}</Title>

            <Title>count: {detailProduct?.rating?.count}</Title>

            <Title> description: {detailProduct?.description}</Title>
          </>
        </Col>
      </Row>
    </div>
  );
};
export default DetailProduct;
