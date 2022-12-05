const initialState = {
  allUser: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
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
export default UserReducer;
