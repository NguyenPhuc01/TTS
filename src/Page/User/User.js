import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardAuth from "../../Component/CardAuth/CardAuth";
import NavBar from "../../Component/NavBar/NavBar";
import { getAllUser, removeUser } from "../../Store/Actions/AuthAction";
import styles from "../User/User.module.css";
import ModalAddUser from "./ModalAddUser";
import ModalChangeUser from "./ModalChangeUser";
const GetAllUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenModalChange, setIsOpenModalChange] = useState(false);
  const [dataUser, setDataUser] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const user = useSelector((state) => state);
  const allUser = user?.AuthReducer?.allUser;

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };

  const handleChangeUser = ({ id, password, phone, username, email }) => {
    console.log({ id, password, phone, username });
    setDataUser({
      id,
      phone,
      password,
      email,
      username,
    });
    setIsOpenModalChange(true);
  };

  return (
    <div>
      <NavBar />
      <Row>
        <Col>
          <Button className="" onClick={showModal}>
            add User
          </Button>
          <div className={styles.user}>
            {allUser?.map((e) => {
              return (
                <div key={e.id}>
                  <CardAuth
                    title={`user widthId: ${e.id}`}
                    username={e.username}
                    password={e.password}
                    email={e.email}
                    phone={e.phone}
                  />

                  <div className={styles.btnfuc}>
                    <Button
                      onClick={() => {
                        handleChangeUser({
                          id: e.id,
                          username: e.username,
                          password: e.password,
                          email: e.email,
                          phone: e.phone,
                        });
                      }}
                    >
                      change
                    </Button>
                    <Button
                      onClick={() => {
                        handleRemoveUser(e.id);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <ModalAddUser
            showModalAddUser={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
          <ModalChangeUser
            showModal={isOpenModalChange}
            setShowModalUser={setIsOpenModalChange}
            dataUSer={dataUser}
          />
        </Col>
      </Row>
    </div>
  );
};

export default GetAllUser;
