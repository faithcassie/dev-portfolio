import React from "react";
import { Footer, TopBar } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <TopBar />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
