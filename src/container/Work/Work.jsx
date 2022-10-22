import React, { useEffect, useState } from "react";
import "./Work.scss";
import { client } from "../../client.js";
import Mywork from "../../components/Mywork/Mywork.jsx";
import { motion } from "framer-motion";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["P", "o", "r", "t", "f", "o", "l", "i", "o"];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  const handleWorkFilter = (category) => {
    setActiveCategory(category);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (category === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(category)));
      }
    }, 500);
  };

  useEffect(() => {
    const query = '*[_type =="works"]';
    client.fetch(query).then((data) => {
      console.log(data);
      setWorks(data);
      setFilterWork(data);
    });
  }, []);
  return (
    <div>
      <h2 className="work--title">
        {" "}
        My creative{" "}
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={9}
        />{" "}
        section
      </h2>
      <div className="work--categories">
        {["All", "Web Design", "Vanilla JS", "React", "Backend"].map(
          (category, index) => {
            return (
              <div
                className={`work--category ${
                  activeCategory === category ? "activeItem" : ""
                }`}
                key={index}
                onClick={() => handleWorkFilter(category)}
              >
                {category}
              </div>
            );
          }
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="work-container"
      >
        {filterWork.map((work) => (
          <Mywork key={work._id} work={work} />
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
