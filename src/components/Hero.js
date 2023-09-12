import React from "react";
import GoldFish from "../assets/images/fish.png";
import { motion } from "framer-motion";
import { heroVariants, slideIn } from "../utils/motion";
import linkdedLogo from "../assets/images/linkedin-icon.svg";
import githubLogo from "../assets/images/github-icon.svg";

const Hero = () => {
  const handleOpenLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div id="hero" className="relative h-[500px] pt-0 md:pt-24 ">
      <div className="h-[400px] mt-24 ">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={slideIn("left", "tween", 0.1, 0.5)}
          className="h-[350px] md:mt-[10%] w-[90%]  bg-[#CAEAE9] absolute inset-y-0 left-0 rounded-tr-[150px] shadow-xl"
        />

        <motion.img
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 5, 0],
            transition: {
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.4, 0.7, 1],
              repeat: Infinity,
              repeatDelay: 3,
            },
          }}
          variants={slideIn("up", "spring", 0.2, 1)}
          src={GoldFish}
          alt="hero_image"
          className="w-[50%] md:w-[40%] lg:w-[30%] absolute right-20 md:right-[15%] bottom-5 md:-bottom-28 "
        />
        <div className="absolute left-20 md:left-[15%] -top-10 w-[80%] md:w-[50%] md:mt-[10%] ">
          <motion.h1
            initial="hidden"
            animate="show"
            whileHover={{
              rotate: [0, -5, 5, 0],
              transformOrigin: "center",
              transition: {
                duration: 0.8,
              },
            }}
            variants={heroVariants(0.6)}
            className="text-5xl md:text-6xl lg:text-7xl w-fit "
          >
            Hey,
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate="show"
            whileHover={{
              rotate: [0, -5, 5, 0],
              transformOrigin: "center",
              transition: {
                duration: 0.8,
              },
            }}
            variants={heroVariants(0.7)}
            className="text-5xl md:text-6xl lg:text-7xl  w-fit"
          >
            nice to
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate="show"
            whileHover={{
              rotate: [0, -5, 5, 0],
              transformOrigin: "center",
              transition: {
                duration: 0.8,
              },
            }}
            variants={heroVariants(0.8)}
            className="text-5xl md:text-6xl lg:text-7xl  w-fit"
          >
            meet you!
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={heroVariants(0.9)}
            className="text-xl md:text-2xl mt-2 md:mt-5 w-[60%] md:w-[65%] "
          >
            I’m Faith Nguyen, a{" "}
            <span className="font-medium text-[var(--primary)]">
              front-end web developer
            </span>
            , based in Dallas, Texas.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            variants={heroVariants(1)}
            className="flex w-fit mt-4"
          >
            <motion.a
              onClick={() =>
                handleOpenLink("https://www.linkedin.com/in/faithnguyentech/")
              }
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              <img src={linkdedLogo} alt="linkdedin" className="w-5 h-5 mr-4" />
            </motion.a>
            <motion.a
              onClick={() => handleOpenLink("https://github.com/faithcassie")}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer"
            >
              <img src={githubLogo} alt="github" className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
        {/* <a className="cursor-pointer">
          <motion.img
            animate={{
              // scale: [1, 0.8, 1.3, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.4, 0.7, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            src={arrowUp}
            alt="button"
            className="w-5 md:w-7 mx-auto pt-10 md:pt-20"
          />
        </a> */}
      </div>
    </div>
  );
};

export default Hero;
