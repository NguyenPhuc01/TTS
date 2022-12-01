import { Card } from "antd";
import React from "react";

const CardAuth = (props) => {
  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card
          title={props.title}
          bordered={false}
          style={{ width: 300, border: "solid 1px black", margin: "10px" }}
        >
          <p>{props.username}</p>
          <p>{props.password}</p>
          <p>{props.email}</p>
          <p>{props.phone}</p>
        </Card>
      </div>
    </div>
  );
};

export default CardAuth;
