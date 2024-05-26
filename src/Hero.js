import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    fetch('/particlesjs-config.json')
      .then(response => response.json())
      .then(config => {
        window.particlesJS('particles-js', config);
      })
      .catch(error => console.error('Error loading particles.js config:', error));
  }, []);

  return (
    <section className="hero">
      <div id="particles-js"></div>
      <img src="profile-photo.jpg" alt="Profile" className="profile-photo" />
      <h1>Neel Parekh</h1>
      <p>Software Developer with a passion for creating efficient and scalable solutions.</p>
    </section>
  );
};

export default Hero;
