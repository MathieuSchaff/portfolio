import { motion } from "motion/react";
import { createPortal } from "react-dom";
import "./PortalNav.scss";

function PortalNav({ onClose }) {
  return createPortal(
    <motion.div
      initial={{ translateX: "100%", opacity: 0 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ translateX: "100%", opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="portal-nav"
    >
      <nav className="portal-nav__content">
        <ul className="portal-nav__list">
          <li>
            <a href="#about" className="portal-nav__link" onClick={onClose}>
              À propos
            </a>
          </li>
          <li>
            <a href="#projects" className="portal-nav__link" onClick={onClose}>
              Projets
            </a>
          </li>
          <li>
            <a href="#skills" className="portal-nav__link" onClick={onClose}>
              Compétences
            </a>
          </li>
          <li>
            <a href="#contact" className="portal-nav__link" onClick={onClose}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </motion.div>,
    document.body
  );
}

export default PortalNav;
