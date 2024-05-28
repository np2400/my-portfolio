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
          <p>
          I am a senior at the University of California, Riverside, majoring in Computer Science with Business Applications. I have a keen interest in data analytics. I am currently looking for a job in the field and am a team player who enjoys collaborative environments.
          I am profiecinet in Javascript, C++ and Python.  I am passionate about leveraging my skills to solve real-world problems and contribute to innovative projects.
          </p>
          <p>
            <a href={`${process.env.PUBLIC_URL}/Neels Resume.pdf`} target="_blank" rel="noopener noreferrer">
              View my resume
            </a>
          </p>
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
