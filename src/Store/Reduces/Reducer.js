import { USER_SIGNUP } from "../typeAuth";

// import { GET_ALLPRODUCT, DELETE_PRODUCT, GET_DETAILPRODUCT } from "../Types";
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
        var newObj;
        if (e.id === action.payload.id) {
          newObj = action.payload;
          // console.log([...state.allProduct, newArr]);
          return newObj;
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
