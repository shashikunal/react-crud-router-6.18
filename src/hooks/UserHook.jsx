import { useContext, useEffect } from "react";
import { UserContextApi } from "../context/UserContext";

//custom hook starts with use and uppercase
const useFetchUser = () => {
  let { users, fetchUsers, fetchSingleUser, singleUser } =
    useContext(UserContextApi);

  useEffect(() => {
    fetchUsers();
  }, []);
  let data = { users, fetchSingleUser, singleUser };
  return data;
};

export default useFetchUser;
