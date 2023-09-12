import React from "react";
import { motion } from "framer-motion";
import { heroVariants } from "../utils/motion";
import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      variants={heroVariants(0.4)}
      className="w-fit pl-10 pr-5 py-5 mx-auto"
    >
      <motion.img
        src={project.imgUrl}
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: {
            duration: 0.8,
          },
        }}
        className="w-[300px] h-[200px] md:w-[400px] md:h-[250px] "
      />
      <motion.h2 whileHover={{ scale: 1.1 }} className="text-3xl pt-5 w-fit">
        {project.name}
      </motion.h2>
      <p className="pt-3">{project.description}</p>
      <div className="flex mt-3">
        <button className="mr-3">Demo</button>
        <button>Github</button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
