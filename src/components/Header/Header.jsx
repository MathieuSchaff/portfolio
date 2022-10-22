import React, { useState, useEffect } from "react";
import "./Header.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [
    "f",
    "r",
    "o",
    "n",
    "t",
    "-",
    "e",
    "n",
    "d",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <header id="home" className="headerContainer">
      {" "}
      <h1 className="headerContainer__title">
        <p className="headerContainer__title-text">
          I<span>'</span>m
        </p>

        <p>Mathieu</p>
        <AnimatedLetters
          letterClass={letterClass}
          className="header--about__title"
          strArray={nameArray}
          idx={17}
        />
      </h1>
    </header>
  );
};

export default Header;
