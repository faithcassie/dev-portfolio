import React from "react";

import { About, Hero, Projects } from "../components";
import arrowUp from "../assets/images/ep_arrow-up-bold.svg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div id="hero" className="relative">
        <Hero />
      </div>
      <About />
      <Projects />
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={-200}
        duration={200}
        href="#hero"
        className="cursor-pointer absolute bottom-10 right-[10%]"
      >
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
      </Link>
    </div>
  );
};

export default HomePage;
