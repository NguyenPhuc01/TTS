import { combineReducers } from "redux";
import Reducer from "./ProductReducer";
import AuthReducer from "./AuthReducer";
const rootReducer = combineReducers({
  Reducer,
  AuthReducer,
});

export default rootReducer;
