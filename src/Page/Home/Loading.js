import React from "react";
import ReactLoading from "react-loading";
import styles from "../Home/Home.module.css";
const Loading = (props) => (
  <ReactLoading type={props.type} color={props.color} />
);

export default Loading;
