import { Outlet } from "react-router-dom";
import SidebarMenu from "./sidebarmenu/SidebarMenu";

const Home = () => {
  return (
    <section id="course-container">
      <article>
        <aside className="sidebar">
          <SidebarMenu />
        </aside>
        <aside className="content-wrapper">
          <div className="content-inner">
            <Outlet />
          </div>
        </aside>
      </article>
    </section>
  );
};

export default Home;
