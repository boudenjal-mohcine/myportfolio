import React from "react";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Social from "./components/Social";
//import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Social />
      <Contact />
    </main>
  );
}
