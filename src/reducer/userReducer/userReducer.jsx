const UserReducer = (state, action) => {
  let { type, users } = action;
  switch (type) {
    case "FETCH":
      return {
        ...state,
        users,
        isLoading: false,
      };
    default:
      return {
        state,
      };
  }
};

export default UserReducer;
