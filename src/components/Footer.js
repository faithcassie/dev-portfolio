import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" flex justify-center h-5 mb-5">
      <p> &copy; {currentYear} Faith Nguyen</p>
    </div>
  );
};

export default Footer;
