import React from 'react';
import '../Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <a href="#home" className="footer-logo">
              <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#6C63FF" />
                <path d="M30 30 L70 70 M70 30 L30 70" stroke="white" strokeWidth="10" />
              </svg>
              <span>Profile</span>
            </a>
            <p className="footer-about-text">
              I build high-quality web applications that deliver exceptional user experiences. Let's collaborate to bring your vision to life.
            </p>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="link-list">
              <li className="link-item"><a href="#home" className="link">Home</a></li>
              <li className="link-item"><a href="#about" className="link">About Me</a></li>
              <li className="link-item"><a href="#portfolio" className="link">Portfolio</a></li>
              <li className="link-item"><a href="#experience" className="link">Experience</a></li>
              <li className="link-item"><a href="#Certificate" className="link">Certificate</a></li>
              <li className="link-item"><a href="#contact" className="link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Services</h3>
            <ul className="link-list">
              <li className="link-item"><a href="#" className="link">Web Development</a></li>
              <li className="link-item"><a href="#" className="link">Mobile App Development</a></li>
              <li className="link-item"><a href="#" className="link">UI/UX Design</a></li>
           
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Sanele. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;