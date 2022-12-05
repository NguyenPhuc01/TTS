const inittialState = {
  allProduct: [],
  detail: {},
  loading: true,
  error: {},
};
const Product = (state = inittialState, action) => {
  switch (action.type) {
    case "GET_ALLPRODUCT":
      console.log("arr", Array.isArray(action.payload));
      if (Array.isArray(action.payload)) {
        return {
          ...state,

          allProduct: action.payload,
          loading: false,
        };
      } else {
        return {
          ...state,
          allProduct: null,
          loading: false,
          error: action.payload,
        };
      }
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
