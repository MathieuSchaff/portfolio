import { useEffect, useState } from "react";
import "./Header.scss";
import PortalNav from "./PortalNav";
const Header = () => {
  const [isMenuClick, setIsMenuClicked] = useState(false);
  // Event listener for window resize
  const closeModal = () => {
    setIsMenuClicked(false);
  };
  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is below a certain threshold (e.g., 768 pixels)
      if (window.innerWidth > 768) {
        closeModal(); // Close the modal when the window is resized below the threshold
      }
    };

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  const toggleMenu = () => {
    setIsMenuClicked((c) => !c);
  };
  return (
    <header id="home" className={
      isMenuClick ? "header header__clicked" : "header"
    }>

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
      </div>

      {isMenuClick && <PortalNav onClose={closeModal} />}
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
