import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Login from "./Page/Login/Login";
import { Outlet } from "react-router-dom";

const Protected = () => {
  const test = useSelector((state) => state);

  const getToken = () => {
    localStorage.getItem("token");
  };
  useEffect(() => {
    getToken();
  }, []);
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Login />;
};

export default Protected;
