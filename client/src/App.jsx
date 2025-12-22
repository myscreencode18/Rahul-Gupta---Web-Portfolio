import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ProjectsGrid from "./pages/ProjectsGrid";
import TestCaseStudy from "./pages/TestCaseStudy";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/projects");

  return (
    <div className="bg-[#0A192F] text-white min-h-screen font-body">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skill />
              <ProjectsGrid />
              <Testimonials />
              <Contact />
            </>
          }
        />

        <Route path="/projects/:slug" element={<TestCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
