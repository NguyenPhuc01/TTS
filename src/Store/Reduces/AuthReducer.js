import {} from "../Type/typeAuth";
const initialState = {
  allUser: [],
  userLogin: localStorage.getItem("token"),
  userRegister: {},
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
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

export const getToken = (state = localStorage.getItem("token"), action) => {
  switch (action.type) {
    case "USER_LOGIN":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        ...action.payload,
      };

    default:
      break;
  }
};

export default AuthReducer;
