import { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import Mywork from "../../components/Mywork/Mywork";
import projects from "../../data/projects";
import "./Work.scss";

const Work = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["P", "r", "o", "j", "e", "", "t", "s"];

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
        Une sélection de projets sur lesquels j'ai travaillé récemment
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
