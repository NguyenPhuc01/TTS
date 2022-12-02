import {} from "../Type/typeAuth";
const initialState = {
  allUser: [],
  userLogin: {},
  userRegister: {},
  token: "",
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      console.log("action login", action.payload);
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
      let newUsers = [...state.allUser].map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      return {
        ...state,
        allUser: newUsers,
      };
    default:
      return state;
  }
};
export default AuthReducer;
