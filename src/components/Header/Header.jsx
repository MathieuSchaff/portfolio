import React, { useState, useEffect } from "react";
import "./Header.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const frontend = ["f", "r", "o", "n", "t", "-", "e", "n", "d"];
  const developer = ["d", "e", "v", "e", "l", "o", "p", "e", "r"];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <header id="home" className="headerContainer">
      {" "}
      <h1
        className="headerContainer__title"
        ariaLabel="portfolio of mathieu, front end developer"
        tabIndex={0}
      >
        <p className="headerContainer__title-text">
          I<span>'</span>m
        </p>

        <p>Mathieu</p>
        <div className="animatedLetter__container">
          <div className="animatedLetter__first animatedLetter__Block">
            <AnimatedLetters
              letterClass={letterClass}
              className="header--about__title"
              strArray={frontend}
              idx={9}
            />
          </div>
          <div className="animatedLetter__separator"></div>
          <div className="animatedLetter__sec animatedLetter__Block">
            <AnimatedLetters
              letterClass={letterClass}
              className="header--about__title"
              strArray={developer}
              idx={9}
            />
          </div>
        </div>
      </h1>
    </header>
  );
};

export default Header;
