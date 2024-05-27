import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Experience from './Experience';
import EducationSkills from './EducationSkills';
import Extracurriculars from './Extracurriculars';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <section className="about-section">
          <h2>About Me</h2>
          Software Developer with a passion for creating efficient and scalable solutions.
        </section>
      </div>
      <div id="education">
        <EducationSkills />
        
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="extracurriculars">
        <Extracurriculars />
      </div>
      <Footer />
    </div>
  );
}

export default App;
