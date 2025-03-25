// components/About.js
import React from 'react';
import '../About.css'; // We'll create this CSS file for the responsive styles

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="heading">About Me</h2>
        <p className="subheading">Get to know me and my work philosophy</p>
        
        <div className="content">
          <div className="image-container">
            <img 
              src="/hero.png"
              alt="About Sanele" 
              className="about-image"
            />
          </div>
          
          <div className="text-container">
            <p className="paragraph">
              Hello! I'm Sanele, a passionate Full Stack Developer with expertise in creating responsive, user-friendly web applications. I have over 9 months of experience working with various technologies including React, Node.js, MongoDB, react Native and more.
            </p>
            <p className="paragraph">
              My approach to development focuses on writing clean, maintainable code while keeping user experience at the forefront. I enjoy solving complex problems and turning ideas into reality through code.
            </p>
            <p className="paragraph">
              I believe in continuous learning and staying updated with the latest industry trends and best practices. This helps me deliver cutting-edge solutions that meet and exceed client expectations.
            </p>
            
            <div className="stats-section">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">months Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Awards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;