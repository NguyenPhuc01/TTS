import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import authReducer from "./AuthReducer";
const rootReducer = combineReducers({
  productReducer: productReducer,
  authReducer: authReducer,
});

export default rootReducer;
