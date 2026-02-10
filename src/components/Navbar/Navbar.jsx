import { Atom, Code2, Home, Mail } from "lucide-react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navBar" role="navigation" aria-label="Choose section">
      <ul className="navBar__ul">
        <li className="navBar__li">
          <a href="#home" aria-label="Home">
            <Home className="icon" />
          </a>
        </li>
        <li className="navBar__li">
          <a href="#skills" aria-label="Skills">
            <Atom className="icon" />
          </a>
        </li>
        <li className="navBar__li">
          <a href="#projects" aria-label="Projects">
            <Code2 className="icon" />
          </a>
        </li>
        <li className="navBar__li">
          <a href="#contact" aria-label="Contact">
            <Mail className="icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
