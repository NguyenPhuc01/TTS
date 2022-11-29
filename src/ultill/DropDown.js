import { Menu } from "antd";
import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
const DropDown = () => {
  return (
    <div>
      <div>
        <Menu
          items={[
            {
              key: "1",
              label: (
                <Link
                  to={"/dangKy"}
                  style={{ width: "100%" }}
                  onClick={() => {}}
                >
                  Đăng Ký
                </Link>
              ),
            },
            {
              key: "2",

              label: (
                <Link
                  to={"/dangNhap"}
                  style={{ width: "100%" }}
                  onClick={() => {}}
                >
                  Đăng nhập
                </Link>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default DropDown;
