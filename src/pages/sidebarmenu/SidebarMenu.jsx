import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContextApi } from "../../context/AuthContext";

const SidebarMenu = () => {
  let { isAuth } = useContext(AuthContextApi);

  const IsAuth = () => {
    return (
      <Fragment>
        <li>
          <NavLink
            to="/create-course"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Create Course
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/git-users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Git users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-product"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            create product
          </NavLink>
        </li>
      </Fragment>
    );
  };

  // const IsAnonymousUser = () => {
  //   return <Fragment></Fragment>;
  // };

  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      {isAuth ? <IsAuth /> : ""}
    </ul>
  );
};

export default SidebarMenu;
