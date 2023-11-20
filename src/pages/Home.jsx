import { Outlet } from "react-router-dom";
import SidebarMenu from "./sidebarmenu/SidebarMenu";

const Home = () => {
  return (
    <section id="course-container">
      <article>
        <aside className="sidebar">
          <SidebarMenu />
        </aside>
        <aside className="content">
          <Outlet />
        </aside>
      </article>
    </section>
  );
};

export default Home;
