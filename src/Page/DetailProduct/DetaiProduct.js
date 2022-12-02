import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../DetailProduct/DetailProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Component/NavBar/NavBar";
import { getDetailProduct } from "../../Store/Actions/ProductAction";
const DetaiProduct = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  const detailProduct = useSelector((state) => state.productReducer.detail);
  return (
    <div>
      <NavBar />
      <Row>
        <Col md={8}>
          <div>
            <img
              src={detailProduct?.image}
              alt=""
              style={{
                width: "100%",
                padding: 10,
                height: 400,
              }}
            />
          </div>
        </Col>
        <Col md={16}>
          <div className={styles.detailProduct}>
            <div>
              <h3>{`title: ${detailProduct?.title}`}</h3>
            </div>
            <div>
              <span className={styles.price}>
                Price: {detailProduct?.price}
              </span>
            </div>
            <div>
              <span>rate: {detailProduct?.rating?.rate}</span>
            </div>
            <div>
              <span>count: {detailProduct?.rating?.count}</span>
            </div>
            <div>
              <span className={styles.description}>
                description: {detailProduct?.description}
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default DetaiProduct;
