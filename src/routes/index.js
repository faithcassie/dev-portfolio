import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import ContactPage from "../pages/ContactPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import ResumePage from "../pages/ResumePage";
import { AnimatePresence } from "framer-motion";
import ProjectPage from "../pages/ProjectPage";
import AboutPage from "../pages/AboutPage";

export const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="projects/:id" element={<ProjectDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="resume" element={<ResumePage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
