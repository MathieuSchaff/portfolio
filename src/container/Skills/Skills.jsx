import { motion } from "motion/react";
import { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import skills from "../../data/skills";
import "./Skills.scss";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["S", "k", "i", "l", "l", "s"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "tools", label: "Tools" },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          idx={6}
        />
        <span className="skills__title-dot">.</span>
      </h2>
          <p className="skills__subtitle">
            Technologies avec lesquelles je travaille
          </p>

      {categories.map((cat) => {
        const filteredSkills = skills.filter((s) => s.category === cat.key);
        if (filteredSkills.length === 0) return null;
        return (
          <div className="skills__group" key={cat.key}>
            <h3 className="skills__group-title">{cat.label}</h3>
            <motion.div className="skills__grid">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="skill-item"
                >
                  <div className="skill-item__icon">
                    <span>{skill.icon}</span>
                  </div>
                  <p className="skill-item__name">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
