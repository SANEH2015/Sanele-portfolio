import React, { useState, useEffect } from 'react';
import '../About.css';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="logo">
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#6C63FF" />
          <path d="M30 30 L70 70 M70 30 L30 70" stroke="white" strokeWidth="10" />
        </svg>
        <span>profile</span>
      </a>
      
      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className={`nav-container ${menuOpen ? 'menu-open' : ''}`}>
        <div className="nav-items">
          <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
          <a href="#portfolio" className="nav-link" onClick={toggleMenu}>Portfolio</a>
          <a href="#about" className="nav-link" onClick={toggleMenu}>About Me</a>
          <a href="#Certificate" className="nav-link" onClick={toggleMenu}>Certificate</a>
        </div>
        <a href="#contact" className="contact-button" onClick={toggleMenu}>Contact Me</a>
      </div>
    </nav>
  );
}

export default Navigation;