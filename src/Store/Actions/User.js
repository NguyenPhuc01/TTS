import axios from "axios";
import {
  ADD_USER,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  GETALL_USER,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  POST_USER_FAIL,
  POST_USER_REQUEST,
  PUT_USER_FAIL,
  PUT_USER_REQUEST,
  REMOVE_USER,
  UPDATE_USER,
} from "../Type/User";
const baseUrl = "https://fakestoreapi.com";

export const getAllUser = () => async (dispatch) => {
  dispatch({
    type: GET_USER_REQUEST,
  });
  try {
    const response = await axios.get(`${baseUrl}/users`);
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
  dispatch({
    type: DELETE_USER_REQUEST,
  });
  try {
    await axios.delete(`${baseUrl}/users/${id}`);
    // console.log();
    dispatch({
      type: REMOVE_USER,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error,
    });
  }
};
export const addUser = (newUser) => async (dispatch) => {
  dispatch({
    type: POST_USER_REQUEST,
  });
  try {
    await axios.post(`${baseUrl}/users`, newUser);
    dispatch({
      type: ADD_USER,
      payload: newUser,
    });
  } catch (error) {
    dispatch({
      type: POST_USER_FAIL,
      payload: error,
    });
    console.log({ error });
  }
};
export const updateUser = (id, newUser) => async (dispatch) => {
  dispatch({
    type: PUT_USER_REQUEST,
  });
  try {
    await axios.put(`${baseUrl}/users/${id}`, newUser);

    dispatch({
      type: UPDATE_USER,
      payload: newUser,
    });
  } catch (error) {
    dispatch({
      type: PUT_USER_FAIL,
      payload: error,
    });
  }
};
