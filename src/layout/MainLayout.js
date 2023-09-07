import React from "react";
import { Footer, TopBar } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <TopBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
