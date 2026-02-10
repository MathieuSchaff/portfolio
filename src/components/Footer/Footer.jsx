import "./Footer.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

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
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MathieuSchaff"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/MathSchaff"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <AiOutlineTwitter />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
