import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import NavBar from "../../Component/NavBar/NavBar";
import CardLayout from "../../Component/Card/CardLayout";
import styles from "../Home/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  removeProduct,
  updateProduct,
} from "../../Store/Actions/Action";
import { Link } from "react-router-dom";
import ModalChangeProduct from "../../ultill/ModalChangeProduct";
const Home = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const product = useSelector((state) => state);
  const [dataProduct, setDataProduct] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleChangeProduct = ({
    id,
    title,
    category,
    description,
    price,
    image,
  }) => {
    console.log("change", {
      id,
      title,
      category,
      description,
      price,
      image,
    });
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
            {product.Reducer.allProduct &&
              product.Reducer.allProduct
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
                            handleChangeProduct({
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

                        <Button
                          onClick={() => {
                            handleDeleteProduct(e.id);
                          }}
                        >
                          xoá
                        </Button>
                      </div>
                    </div>
                  );
                })}
          </div>
          <div>
            {show && (
              <ModalChangeProduct
                show={show}
                setShow={setShow}
                data={dataProduct}
              />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
