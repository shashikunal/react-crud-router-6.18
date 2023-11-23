import { useContext, useEffect } from "react";
import { UserContextApi } from "../context/UserContext";
//custom hook starts with use and uppercase
const useFetchUser = () => {
  let val = useContext(UserContextApi);
  useEffect(() => {
    val.fetchUsers();
  }, []);
  return val.users;
};

export default useFetchUser;
