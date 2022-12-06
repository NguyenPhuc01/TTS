import { Button, Modal, notification, Space, Spin, Table } from "antd";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalAddUser from "../User/ModalAddUser";
import ModalChangeUser from "../User/ModalChangeUser";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { getAllUser, removeUser } from "../../Store/Actions/User";
import styled from "styled-components";

const LoadingTable = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const { confirm } = Modal;
const TableUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenModalChange, setIsOpenModalChange] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const isLoginAddUser = useSelector((state) => state.User.loadingAddUser);
  const [idRemove, setIdRemove] = useState();
  const isLoadingChangeUser = useSelector(
    (state) => state.User.loadingChangeUser
  );
  const isLoadingDelete = useSelector((state) => state.User.loadingDelete);

  const columns = [
    {
      title: "username",
      dataIndex: "username",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "password",
      dataIndex: "password",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setDataUser(record);

              setIsOpenModalChange(true);
            }}
          >
            change
          </Button>
          <Button
            onClick={() => {
              showDeleteConfirm(record.id);
            }}
            loading={record.id === idRemove ? isLoadingDelete : false}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const showDeleteConfirm = (id) => {
    setIdRemove(id);
    confirm({
      title: "Bạn có chắc chắn muốn xoá ??",
      icon: <ExclamationCircleOutlined />,
      content: "",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(removeUser(id));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const listUser = useSelector((state) => state.User.allUser);
  const isLoading = useSelector((state) => state.User.loading);
  const error = useSelector((state) => state.User.error);

  useEffect(() => {
    if (error.message !== undefined) {
      notification.open({
        message: "Notification",
        description: error.message,
      });
    }
  }, [error.message, listUser]);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button style={{ margin: 20 }} onClick={showModal}>
        add user
      </Button>

      {isLoading ? (
        <LoadingTable>
          <Spin size="large" />
        </LoadingTable>
      ) : (
        <Table
          columns={columns}
          dataSource={listUser}
          rowKey={(record) => record.id}
        />
      )}

      <ModalAddUser
        showModalAddUser={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isLoginAddUser={isLoginAddUser}
      />
      <ModalChangeUser
        showModal={isOpenModalChange}
        setShowModalUser={setIsOpenModalChange}
        dataUSer={dataUser}
        isLoadingChangeUser={isLoadingChangeUser}
      />
    </>
  );
};

export default TableUser;
