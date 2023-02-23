import React from "react";
import "./About.scss";
import moi from "./moi.png";
import myPicture from "./myPicture.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const About = () => {
  return (
    <main>
      <div
        id="about"
        className="about"
        aria-label="portfolio of mathieu, front end developer"
        tabIndex={0}
      >
        <div className="about__welcome">
          <div className="welcome">
            <p>Welcome to my</p>
            <p className="welcome__portfolio">Portfolio</p>
          </div>
          <p className="about__text">I'm a Front End Developer, France.</p>{" "}
          <p className="about__text">
            {" "}
            I'm passionate about web development and I'm always looking for new
            challenges.
          </p>
          <section>
            <ul className="socials--list">
              <li>
                <a
                  href="https://www.linkedin.com/in/mathieu-schaff-frontend/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MathieuSchaff"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/MathSchaff"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineTwitter />
                  Twitter
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="image__container">
          <img
            src={myPicture}
            alt="moi"
            className="about__img about__img--background"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
