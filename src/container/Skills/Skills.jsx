import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["k", "i", "l", "l", "s"];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }, []);
  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      console.log(data);
      setSkills(data);
    });
  }, []);
  return (
    <div className="app--skills">
      {" "}
      <h2 className="head--text">
        {" "}
        <span className="head--text-span">S</span>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={5}
        />
      </h2>
      <motion.div className="skills-container">
        {skills.map((skill, index) => {
          return (
            <motion.div
              key={index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-item"
            >
              <div className="skills-item-icon">
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="skills-item-name">{skill.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
