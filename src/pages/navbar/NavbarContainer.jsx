import Logo from "./Logo";
import Menu from "./Menu";

const NavbarContainer = () => {
  return (
    <section id="navbar">
      <article className="nav-container">
        <Logo />
        <Menu />
      </article>
    </section>
  );
};

export default NavbarContainer;
