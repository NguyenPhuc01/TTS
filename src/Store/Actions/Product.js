import axios from "axios";
import {
  GET_ALLPRODUCT,
  GET_DETAILPRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "../Type/Product";
export const getProduct = () => async (dispatch) => {
  try {
    const response = await axios.get("https://faksfdestoreapi.com/products");
    dispatch({
      type: GET_ALLPRODUCT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALLPRODUCT,
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
  try {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
export const addProduct = (newProduct) => async (dispatch) => {
  try {
    await axios.post("https://fakestoreapi.com/products", newProduct);
    dispatch({
      type: ADD_PRODUCT,
      payload: newProduct,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = (id, content) => async (dispatch) => {
  try {
    await axios.put(`https://fakestoreapi.com/products/${id}`, content);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: content,
    });
  } catch (error) {
    console.log(error);
  }
};
