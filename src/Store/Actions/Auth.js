import axios from "axios";
import {
  GET_AUTH_FAIL,
  GET_AUTH_REQUEST,
  USER_LOGIN,
  USER_SIGNUP,
} from "../Type/Auth";

const baseUrl = "https://fakestoreapi.com";
export const loginUser = (data, navigate) => async (dispatch) => {
  dispatch({
    type: GET_AUTH_REQUEST,
  });
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, data);
    dispatch({
      type: USER_LOGIN,
      payload: response.data,
    });
    navigate("/");
  } catch (error) {
    dispatch({
      type: GET_AUTH_FAIL,
      payload: error,
    });
  }
};
export const userRegister = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, data);
    dispatch({
      type: USER_SIGNUP,
      payload: response.data,
    });
  } catch (error) {
    console.log({ error });
  }
};
