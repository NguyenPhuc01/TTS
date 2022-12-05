import React, { useEffect, useState } from "react";
import { Button, Col, Row, message, Spin, notification } from "antd";
import NavBar from "../../Component/NavBar/NavBar";
import CardLayout from "../../Component/Card/CardLayout";
import styles from "../Home/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, removeProduct } from "../../Store/Actions/Product";
import { Link } from "react-router-dom";
import ModalChangeProduct from "./ModalChangeProduct";
const Home = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [dataProduct, setDataProduct] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const listProduct = useSelector((state) => state.Product.allProduct);
  const isLoadingProduct = useSelector((state) => state.Product.loadingProduct);
  const isLoadingRemove = useSelector((state) => state.Product.loadingRemove);
  const id = useSelector((state) => state.Product.id);
  const [idProduct, setIdProduct] = useState();
  console.log("🚀 ~ file: Home.js:22 ~ Home ~ id", id);
  const isLoadingUpdate = useSelector((state) => state.Product.loadingUpdate);

  const error = useSelector((state) => state.Product.error);
  useEffect(() => {
    if (listProduct === null) {
      notification.open({
        message: "Notification",
        description: error.message,
      });
    }
  }, [error.message, listProduct]);
  const handleShowModalProduct = ({
    id,
    title,
    category,
    description,
    price,
    image,
  }) => {
    setDataProduct({
      id,
      title,
      category,
      description,
      price,
      image,
    });
    setShow(true);
  };
  const handleDeleteProduct = (id) => {
    console.log("delete", id);
    setIdProduct(id);
    dispatch(removeProduct(id));
  };

  function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function (val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  }
  useEffect(() => {
    setSearch(titleCase(search));
  }, [search]);
  return (
    <div>
      <NavBar
        search={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <Row>
        <Col md={24}>
          <div className={styles.card}>
            {!isLoadingProduct ? (
              listProduct
                ?.filter((val) => {
                  if (search === "") {
                    return val;
                  } else if (val.title.includes(search)) {
                    return val;
                  }
                })
                .map((e, i) => {
                  return (
                    <div key={e.id}>
                      <Link to={`/${e.id}`}>
                        <CardLayout
                          image={e.image}
                          title={e.title}
                          description={e.price}
                        />
                      </Link>
                      <div className={styles.btnfunc}>
                        <Button
                          onClick={() => {
                            handleShowModalProduct({
                              id: e.id,
                              title: e.title,
                              description: e.description,
                              price: e.price,
                              category: e.category,
                              image: e.image,
                            });
                          }}
                        >
                          Sửa
                        </Button>
                        {}
                        <Button
                          onClick={() => {
                            handleDeleteProduct(e.id);
                          }}
                          loading={e.id === idProduct ? true : false}
                        >
                          xoá
                        </Button>
                      </div>
                    </div>
                  );
                })
            ) : (
              <div className={styles.loading}>
                <Spin size="large" />
              </div>
            )}
          </div>

          <div>
            {show && (
              <ModalChangeProduct
                show={show}
                setShow={setShow}
                data={dataProduct}
                loading={isLoadingUpdate}
              />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
