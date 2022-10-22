import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";

import { BsCodeSlash } from "react-icons/bs";
import { DiReact } from "react-icons/di";
const Navbar = () => {
  return (
    <>
      <nav className="navBar" role="navigation" aria-label="Choose section">
        <ul className="navBar__title-links">
          <Link to="/">
            <li className="navBar__title">
              <AiOutlineHome className="icon" />
            </li>
          </Link>
          <Link to="/skills" aria-label="Skills">
            <li className="navBar__title">
              <DiReact className="icon" />
            </li>
          </Link>
          <Link to="/work" aria-label="Work">
            <li className="navBar__title">
              <BsCodeSlash className="icon" />
            </li>
          </Link>
          <Link to="/contact" aria-label="contact">
            <li className="navBar__title">
              <AiOutlineMail className="icon" />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
