// components/Footer.js
import React from 'react';

function Footer() {
  const footerStyles = {
    backgroundColor: '#222',
    color: '#fff',
    padding: '40px 5% 20px',
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const footerContentStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '30px',
    }
  };

  const footerLogoStyles = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '700',
    fontSize: '24px',
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '20px',
  };

  const footerColStyles = {
    flex: '1',
    maxWidth: '300px',
    '@media (max-width: 768px)': {
      maxWidth: '100%',
    }
  };

  const footerAboutTextStyles = {
    fontSize: '14px',
    lineHeight: '1.7',
    color: '#aaa',
    marginBottom: '20px',
  };

  const footerHeadingStyles = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#fff',
  };

  const linkListStyles = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const linkItemStyles = {
    marginBottom: '10px',
  };

  const linkStyles = {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#6C63FF',
    }
  };

  const copyrightStyles = {
    borderTop: '1px solid #444',
    paddingTop: '20px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#aaa',
  };

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={footerContentStyles}>
          <div style={footerColStyles}>
            <a href="#home" style={footerLogoStyles}>
              <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#6C63FF" />
                <path d="M30 30 L70 70 M70 30 L30 70" stroke="white" strokeWidth="10" />
              </svg>
              <span style={{ marginLeft: '8px' }}>Profile</span>
            </a>
            <p style={footerAboutTextStyles}>
              I build high-quality web applications that deliver exceptional user experiences. Let's collaborate to bring your vision to life.
            </p>
          </div>
          
          <div style={footerColStyles}>
            <h3 style={footerHeadingStyles}>Quick Links</h3>
            <ul style={linkListStyles}>
              <li style={linkItemStyles}><a href="#home" style={linkStyles}>Home</a></li>
              <li style={linkItemStyles}><a href="#about" style={linkStyles}>About Me</a></li>
              <li style={linkItemStyles}><a href="#portfolio" style={linkStyles}>Portfolio</a></li>
              <li style={linkItemStyles}><a href="#experience" style={linkStyles}>Experience</a></li>
              <li style={linkItemStyles}><a href="#testimonials" style={linkStyles}>Testimonials</a></li>
              <li style={linkItemStyles}><a href="#contact" style={linkStyles}>Contact</a></li>
            </ul>
          </div>
          
          <div style={footerColStyles}>
            <h3 style={footerHeadingStyles}>Services</h3>
            <ul style={linkListStyles}>
              <li style={linkItemStyles}><a href="#" style={linkStyles}>Web Development</a></li>
              <li style={linkItemStyles}><a href="#" style={linkStyles}>Mobile App Development</a></li>
              <li style={linkItemStyles}><a href="#" style={linkStyles}>UI/UX Design</a></li>
              <li style={linkItemStyles}><a href="#" style={linkStyles}>E-commerce Solutions</a></li>
              <li style={linkItemStyles}><a href="#" style={linkStyles}>CMS Development</a></li>
              <li style={linkItemStyles}><a href="#" style={linkStyles}>SEO Optimization</a></li>
            </ul>
          </div>
        </div>
        
        <div style={copyrightStyles}>
          <p>&copy; {new Date().getFullYear()} Sanele. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;