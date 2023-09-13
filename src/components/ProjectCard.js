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
      viewport={{ once: true }}
      variants={heroVariants(0.4)}
      className="w-fit  px-3 py-5 mx-auto"
    >
      <div className=" w-[300px] h-auto md:w-[400px] ">
        <img
          src={project.imgUrl}
          className="object-contain w-full h-full shadow-lg hover:border-2 hover:border-lime-300 "
        />
      </div>

      <motion.h2 whileHover={{ scale: 1.1 }} className="text-3xl pt-5 w-fit">
        {project.name}
      </motion.h2>
      <div className="flex mt-5 text-sm ">
        {project.demoLink !== "" && (
          <button
            onClick={() => handleOpenLink(project.demoLink)}
            className="mr-3"
          >
            Demo
          </button>
        )}
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
            className="inline-block border border-black text-black px-2 py-1 rounded-full text-xs mr-2 mt-1"
          >
            {e}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
