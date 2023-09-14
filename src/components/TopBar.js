import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import linkdedLogo from "../assets/images/linkedin-icon.svg";
import githubLogo from "../assets/images/github-icon.svg";
import { AnimatePresence, motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import menuIcon from "../assets/images/menu-icon.svg";
import closeIcon from "../assets/images/closeIcon.svg";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../assets/constants";

function TopBar() {
  const navigate = useNavigate();
  const handleOpenLink = (link) => {
    window.open(link, "_blank");
  };
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
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.4,
        duration: 0.4,
        ease: [0.22, 0, 0.4, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.09,
        staggerDirection: 1,
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
          <NavLink to="/">
            <Logo />
          </NavLink>
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
          <AnimatePresence>
            {open && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={hamMenuVars}
                className="fixed left-0 top-0 h-screen w-full  bg-yellow-50 origin-top"
              >
                <div
                  onClick={toggleMenu}
                  className="fixed lg:hidden right-12 top-9"
                >
                  <img src={closeIcon} className="w-5 h-5" />
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                  className="flex flex-col h-full justify-center items-center"
                >
                  {navLinks.map((link, index) => {
                    return (
                      <div className="overflow-hidden">
                        <MobileLink
                          key={index}
                          title={link.title}
                          href={link.href}
                        />
                      </div>
                    );
                  })}
                  <div className="overflow-hidden">
                    <motion.div
                      variants={mobileLinkVars}
                      className="flex pt-28 "
                    >
                      <motion.a
                        onClick={() =>
                          handleOpenLink(
                            "https://www.linkedin.com/in/faithnguyentech/"
                          )
                        }
                        whileHover={{ scale: 1.1 }}
                        className="cursor-pointer"
                      >
                        <img
                          src={linkdedLogo}
                          alt="linkdedin"
                          className="w-5 h-5 mr-4 "
                        />
                      </motion.a>

                      <motion.a
                        onClick={() =>
                          handleOpenLink("https://github.com/faithcassie")
                        }
                        whileHover={{ scale: 1.2 }}
                        className="cursor-pointer"
                      >
                        <img
                          src={githubLogo}
                          alt="github"
                          className="w-5 h-5"
                        />
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.div>
  );
}

export default TopBar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.4,
      ease: [0.3, 0, 0.6, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileLink = ({ title, href }) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-2xl lowercase pb-3 ">
      <NavLink to={href}>{title}</NavLink>
    </motion.div>
  );
};
