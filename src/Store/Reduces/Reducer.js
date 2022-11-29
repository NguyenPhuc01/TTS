// import { GET_ALLPRODUCT, DELETE_PRODUCT, GET_DETAILPRODUCT } from "../Types";
const inittialState = {
  allProduct: [],
  detail: [],
  allProductUpdate: [],
  userLogin: {},
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
        var newArr;
        if (e.id === action.payload.id) {
          newArr = action.payload;
          // console.log([...state.allProduct, newArr]);
          return newArr;
        } else {
          return e;
        }
      });

      return {
        ...state,
        allProduct: filterProduct,
      };

    case "USER_LOGIN":

    console.log('action',action.payload);
      return {
        
        userLogin: action.payload,
      };
    default:
      return state;
  }
};
export default Reducer;
