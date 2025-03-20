// components/Hero.js
import React from 'react';

function Hero() {
  const heroSectionStyles = {
    display: 'flex',
    padding: '120px 5%',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      padding: '100px 5% 60px',
      textAlign: 'center',
    }
  };

  const heroContentStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: '40px',
    '@media (max-width: 768px)': {
      paddingRight: 0,
      order: 2,
      marginTop: '30px',
    }
  };

  const heroImageStyles = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      order: 1,
      marginBottom: '30px',
    }
  };

  const introTextStyles = {
    fontSize: '18px',
    color: '#6C63FF',
    marginBottom: '15px',
    fontWeight: '500',
    letterSpacing: '1px',
  };

  const titleStyles = {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#222',
    margin: '0 0 20px 0',
    lineHeight: '1.2',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    }
  };

  const highlightStyles = {
    color: '#6C63FF',
  };

  const descriptionStyles = {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '30px',
    maxWidth: '600px',
    '@media (max-width: 768px)': {
      fontSize: '16px',
      margin: '0 auto 30px',
    }
  };

  const buttonStyles = {
    backgroundColor: '#6C63FF',
    color: 'white',
    border: 'none',
    padding: '15px 35px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    width: 'fit-content',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(108, 99, 255, 0.3)',
    ':hover': {
      backgroundColor: '#5a52d5',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 15px rgba(108, 99, 255, 0.4)',
    },
    '@media (max-width: 768px)': {
      margin: '0 auto',
    }
  };

  const imageContainerStyles = {
    position: 'relative',
    backgroundColor: '#B7E1E4',
    borderRadius: '20px',
    padding: '20px',
    maxWidth: '90%',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 768px)': {
      maxWidth: '80%',
    }
  };

  return (
    <section id="home" style={heroSectionStyles}>
      <div style={heroContentStyles}>
        <h3 style={introTextStyles}>Hey, I'm Sanele</h3>
        <h1 style={titleStyles}>
          Full Stack <span style={highlightStyles}>Developer</span>
        </h1>
        <p style={descriptionStyles}>
          I specialize in building modern, scalable web applications with a focus on delivering exceptional user experiences. Let's create something amazing together!
        </p>
        <a href="#contact" style={buttonStyles}>Get In Touch</a>
      </div>
      <div style={heroImageStyles}>
        <div style={imageContainerStyles}>
          {/* Replace with actual image */}
          <div style={{
            // width: '100%',
            // height: 'auto',
            // aspectRatio: '3/4',
            // borderRadius: '12px',
            // overflow: 'hidden',
            // backgroundColor: '#B7E1E4',
          }}>
           <img 
  src="/sanele.png" 
  alt="Sanele - Full Stack Developer" 
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }}
/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;