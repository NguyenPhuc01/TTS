const initialState = {
  userLogin: localStorage.getItem("token"),
  userRegister: {},
  loading: false,
  error: null,
};
const Auth = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AUTH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN":
      localStorage.setItem("token", action.payload.token);

      return {
        loading: false,
        userLogin: action.payload.token,
      };

    case "GET_AUTH_FAIL":
      return {
        ...state,
        loading: false,
        userLogin: action.payload,
      };
    case "USER_SIGNUP":
      return {
        userRegister: action.payload,
      };

    default:
      return state;
  }
};

export default Auth;
