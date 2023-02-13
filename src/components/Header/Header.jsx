import React from "react";
import "./Header.scss";
const Header = () => {
  const [isMenuClick, setIsMenuClicked] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuClicked((c) => !c);
  };
  return (
    <header id="home" className="header">
      <h1 aria-label="portfolio of mathieu, front end developer" tabIndex={0}>
        {"<M/>"}
      </h1>
      <div className={"modal-menu"}>
        <div
          className={isMenuClick ? "menu-open menu-open__clicked" : "menu-open"}
          onClick={toggleMenu}
        >
          <div></div>
        </div>
        <nav
          className={
            isMenuClick ? "burger--nav burger--nav__clicked" : "burger--nav"
          }
        >
          <ul className="burger--list">
            <li className="burger--item">
              <a href="#about" className="burger--link" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className="burger--item">
              <a href="#skills" className="burger--link" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li className="burger--item">
              <a href="#projects" className="burger--link" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li className="burger--item">
              <a href="#contact" className="burger--link" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav className="header--nav__main">
        <ul className="header--nav__list">
          <li className="header--nav__item">
            <a href="#about" className="header--nav__link">
              About
            </a>
          </li>
          <li className="header--nav__item">
            <a href="#skills" className="header--nav__link">
              Skills
            </a>
          </li>
          <li className="header--nav__item">
            <a href="#projects" className="header--nav__link">
              Projects
            </a>
          </li>
          <li className="header--nav__item">
            <a href="#contact" className="header--nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
