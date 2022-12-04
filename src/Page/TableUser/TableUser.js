import { Button, Modal, Space, Table } from "antd";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, removeUser } from "../../Store/Actions/AuthAction";
import ModalAddUser from "../User/ModalAddUser";
import ModalChangeUser from "../User/ModalChangeUser";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;
const TableUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenModalChange, setIsOpenModalChange] = useState(false);
  const [dataUser, setDataUser] = useState({});

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
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const showDeleteConfirm = (id) => {
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

  const listUser = useSelector((state) => state.authReducer.allUser);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <Button style={{ margin: 20 }} onClick={showModal}>
        add user
      </Button>

      <div>
        <Table
          columns={columns}
          dataSource={listUser}
          rowKey={(record) => record.id}
        />
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
    </div>
  );
};

export default TableUser;
