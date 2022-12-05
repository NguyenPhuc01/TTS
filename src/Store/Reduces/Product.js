const inittialState = {
  allProduct: [],
  detail: {},
  loading: false,
  error: {},
};
const Product = (state = inittialState, action) => {
  switch (action.type) {
    case "GET_ALLPRODUCT":
      return {
        ...state,
        loading: false,
        allProduct: action.payload,
      };
    case "GET_DETAILPRODUCT":
      return {
        ...state,
        detail: action.payload,
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        allProduct: state.allProduct.filter((e) => e.id !== action.payload),
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        allProduct: [...state.allProduct, action.payload],
      };

    case "GET_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PRODUCT_FAIL":
      return {
        ...state,
        loading: false,
        allProduct: null,
        error: action.payload,
      };
    // case "GET_PRODUCT_SUCCESS":
    //   return {
    //     ...state,
    //     detail: action.payload,
    //   };
    case "UPDATE_PRODUCT":
      let newProducts = [...state.allProduct].map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      return {
        ...state,
        allProduct: newProducts,
      };

    default:
      return state;
  }
};
export default Product;
