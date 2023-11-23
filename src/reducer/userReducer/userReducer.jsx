/* eslint-disable no-case-declarations */
const UserReducer = (state, action) => {
  let { type, users, singleUser } = action;
  switch (type) {
    case "FETCH":
      return {
        ...state,
        users,
        isLoading: false,
      };
    case "SINGLE_USER":
      // let filteredData = state.filter(user => user.id === user.id);
      return {
        ...state,
        singleUser,
      };
    default:
      return {
        state,
      };
  }
};

export default UserReducer;
