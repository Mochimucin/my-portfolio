import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default App
