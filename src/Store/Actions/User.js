import axios from "axios";
import {
  ADD_USER,
  GETALL_USER,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  REMOVE_USER,
  UPDATE_USER,
} from "../Type/User";
const baseUrl = "https://fakestoreapi.com";

export const getAllUser = () => async (dispatch) => {
  dispatch({
    type: GET_USER_REQUEST,
  });
  try {
    const response = await axios.get(`${baseUrl}/userds`);
    dispatch({
      type: GETALL_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload: error,
    });
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

    dispatch({
      type: UPDATE_USER,
      payload: newUser,
    });
  } catch (error) {
    console.log({ error });
  }
};
