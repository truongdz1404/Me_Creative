import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Commitment } from "./components/Commitment";
import { Timeline } from "./components/Timeline";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";

export default function App() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/project/");

  if (isProjectDetail) {
    return (
      <div className="min-h-screen bg-white text-gray-900 selection:bg-accent-gold selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-accent-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Commitment />
        <Timeline />
        <Team />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

