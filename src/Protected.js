import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import { Outlet } from "react-router-dom";

const Protected = ({ userLogin }) => {
  // console.log({ userLogin });
  // if (userLogin.token !== undefined || !userLogin.token) {
  //   localStorage.setItem("token", userLogin.token);
  // }
  const getToken = () => {
    localStorage.getItem("token");
  };
  useEffect(() => {
    getToken();
  }, []);
  const token = localStorage.getItem("token");
  console.log("🚀 ~ file: Protected.js ~ line 13 ~ Protected ~ token", token);
  return token ? <Outlet /> : <Login />;
};

Protected.propTypes = {};

const mapStateToProps = (state) => ({
  userLogin: state.Reducer.userLogin,
  LoginUser: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, {})(Protected);
