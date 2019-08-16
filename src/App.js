import React from "react";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
