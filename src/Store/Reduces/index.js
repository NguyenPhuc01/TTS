import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import authReducer from "../Reduces/AuthReducer";
import UserReducer from "./UserReducer";
const rootReducer = combineReducers({
  productReducer: productReducer,
  authReducer: authReducer,
  UserReducer: UserReducer,
});

export default rootReducer;
