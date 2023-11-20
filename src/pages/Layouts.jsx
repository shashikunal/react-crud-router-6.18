import { Outlet } from "react-router-dom";
import NavbarContainer from "./navbar/NavbarContainer";

const Layouts = () => {
  return (
    <section id="main-block">
      <article className="container">
        <NavbarContainer />
        <Outlet />
      </article>
    </section>
  );
};

export default Layouts;
