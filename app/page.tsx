"use client";

import CustomCursor from "./components/CustomCursor";
import ParticleField from "./components/ParticleField";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-pink-500/30">
      <CustomCursor />
      <ParticleField />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
