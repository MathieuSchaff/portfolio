import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            M<span className="footer__logo-dot">.</span>S
          </span>
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Mathieu Schaff
          </p>
        </div>

        <ul className="footer__socials">
          <li>
            <a
              href="https://www.linkedin.com/in/mathieu-schaff-frontend/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MathieuSchaff"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/MathSchaff"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
