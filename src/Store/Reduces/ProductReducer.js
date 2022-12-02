const inittialState = {
  allProduct: [],
  detail: {},
};
const Reducer = (state = inittialState, action) => {
  switch (action.type) {
    case "GET_ALLPRODUCT":
      return {
        ...state,
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
    case "UPDATE_PRODUCT":
      let filterProduct = [...state.allProduct].map((e) => {
        var productId;
        if (e.id === action.payload.id) {
          productId = action.payload;
          return productId;
        } else {
          return e;
        }
      });

      return {
        ...state,
        allProduct: filterProduct,
      };

    default:
      return state;
  }
};
export default Reducer;
