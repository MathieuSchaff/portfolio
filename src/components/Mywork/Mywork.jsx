import React from "react";
import "./Mywork.scss";
import { urlFor } from "../../client.js";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
const Mywork = ({ work }) => {
  return (
    <motion.article
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.3 }}
      className="work__item"
    >
      <div>
        <div className="work__image">
          <img src={urlFor(work.imgUrl)} alt={`${work.title} app`} />
          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            className="img__overlay"
          >
            <a href={work.projectLink}>
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="overlay__link"
              >
                <AiFillEye />
              </motion.div>
            </a>
            <a href={work.codeLink}>
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
        <div className="work__info">
          <div className="work__header">
            <h3 className="info__title">{work.title}</h3>
            <div className="work__phone__links">
              <a href={work.projectLink}>
                <AiFillEye />
              </a>
              <a href={work.codeLink}>
                <AiFillGithub />
              </a>
            </div>
          </div>
          <p className="info__description">{work.description}</p>
        </div>
      </div>

      <div className="tag__container">
        {work.tags.map((tag, index) => {
          return (
            <div className="tag__item" key={index}>
              {" "}
              {tag}
            </div>
          );
        })}
      </div>
    </motion.article>
  );
};

export default Mywork;
