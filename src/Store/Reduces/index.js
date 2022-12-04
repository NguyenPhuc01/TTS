import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import authReducer, { getToken } from "../Reduces/AuthReducer";

const rootReducer = combineReducers({
  productReducer: productReducer,
  authReducer: authReducer,
  // getToken: getToken,
});

export default rootReducer;
