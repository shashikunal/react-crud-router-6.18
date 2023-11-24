const authReducer = (state, action) => {
  let { type, payload, profile } = action;
  switch (type) {
    case "SIGNUP":
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case "LOGIN":
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case "ACCESS_TOKEN":
      return {
        ...state,
        payload,
      };
    case "LOGOUT":
      return {
        ...state,
        payload,
      };
    case "GETME":
      return {
        ...state,
        profile,
      };
    default:
      return {
        state,
      };
  }
};

export default authReducer;
