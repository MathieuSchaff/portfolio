import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import "./Header.scss";
import PortalNav from "./PortalNav";

const Header = () => {
  const [isMenuClick, setIsMenuClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeModal = () => {
    setIsMenuClicked(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeModal();
      }
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuClicked((c) => !c);
  };

  return (
    <header
      id="home"
      className={`header ${scrolled ? "header--scrolled" : ""} ${
        isMenuClick ? "header--menu-open" : ""
      }`}
    >
      <div className="header__inner">
        <a
          href="#home"
          className="header__logo"
          aria-label="portfolio of mathieu, front end developer"
          tabIndex={0}
        >
          M<span className="header__logo-dot">.</span>S
        </a>

        <div className="header__burger">
          <div
            className={
              isMenuClick ? "menu-open menu-open--active" : "menu-open"
            }
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle menu"
            tabIndex={0}
          >
            <div></div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuClick && <PortalNav onClose={closeModal} />}
        </AnimatePresence>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <a href="#about" className="header__nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="header__nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="header__nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="header__nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
