import React from 'react';
import '../Hero.css'; // Import the CSS file

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h3 className="intro-text">Hey, I'm Sanele</h3>
        <h1 className="title">
          Full Stack <span className="highlight">Developer</span>
        </h1>
        <p className="description">
          I specialize in building modern, scalable web applications with a focus on delivering exceptional user experiences. Let's create something amazing together!
        </p>
        <a href="#contact" className="button">Get In Touch</a>
      </div>
      <div className="hero-image">
        <div className="image-container">
          <img 
            src="/sanele.png" 
            alt="Sanele - Full Stack Developer" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;