const inittialState = {
  allProduct: [],
  detail: {},
  loadingProduct: false,
  loadingRemove: false,
  loadingUpdate: false,
  loadingAdd: false,
  error: {},
  id: null,
};
const Product = (state = inittialState, action) => {
  switch (action.type) {
    case "GET_ALLPRODUCT":
      return {
        ...state,
        loadingProduct: false,
        allProduct: action.payload,
      };
    case "GET_DETAILPRODUCT":
      return {
        ...state,
        detail: action.payload,
      };

    case "DELETE_PRODUCT":
      console.log("delete", action.payload);
      return {
        ...state,
        loadingRemove: false,
        id: action.payload,
        allProduct: state.allProduct.filter((e) => e.id !== action.payload),
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        loadingAdd: false,
        allProduct: [...state.allProduct, action.payload],
      };

    case "GET_PRODUCT_REQUEST":
      return {
        ...state,
        loadingProduct: true,
      };
    case "GET_PRODUCT_FAIL":
      return {
        ...state,
        loadingProduct: false,
        allProduct: null,
        error: action.payload,
      };

    case "DELETE_PRODUCT_REQUEST":
      return {
        ...state,
        loadingRemove: true,
      };
    case "DELETE_PRODUCT_FAIL":
      return {
        ...state,
        loadingRemove: false,
      };
    case "PUT_PRODUCT_REQUEST":
      return {
        ...state,
        loadingUpdate: true,
      };
    case "PUT_PRODUCT_FAIL":
      return {
        ...state,
        loadingUpdate: false,
      };
    case "POST_PRODUCT_REQUEST":
      return {
        ...state,
        loadingAdd: true,
      };
    case "POST_PRODUCT_FAIL":
      return {
        ...state,
        loadingAdd: false,
      };

    case "UPDATE_PRODUCT":
      let newProducts = [...state.allProduct].map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      return {
        ...state,
        loadingUpdate: false,

        allProduct: newProducts,
      };

    default:
      return state;
  }
};
export default Product;
