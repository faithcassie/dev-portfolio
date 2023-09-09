import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

function TopBar() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={navVariants}
      className=" flex justify-between items-center px-[45px] md:px-[100px] lg:px-[120px] py-[53px] md:pt-4 md:sticky md:top-0 md:z-50 bg-gradient-to-b from-white to-transparent"
    >
      <Logo />
      <Nav />
    </motion.div>
  );
}

export default TopBar;
