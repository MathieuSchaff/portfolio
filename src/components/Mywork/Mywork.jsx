import React from "react";
import "./Mywork.scss";
import { urlFor } from "../../client.js";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
const Mywork = ({ work }) => {
  return (
    <div className="work--item">
      <div className="work--image">
        <img src={urlFor(work.imgUrl)} alt="work" />
        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="work-img-overlay"
        >
          <a href={work.projectLink}>
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="work-img-overlay-link"
            >
              <AiFillEye />
            </motion.div>
          </a>
          <a href={work.codeLink}>
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="work-img-overlay-link"
            >
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>
      <div className="work--info">
        <h3 className="work--info__title">{work.title}</h3>
        <p className="work--description">{work.description}</p>
        <div className="work--tag__container">
          {work.tags.map((tag, index) => {
            return (
              <div className="work--tag__tag" key={index}>
                {" "}
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mywork;
