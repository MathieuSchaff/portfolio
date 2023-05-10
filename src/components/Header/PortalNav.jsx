import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
function PortalNav({ onClose }) {
  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ translateX: "100%", opacity: 0 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0 }}
        className="portalModal fade show"
      >
        <div className="container__modal">
          <div
            className={"menu-open menu-open__clicked align-end"}
            onClick={onClose}
          >
            <div></div>
          </div>
          <nav>
            <ul className="burger--list">
              <li className="burger--item">
                <a href="#projects" className="burger--link" onClick={onClose}>
                  Projects
                </a>
              </li>
              <li className="burger--item">
                <a href="#skills" className="burger--link" onClick={onClose}>
                  Skills
                </a>
              </li>
            </ul>
          </nav>
          <div></div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
export default PortalNav;
