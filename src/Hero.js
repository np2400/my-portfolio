import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const loadParticlesConfig = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/particlesjs-config.json`);
        const config = await response.json();
        window.particlesJS('particles-js', config);
      } catch (error) {
        console.error('Error loading particles.js config:', error);
      }
    };

    loadParticlesConfig();
  }, []);

  return (
    <section className="hero">
      <div id="particles-js"></div>
      <img src={`${process.env.PUBLIC_URL}/profile-photo.jpg`} alt="Profile" className="profile-photo" />
      <h1>Neel Parekh</h1>
      <p>Senior at University of California ,Riverside pursuing Computer Science with Business Applications.</p>
    </section>
  );
};

export default Hero;
