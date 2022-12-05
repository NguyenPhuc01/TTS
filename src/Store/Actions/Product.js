import axios from "axios";
import {
  GET_ALLPRODUCT,
  GET_DETAILPRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  POST_PRODUCT_REQUEST,
  PUT_PRODUCT_FAIL,
  DELETE_PRODUCT_FAIL,
  POST_PRODUCT_FAIL,
  PUT_PRODUCT_REQUEST,
} from "../Type/Product";
export const getProduct = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_REQUEST,
  });
  try {
    const response = await axios.get("https://fakestoreapi.com/products");

    dispatch({
      type: GET_ALLPRODUCT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error,
    });
  }
};

export const getDetailProduct = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({
      type: GET_DETAILPRODUCT,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const removeProduct = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_PRODUCT_REQUEST,
  });
  try {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error,
    });
  }
};
export const addProduct = (newProduct) => async (dispatch) => {
  dispatch({
    type: POST_PRODUCT_REQUEST,
  });
  try {
    await axios.post("https://fakestoreapi.com/products", newProduct);
    dispatch({
      type: ADD_PRODUCT,
      payload: newProduct,
    });
  } catch (error) {
    dispatch({
      type: POST_PRODUCT_FAIL,
      payload: error,
    });
  }
};
export const updateProduct = (id, content) => async (dispatch) => {
  dispatch({
    type: PUT_PRODUCT_REQUEST,
  });
  try {
    await axios.put(`https://fakestoreapi.com/products/${id}`, content);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: content,
    });
  } catch (error) {
    dispatch({
      type: PUT_PRODUCT_FAIL,
      payload: error,
    });
  }
};
