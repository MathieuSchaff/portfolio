import { useEffect, useState } from "react";
import "./Work.scss";
import projects from "../../data/projects";
import Mywork from "../../components/Mywork/Mywork";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";

const Work = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["P", "r", "o", "j", "e", "c", "t", "s"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="work">
      <h2 className="work__title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={9}
        />
        <span className="work__title-dot">.</span>
      </h2>
      <p className="work__subtitle">
        A selection of projects I've worked on recently
      </p>
      <div className="work__container">
        {projects.map((project) => (
          <Mywork key={project.id} work={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
