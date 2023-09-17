import React from "react";
import { motion } from "framer-motion";
import { heroVariants, slideIn } from "../utils/motion";
import { ProjectCard } from "../components/index";
import { projects } from "../assets/constants/index";
import novelMan from "../assets/images/novel.png";

const ProjectPage = () => {
  return (
    <div
      id="projects"
      className="flex flex-col w-full h-full mx-auto relative py-16"
    >
      <motion.h1
        initial="hidden"
        whileInView="show"
        whileHover={{
          rotate: [0, -5, 5, 0],
          transformOrigin: "center",
          transition: {
            duration: 0.8,
          },
        }}
        viewport={{ once: true }}
        variants={heroVariants(0.2)}
        className="w-fit mx-auto text-4xl md:text-7xl flex justify-center"
      >
        Projects
      </motion.h1>
      <div className="flex justify-between w-full px-5 overflow-x-auto overflow-y-hidden scrollbar overscroll-y-auto overscroll-x-none md:flex-wrap md:w-[80%] md:mx-auto pt-16">
        {projects.map((element, index) => (
          <ProjectCard key={index} project={element} />
        ))}
      </div>
      <div className="w-full h-full mx-auto flex justify-center">
        <motion.img
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: {
              duration: 0.8,
            },
          }}
          variants={slideIn("up", "spring", 0.2, 1)}
          className="select-none w-[60%] mx-auto sm:w-[40%] md:w-[30%] pt-24   "
          src={novelMan}
          alt="thinking-man"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
