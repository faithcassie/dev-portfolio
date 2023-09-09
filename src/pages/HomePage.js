import React from "react";
import { About, Hero, Projects } from "../components";
import arrowUp from "../assets/images/arrow-up-bold.svg";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <Hero />
      </div>
      <About />
      <Projects />
    </div>
  );
};

export default HomePage;
