import {} from "../typeAuth";
const initialState = {
  allUser: [],
  userLogin: {},
  userRegister: {},
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      console.log("action", action.payload);
      return {
        userLogin: action.payload,
      };
    case "USER_SIGNUP":
      return {
        userRegister: action.payload,
      };
    case "GETALL_AUTH":
      return {
        ...state,
        allUser: action.payload,
      };
    case "ADD_USER":
      console.log("action addUser", action.payload);
      return {
        ...state,
        allUser: [...state.allUser, action.payload],
      };
    case "REMOVE_USER":
      console.log("action removeUSer", action.payload);
      return {
        ...state,
        allUser: state.allUser.filter((e) => e.id !== action.payload),
      };
    case "UPDATE_USER":
      console.log("action changeUser", action.payload);
      let filterUser = [...state.allUser].map((e) => {
        var newObjUer;
        if (e.id === action.payload.id) {
          newObjUer = action.payload;
          // console.log([...state.allProduct, newArr]);
          return newObjUer;
        } else {
          return e;
        }
      });

      return {
        ...state,
        allUser: filterUser,
      };
    default:
      return state;
  }
};
export default AuthReducer;
