import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
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
    </ul>
  );
};

export default SidebarMenu;
