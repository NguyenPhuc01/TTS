import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  let isLogin = useSelector((state) => state.Auth.userLogin);
  console.log(
    "🚀 ~ file: PrivateRouter.js:6 ~ PrivateRouter ~ isLogin",
    isLogin
  );
  return isLogin ? <Outlet /> : <Navigate to="/dangNhap" />;
}
export default PrivateRouter;
