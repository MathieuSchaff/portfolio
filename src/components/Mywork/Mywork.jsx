import "./Mywork.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Mywork = ({ work }) => {
  return (
    <motion.article
      whileInView={{ opacity: [0, 1], y: [40, 0] }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="project-card"
    >
      <div className="project-card__image-wrapper">
        <div
          className="project-card__placeholder"
          style={{ backgroundColor: work.color || "#e07a5f" }}
        >
          <span className="project-card__placeholder-text">
            {work.title.charAt(0)}
          </span>
        </div>

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="project-card__overlay"
        >
          <a
            href={work.projectLink}
            target="_blank"
            rel="noreferrer"
            className="project-card__overlay-btn"
            aria-label="View live project"
          >
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
            >
              <AiFillEye />
            </motion.div>
          </a>
          <a
            href={work.codeLink}
            target="_blank"
            rel="noreferrer"
            className="project-card__overlay-btn"
            aria-label="View source code"
          >
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
            >
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{work.title}</h3>
          <div className="project-card__links">
            <a
              href={work.projectLink}
              target="_blank"
              rel="noreferrer"
              aria-label="View live project"
            >
              <AiFillEye />
            </a>
            <a
              href={work.codeLink}
              target="_blank"
              rel="noreferrer"
              aria-label="View source code"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <p className="project-card__description">{work.description}</p>
      </div>

      <div className="project-card__tags">
        {work.tags.map((tag, index) => (
          <span className="project-card__tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default Mywork;
