import { Card } from "antd";
import React from "react";
const { Meta } = Card;
const CardLayout = (props) => {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
          height: 350,
          margin: "10px",
        }}
        cover={
          <img
            alt="example"
            src={props.image}
            style={{ width: 200, height: 200, paddingTop: 10 }}
          />
        }
      >
        <Meta title={props.title} description={props.description} />
      </Card>
    </div>
  );
};

export default CardLayout;
