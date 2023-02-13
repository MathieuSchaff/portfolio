import React from "react";
import "./About.scss";
import moi from "./moi.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";

const About = () => {
  const frontend = ["F", "r", "o", "n", "t", "-", "e", "n", "d"];
  const developer = ["d", "e", "v", "e", "l", "o", "p", "e", "r", "."];
  return (
    <main>
      <div
        className="about"
        aria-label="portfolio of mathieu, front end developer"
        tabIndex={0}
      >
        <div className="about__descOfMe">
          <div className="descOfMe__whoIAm">
            <p>I'm</p>
            <p className="whoIAm__name"> Mathieu Schaff</p>
          </div>
          <div className="about__jobDesc">
            <div className="animatedLetter__first animatedLetter__Block">
              <AnimatedLetters className="about__title" strArray={frontend} />
            </div>
            <div className="animatedLetter__separator"></div>
            <div className="animatedLetter__sec animatedLetter__Block">
              <AnimatedLetters className="about__title" strArray={developer} />
            </div>
          </div>
          <p tabIndex={0} className="whoIam__job">
            Former system administrator converted to the frontend
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
        <img src={moi} alt="moi" className="about__img" />
      </div>
    </main>
  );
};

export default About;
