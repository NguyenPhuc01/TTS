const initialState = {
  userLogin: localStorage.getItem("token"),
  userRegister: {},
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      localStorage.setItem("token", action.payload.token);

      return {
        userLogin: action.payload.token,
      };
    case "USER_SIGNUP":
      return {
        userRegister: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
