import ProjectDetail from "../pages/ProjectDetail";
const { AnimatePresence } = require("framer-motion");
const { useLocation, Routes, Route } = require("react-router-dom");
const { default: MainLayout } = require("../layout/MainLayout");
const { default: HomePage } = require("../pages/HomePage");
const { Contact } = require("../components");

export const Router = () => {
  const location = useLocation;
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
