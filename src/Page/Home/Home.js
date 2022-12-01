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
const Home = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [form] = Form.useForm();
  const product = useSelector((state) => state);
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
    console.log("change", id);
    setShow(true);
    form.setFieldsValue({
      id: id,
      title: title,
      category: category,
      description: description,
      image: image,
      price: price,
    });
  };
  const handleDeleteProduct = (id) => {
    console.log("delete", id);
    dispatch(removeProduct(id));
  };

  const handleOk = () => {
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };
  const onFinish = (newProduct) => {
    console.log("🚀 ~ file: Home.js:68 ~ onFinish ~ newProduct", newProduct);

    dispatch(updateProduct(newProduct.id, newProduct));

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
            <Modal
              title="Basic Modal"
              open={show}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form
                form={form}
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
                  name="id"
                  rules={[
                    { required: false, message: "Please input your id!" },
                  ]}
                >
                  <Input disabled />
                </Form.Item>
                <Form.Item
                  label="title"
                  name="title"
                  rules={[
                    { required: true, message: "Please input your title!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="description"
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Please input your description!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="price"
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: "Please input your price!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="image"
                  name="image"
                  rules={[
                    {
                      required: true,
                      message: "Please input your image!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="category"
                  name="category"
                  rules={[
                    {
                      required: true,
                      message: "Please input your category!",
                    },
                  ]}
                >
                  <Input />
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

export default Home;
