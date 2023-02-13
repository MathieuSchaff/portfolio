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

  const nameArray = ["P", "r", "o", "j", "e", "c", "t", "s", "."];
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
      setWorks(data);
      setFilterWork(data);
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
        {/* <div className="work__categories">
          {["All", "Web Design", "Vanilla JS", "React", "Typescript"].map(
            (category, index) => {
              return (
                <div
                  className={`work__category ${
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
        </div> */}
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="work__container"
        >
          {filterWork.map((work) => (
            <Mywork key={work._id} work={work} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Work;
