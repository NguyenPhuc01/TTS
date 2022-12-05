const initialState = {
  allUser: [],
  loading: false,
  error: {},
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case "GETALL_USER":
      return {
        ...state,
        loading: false,
        allUser: action.payload,
      };
    case "GET_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
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
export default User;
