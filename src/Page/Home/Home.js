import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import NavBar from "../../Component/NavBar/NavBar";
import CardLayout from "../../Component/Card/CardLayout";
import styles from "../Home/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailProduct,
  getProduct,
  removeProduct,
  updateProduct,
} from "../../Store/Actions/Action";
import { Link } from "react-router-dom";
const Home = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");

  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  const handleChangeProduct = (id) => {
    console.log("change", id);
    setShow(true);
    setId(id);
    dispatch(getDetailProduct(id));
  };
  const handleDeteleProduct = (id) => {
    console.log("delete", id);
    removeProduct(id);
  };

  const handleOk = () => {
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };
  const onFinish = (newProduct) => {
    console.log(id);
    const data = {
      id,
      title,
      description,
      image,
      price,
      category,
    };
    updateProduct(id, data);
    setShow(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
                            handleChangeProduct(e.id);
                          }}
                        >
                          Sửa
                        </Button>

                        <Button
                          onClick={() => {
                            handleDeteleProduct(e.id);
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
            <Modal
              title="Basic Modal"
              open={show}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form
                name="basic"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="id"
                  // name="id"
                  rules={[
                    { required: false, message: "Please input your id!" },
                  ]}
                >
                  <Input
                    value={id}
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="title"
                  // name="title"
                  rules={[
                    { required: true, message: "Please input your title!" },
                  ]}
                >
                  <Input
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </Form.Item>

                <Form.Item
                  label="description"
                  // name="description"
                  rules={[
                    {
                      required: true,
                      message: "Please input your description!",
                    },
                  ]}
                >
                  <Input
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="price"
                  // name="price"
                  rules={[
                    {
                      required: true,
                      message: "Please input your price!",
                    },
                  ]}
                >
                  <Input
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="image"
                  // name="image"
                  rules={[
                    {
                      required: true,
                      message: "Please input your image!",
                    },
                  ]}
                >
                  <Input
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="category"
                  // name="category"
                  rules={[
                    {
                      required: true,
                      message: "Please input your category!",
                    },
                  ]}
                >
                  <Input
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="danger" htmlType="submit">
                    Change Product
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </Col>
      </Row>
    </div>
  );
};

// Home.propTypes = {
//   // product: PropTypes.array.isRequired,
// };

// const mapStateToProps = (state) => ({
//   getProduct: PropTypes.func.isRequired,
//   removeProduct: PropTypes.func.isRequired,
//   updateProduct: PropTypes.func.isRequired,
//   getDetailProduct: PropTypes.func.isRequired,
//   detail: state.Reducer.detail,
// });

export default Home;
