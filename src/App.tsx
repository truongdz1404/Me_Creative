import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Commitment } from "./components/Commitment";
import { Timeline } from "./components/Timeline";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent-gold selection:text-black">
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
