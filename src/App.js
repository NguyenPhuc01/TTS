import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import DetailProduct from "./Page/DetailProduct/DetaiProduct";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
// import User from "../src/Page/User/User";
import TableUser from "./Page/TableUser/TableUser";
import PrivateRouter from "./PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/dangNhap" element={<Login />}></Route>
          <Route path="/dangKy" element={<Register />}></Route>
          <Route path="/" element={<PrivateRouter />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/getAllUser" element={<TableUser />}></Route>
            <Route path=":id" element={<DetailProduct />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
