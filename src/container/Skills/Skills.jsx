import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["S", "k", "i", "l", "l", "s"];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }, []);
  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <div className="skills ">
      <h2 className=" skills__title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={6}
        />
      </h2>
      <motion.main className="skills__container">
        {skills.map((skill, index) => {
          return (
            <motion.div
              key={index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills__item"
            >
              <div className="item__icon">
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="item__name">{skill.name}</p>
            </motion.div>
          );
        })}
      </motion.main>
    </div>
  );
};

export default Skills;
