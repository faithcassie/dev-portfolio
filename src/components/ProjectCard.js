import React from "react";
import { motion } from "framer-motion";
import { heroVariants } from "../utils/motion";
import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const handleOpenLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      variants={heroVariants(0.4)}
      className="w-fit pl-10 pr-5 py-5 mx-auto"
    >
      <img
        src={project.imgUrl}
        className="object-cover w-[300px] h-[200px] md:w-[400px] md:h-[250px] "
      />
      <motion.h2 whileHover={{ scale: 1.1 }} className="text-3xl pt-5 w-fit">
        {project.name}
      </motion.h2>
      <div className="flex mt-3 lg:hidden">
        <button
          onClick={() => handleOpenLink(project.demoLink)}
          className="mr-3"
        >
          Demo
        </button>
        <button onClick={() => handleOpenLink(project.githubLink)}>
          Github
        </button>
      </div>
      <p className="pt-3 w-[300px] md:w-[400px] text-base">
        {project.description}
      </p>

      <div className="mt-3">
        {project.tech.map((e) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="inline-block border border-black text-black px-2 py-1 rounded-full text-sm mr-2 mt-1"
          >
            {e}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
