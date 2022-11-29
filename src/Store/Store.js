import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reduces";
import { composeWithDevTools } from "redux-devtools-extension";
const inittialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  inittialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
