import React from "react";
import { motion } from "framer-motion";
import { heroVariants, slideIn } from "../utils/motion";
import { ProjectCard } from "../components/index";
import novelMan from "../assets/images/novel.png";
import { projects } from "../assets/constants/index";
const Projects = () => {
  return (
    <div className="relative w-full h-full mt-36 mb-[400px] md:mb-[500px] pb-[100px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={slideIn("left", "tween", 0.5, 1)}
        className="bg-[#F6F6D7] w-full h-full absolute top-28 -z-20"
      />
      <div
        id="projects"
        className="flex flex-col w-full h-full mx-auto relative py-[200px]"
      >
        <motion.h1
          initial="hidden"
          whileInView="show"
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transformOrigin: "center",
            transition: {
              duration: 0.8,
            },
          }}
          viewport={{ once: true }}
          variants={heroVariants(0.2)}
          className="w-full text-5xl md:text-7xl pb-10 absolute flex justify-center"
        >
          Projects
        </motion.h1>
        <div className="flex justify-between w-full px-5 scrollbar overflow-x-auto overflow-y-hidden md:overflow-hidden overscroll-y-auto overscroll-x-none md:flex-wrap md:w-[80%] md:mx-auto pt-36">
          {projects.map((element) => (
            <ProjectCard project={element} />
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
            variants={slideIn("left", "spring", 0.2, 1)}
            className="select-none w-[60%] mx-auto sm:w-[40%] md:w-[30%] absolute -bottom-[300px] md:-bottom-[400px] z-10"
            src={novelMan}
            alt="thinking-man"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
