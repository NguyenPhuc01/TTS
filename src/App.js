import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import DetaiProduct from "./Page/DetailProduct/DetaiProduct";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Register from "./Page/Regíter/Register";

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dangNhap" element={<Login />}></Route>
          <Route path="/dangKy" element={<Register />}></Route>
          <Route path=":id" element={<DetaiProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
