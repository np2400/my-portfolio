import React from 'react';
import './Footer.css'; // Add your CSS styles here

const Footer = () => {
  return (
    <footer>
      <p>
        Contact: 
        <a href="mailto:neelparekh2000@gmail.com" target="_blank" rel="noopener noreferrer">neelparekh2000@gmail.com</a>
        {' | '}
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {' | '}
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </footer>
  );
};

export default Footer;
