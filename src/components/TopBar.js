import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import menuIcon from "../assets/images/menu-icon.svg";
import closeIcon from "../assets/images/closeIcon.svg";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const hamMenuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 1,
        ease: [0.12, 0, 0.4, 0],
      },
    },
  };

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
            className={({ isActive }) =>
              isActive
                ? "hidden lg:block mr-[16px] cursor-pointer font-semibold text-[var(--secondary)]"
                : "hidden lg:block mr-[16px] hover:text-[var(--primary)] hover:scale-105 hover:font-semibold cursor-pointer"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "hidden lg:block mr-[16px] cursor-pointer font-semibold text-[var(--secondary)]"
                : "hidden lg:block mr-[16px] hover:text-[var(--primary)] hover:scale-105 hover:font-semibold cursor-pointer"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? "hidden lg:block mr-[16px] cursor-pointer font-semibold text-[var(--secondary)]"
                : "hidden lg:block mr-[16px] hover:text-[var(--primary)] hover:scale-105 hover:font-semibold cursor-pointer"
            }
          >
            Resume
          </NavLink>

          <button onClick={() => navigate("/contact")}>Get in touch</button>

          <div onClick={toggleMenu} className="block lg:hidden pl-4">
            <img src={menuIcon} className="w-5 h-5" />
          </div>
          {open && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={hamMenuVars}
              className="fixed left-0 top-0 h-screen w-full  bg-pink-200 origin-top"
            >
              <div
                onClick={toggleMenu}
                className="fixed lg:hidden right-12 top-9"
              >
                <img src={closeIcon} className="w-5 h-5" />
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </motion.div>
  );
}

export default TopBar;
