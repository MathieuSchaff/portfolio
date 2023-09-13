import React from "react";
import "./Header.scss";
import PortalNav from "./PortalNav";
const Header = () => {
  const [isMenuClick, setIsMenuClicked] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuClicked((c) => !c);
  };
  return (
    <header id="home" className="header">
      <h1 aria-label="portfolio of mathieu, front end developer" tabIndex={0}>
        Portfolio
      </h1>
      <div className={"modal-menu"}>
        <div
          className={isMenuClick ? "menu-open menu-open__clicked" : "menu-open"}
          onClick={toggleMenu}
        >
          <div></div>
        </div>
        {isMenuClick && <PortalNav onClose={toggleMenu} />}
      </div>
      <nav className="header--nav__main">
        <ul className="header--nav__list">
          <li className="burger--item">
            <a href="#projects" className="burger--link">
              Projects
            </a>
          </li>
          <li className="burger--item">
            <a href="#skills" className="burger--link">
              Skills
            </a>
          </li>
          {/* <li className="burger--item">
            <a href="#contact" className="header--nav__link">
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
