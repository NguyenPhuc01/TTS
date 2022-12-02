import axios from "axios";
import {
  ADD_USER,
  GETALL_AUTH,
  REMOVE_USER,
  UPDATE_USER,
  USER_LOGIN,
  USER_SIGNUP,
} from "../Type/typeAuth";

const baseUrl = "https://fakestoreapi.com";
export const LoginUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, data);
    // console.log();
    localStorage.setItem("token", response.data.token);
    dispatch({
      type: USER_LOGIN,
      payload: response.data,
    });
  } catch (error) {
    console.log({ error });
  }
};
export const userRegister = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, data);
    // console.log();
    dispatch({
      type: USER_SIGNUP,
      payload: response.data,
    });
  } catch (error) {
    console.log({ error });
  }
};
export const getAllUser = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    // console.log();
    dispatch({
      type: GETALL_AUTH,
      payload: response.data,
    });
  } catch (error) {
    console.log({ error });
  }
};
export const removeUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`${baseUrl}/users/${id}`);
    // console.log();
    dispatch({
      type: REMOVE_USER,
      payload: id,
    });
  } catch (error) {
    console.log({ error });
  }
};
export const addUser = (newUser) => async (dispatch) => {
  try {
    await axios.post(`${baseUrl}/users`, newUser);
    // console.log();
    dispatch({
      type: ADD_USER,
      payload: newUser,
    });
  } catch (error) {
    console.log({ error });
  }
};
export const updateUser = (id, newUser) => async (dispatch) => {
  try {
    await axios.put(`${baseUrl}/users/${id}`, newUser);
    // console.log();
    dispatch({
      type: UPDATE_USER,
      payload: newUser,
    });
  } catch (error) {
    console.log({ error });
  }
};
