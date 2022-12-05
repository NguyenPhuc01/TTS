import { combineReducers } from "redux";
import Product from "./Product";
import Auth from "./Auth";
import User from "./User";
const rootReducer = combineReducers({
  Product: Product,
  Auth: Auth,
  User: User,
});

export default rootReducer;
