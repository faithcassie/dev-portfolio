import React from "react";
import linkdedLogo from "../assets/images/linkedin-icon.svg";
import githubLogo from "../assets/images/github-icon.svg";

const Footer = () => {
  const handleOpenLink = (link) => {
    window.open(link, "_blank");
  };
  const currentYear = new Date().getFullYear();
  return (
    <div className=" flex flex-col md:flex-row text-sm items-center md:justify-between w-[80%] mx-auto h-15 mb-2 ">
      <div>Designed and developed by Faith Nguyen.</div>
      <div className="flex w-fit my-3 md:my-0">
        <a
          onClick={() =>
            handleOpenLink("https://www.linkedin.com/in/faithnguyentech/")
          }
          className="cursor-pointer "
        >
          <img src={linkdedLogo} alt="linkdedin" className="w-4 h-4 mr-4" />
        </a>
        <a
          onClick={() => handleOpenLink("https://github.com/faithcassie")}
          className="cursor-pointer "
        >
          <img src={githubLogo} alt="github" className="w-4 h-4" />
        </a>
      </div>
      <p> &copy; {currentYear} Faith Nguyen</p>
    </div>
  );
};

export default Footer;
