/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import UserReducer from "./../reducer/userReducer/userReducer";
import { USER_API_INSTANCE } from "./../AxiosIntance/UserAxiosInstance";
export const UserContextApi = createContext();

const initialState = {
  users: null,
  isLoading: true,
};

const UserProvider = ({ children }) => {
  let [users, dispatch] = useReducer(UserReducer, initialState);

  const fetchUsers = async () => {
    try {
      let { data } = await USER_API_INSTANCE.get("/users");
      dispatch({ type: "FETCH", users: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContextApi.Provider value={{ users, fetchUsers }}>
      {children}
    </UserContextApi.Provider>
  );
};

export default UserProvider;
