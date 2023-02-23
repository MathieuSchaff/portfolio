import { createPortal } from "react-dom";

function PortalNav({ onClose }) {
  return createPortal(
    <>
      <div className="portalModal fade show">
        <nav
        //   className={
        //     isMenuClick ? "burger--nav burger--nav__clicked" : "burger--nav"
        //   }
        >
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
            <li className="burger--item">
              <a href="#contact" className="burger--link" onClick={onClose}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>,
    document.body
  );
}
export default PortalNav;
