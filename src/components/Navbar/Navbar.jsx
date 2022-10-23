import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";

import { BsCodeSlash } from "react-icons/bs";
import { DiReact } from "react-icons/di";
const Navbar = () => {
  return (
    <>
      <nav className="navBar" role="navigation" aria-label="Choose section">
        <ul className="navBar__ul">
          <li className="navBar__li">
            <NavLink to="/" role="menuitem" end>
              <AiOutlineHome className="icon" />
            </NavLink>
          </li>
          <li className="navBar__li">
            <NavLink to="/skills" aria-label="Skills" role="menuitem">
              <DiReact className="icon" />
            </NavLink>
          </li>
          <li className="navBar__li">
            <NavLink to="/work" aria-label="Work" role="menuitem">
              <BsCodeSlash className="icon" />
            </NavLink>
          </li>
          <li className="navBar__li">
            <NavLink to="/contact" aria-label="contact" role="menuitem">
              <AiOutlineMail className="icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
