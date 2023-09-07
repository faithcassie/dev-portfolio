import React from "react";
import { motion } from "framer-motion";
import { heroVariants, slideIn } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="relative  my-36 py-36">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={slideIn("left", "tween", 0.5, 1)}
        className="bg-[#F6F6D7] w-full h-full absolute top-28 -z-10 mb-10  "
      />
      <div id="projects" className="flex flex-col w-full mx-auto relative">
        <h1 className="text-7xl py-20">Projects</h1>
        <div className="flex justify-between w-full overflow-scroll overscroll-y-auto overscroll-x-contain bg-slate-200 ml-10">
          <ProjectCard className="" />
          <ProjectCard className="" />
          <ProjectCard className="" />
          <ProjectCard className="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
