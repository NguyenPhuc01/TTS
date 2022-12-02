import { Button, Space, Table } from "antd";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, removeUser } from "../../Store/Actions/AuthAction";
import ModalAddUser from "../User/ModalAddUser";
import ModalChangeUser from "../User/ModalChangeUser";
const TableUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectionType, setSelectionType] = useState("radio");
  const [isOpenModalChange, setIsOpenModalChange] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [idUser, setIdUser] = useState();
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setDataUser(selectedRows);
      setIdUser(`${selectedRowKeys}`);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };
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
      // dataIndex: "",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              //   if (dataUser != {}) {
              //     setIsOpenModalChange(true);
              //   }
              if (Array.isArray(dataUser) === true) {
                setIsOpenModalChange(true);
              }
            }}
          >
            change
          </Button>
          <Button onClick={handleDeleteUser}>Delete</Button>
        </Space>
      ),
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const listUser = useSelector((state) => state.authReducer.allUser);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteUser = () => {
    dispatch(removeUser(parseInt(idUser)));
  };
  return (
    <div>
      <Button style={{ margin: 20 }} onClick={showModal}>
        add user
      </Button>

      <div>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
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
