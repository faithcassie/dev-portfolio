import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { projects } from "../assets/constants/index";
import { heroVariants, navVariants } from "../utils/motion";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.name === id);

  return (
    <div className="h-full flex flex-col mb-28">
      <div className="w-[70%] mx-auto">
        <motion.div
          variants={heroVariants(0.2)}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-7xl mx-auto py-10 md:my-20 w-fit "
        >
          {project.name}
        </motion.div>
        <motion.div
          variants={heroVariants(0.3)}
          initial="hidden"
          animate="show"
          className="w-fit flex flex-row justify-between mx-auto my-5"
        >
          {project.demoLink && (
            <button
              onClick={() => (window.open(project.demoLink), "_blank")}
              className="m-2"
            >
              Demo
            </button>
          )}
          <button
            onClick={() => (window.open(project.githubLink), "_blank")}
            className="m-2"
          >
            Github
          </button>
        </motion.div>
        <motion.div
          variants={heroVariants(0.4)}
          initial="hidden"
          animate="show"
          className="w-full md:w-[90%] text-base md:text-2xl text-slate-800 mx-auto my-3"
        >
          {project.description}
        </motion.div>
        <motion.div
          variants={heroVariants(0.5)}
          initial="hidden"
          animate="show"
          className="w-fit mx-auto my-5"
        >
          {project.tech.map((e) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block border border-black text-black px-2 py-1 rounded-full text-xs md:text-base mr-2 mt-1"
            >
              {e}
            </motion.div>
          ))}
        </motion.div>
        <div>
          <motion.img
            variants={heroVariants(0.6)}
            initial="hidden"
            animate="show"
            src={project.imgUrl}
            alt={project.name}
            className="w-full aspect-video object-cover mx-auto mt-5 shadow-customBlue"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
