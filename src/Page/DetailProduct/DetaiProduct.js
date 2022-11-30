import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../DetailProduct/DetailProduct.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDetailProduct } from "../../Store/Actions/Action";
const DetaiProduct = ({ getDetailProduct, detail }) => {
  let { id } = useParams();
  useEffect(() => {
    getDetailProduct(id);
  }, []);

  return (
    <Row>
      <Col md={8}>
        <div>
          <img
            src={detail?.image}
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
        <div className={styles.detail}>
          <div>
            <h3>{`title: ${detail?.title}`}</h3>
          </div>
          <div>
            <span className={styles.price}>Price: {detail?.price}</span>
          </div>
          <div>
            <span>rate: {detail?.rating?.rate}</span>
          </div>
          <div>
            <span>count: {detail?.rating?.count}</span>
          </div>
          <div>
            <span className={styles.description}>
              description: {detail?.description}
            </span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

DetaiProduct.propTypes = {
  // getDetailProduct: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  detail: state.Reducer.detail,
  getDetailProduct: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { getDetailProduct })(DetaiProduct);
