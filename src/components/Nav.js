import React from "react";
import menuIcon from "../assets/images/menu-icon.svg";

function Nav() {
  return (
    <nav className="flex items-center">
      <a
        href="#about"
        className="hidden lg:block mr-[16px] hover:text-[var(--primary)] hover:scale-105 hover:font-medium"
      >
        About
      </a>
      <a
        href="#projects"
        className="hidden lg:block mr-[16px] hover:text-[var(--primary)] hover:scale-105 hover:font-medium"
      >
        Projects
      </a>
      <a className="hidden lg:block mr-[16px] hover:text-[var(--primary)] hover:scale-105 hover:font-medium">
        Resume
      </a>
      <button>Get in touch</button>
      <div className="block lg:hidden pl-4">
        <img src={menuIcon} sizes="20px" />
      </div>
    </nav>
  );
}

export default Nav;
