import React, { useEffect, useState } from "react";
import "./Work.scss";
import { client } from "../../client.js";
import Mywork from "../../components/Mywork/Mywork.jsx";
import { motion } from "framer-motion";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
const Work = () => {
  const [works, setWorks] = useState([]);
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["P", "r", "o", "j", "e", "c", "t", "s", "."];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  useEffect(() => {
    const query = '*[_type =="works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);
  return (
    <div className="work">
      <h2 className="work__title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={9}
        />{" "}
      </h2>
      <main>
        <div className="work__container">
          {works.map((work) => (
            <Mywork key={work._id} work={work} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Work;
