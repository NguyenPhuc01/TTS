import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  let isLogin = useSelector((state) => state.Auth.userLogin);

  return isLogin ? <Outlet /> : <Navigate to="/dangNhap" />;
}
export default PrivateRouter;
