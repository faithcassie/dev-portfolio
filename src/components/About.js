import React from "react";
import seaHorse from "../assets/images/seashorse@3x.png";
import { motion } from "framer-motion";
import { heroVariants, slideIn } from "../utils/motion";

const About = () => {
  return (
    <div id="about" className="relative mt-[15%] pt-28 ">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={slideIn("right", "tween", 0.5, 1)}
        className="bg-[#FFD1B8] w-full md:w-[90%] h-full absolute rounded-tl-[150px] right-0 shadow-xl"
      />
      <div className=" flex w-[60%] h-[550px] mx-auto items-center pb-5">
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
          variants={slideIn("right", "spring", 0.4, 1)}
          src={seaHorse}
          alt="seahorse"
          className="absolute w-[50%] left-36 -bottom-[250px] md:-bottom-[250px]  md:left-10 lg:left-22 lg:w-[40%] lg:mt-10 lg:mr-20"
        />
        <div className="flex flex-col absolute w-[70%] mt-10 md:right-28 md:mt-16 md:w-[40%] ">
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
            viewport={{ once: false }}
            variants={heroVariants(0.2)}
            className="w-fit text-5xl md:text-7xl pb-10"
          >
            About me
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={heroVariants(0.3)}
            className="w-fit text-base md:text-lg"
          >
            I started as a graphic design and UI/UX student in college. Learning
            front-end development seemed like a good career move and I
            completely fell for it. This led me to{" "}
            <span className="text-black font-bold">switch gears</span> and
            become a front-end web developer.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={heroVariants(0.4)}
            className="w-fit pt-5 text-base "
          >
            I find happiness in crafting{" "}
            <span className="font-semibold  bg-[#CAEAE9] p-1">
              aesthetically pleasing
            </span>{" "}
            and{" "}
            <span className="text-[var(--primary)] font-bold">
              effectively functional
            </span>{" "}
            products that assist companies in building user trust and
            accomplishing business goals.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
