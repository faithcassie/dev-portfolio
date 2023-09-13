import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import menuIcon from "../assets/images/menu-icon.svg";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={navVariants}
      className=" flex justify-between items-center px-[45px] md:px-[100px] lg:px-[120px] pt-[30px] pb-[35px]  md:pt-4 sticky top-0 z-50 bg-gradient-to-b via-white from-white to-transparent"
    >
      <nav className="flex justify-between w-full">
        <div>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
            <Logo />
          </Link>
        </div>

        <div className="flex items-center">
          <NavLink
            to="/about"
            className="hidden lg:block mr-[16px] hover:text-[var(--primary)] hover:scale-105 hover:font-medium cursor-pointer"
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className="hidden lg:block mr-[16px] hover:text-[var(--primary)] hover:scale-105 hover:font-medium cursor-pointer"
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className="hidden lg:block mr-[16px] hover:text-[var(--primary)] hover:scale-105 hover:font-medium cursor-pointer"
          >
            Resume
          </NavLink>

          <button onClick={() => navigate("/contact")}>Get in touch</button>

          <div className="block lg:hidden pl-4">
            <img src={menuIcon} sizes="20px" />
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default TopBar;
