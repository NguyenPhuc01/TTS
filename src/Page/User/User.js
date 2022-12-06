import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardAuth from "../../Component/CardUser/CardUSer";
import NavBar from "../../Component/NavBar/NavBar";
import ModalAddUser from "./ModalAddUser";
import ModalChangeUser from "./ModalChangeUser";
import styled from "styled-components";
import { getAllUser, removeUser } from "../../Store/Actions/User";
const ContainerUSer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto;
`;
const BtnFunc = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CardUser = styled.div``;
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
  const listUser = useSelector((state) => state.User.allUser);
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
    <>
      <NavBar />
      <Row>
        <Col>
          <Button className="" onClick={showModal}>
            add User
          </Button>
          <ContainerUSer>
            {listUser?.map((e) => {
              return (
                <CardUser key={e.id}>
                  <CardAuth
                    title={`user widthId: ${e.id}`}
                    username={e.username}
                    password={e.password}
                    email={e.email}
                    phone={e.phone}
                  />

                  <BtnFunc>
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
                  </BtnFunc>
                </CardUser>
              );
            })}
          </ContainerUSer>
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
    </>
  );
};

export default GetAllUser;
