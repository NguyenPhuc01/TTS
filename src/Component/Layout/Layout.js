import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const Layout = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Layout;
