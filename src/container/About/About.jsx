import { motion } from "framer-motion";
import "./About.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiArrowDown } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="hero" aria-label="about me">
      <div className="hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="hero__greeting">Hello, I'm</span>
          <h1 className="hero__name">
            Mathieu <span className="hero__name--accent">Schaff</span>
          </h1>
          <h2 className="hero__title">Web Developer</h2>
          <p className="hero__description">
            Based in France, I craft modern web experiences with clean code and
            creative solutions. Passionate about building interfaces that are
            both beautiful and performant.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__cta">
              View my work
            </a>
            <a href="#contact" className="hero__cta hero__cta--outline">
              Get in touch
            </a>
          </div>

          <ul className="hero__socials">
            <li>
              <a
                href="https://www.linkedin.com/in/mathieu-schaff-frontend/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hero__social-link"
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
                className="hero__social-link"
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
                className="hero__social-link"
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="hero__avatar">
            <div className="hero__avatar-placeholder">
              <span>MS</span>
            </div>
            <div className="hero__avatar-decoration"></div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to projects"
      >
        <HiArrowDown className="hero__scroll-icon" />
      </motion.a>
    </section>
  );
};

export default About;
