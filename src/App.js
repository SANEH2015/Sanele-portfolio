// App.js - Main component
import React from 'react';
import Navigation from '../src/components/Navigation';
import Hero from '../src/components/Hero.js';
import About from '../src/components/About';
import Portfolio from '../src/components/Portfolio';
import Experience from '../src/components/Experience';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Testimonial from './components/Certificate.js'
import './App.css';

function App() {
  return (
    <div style={{ 
      fontFamily: "'Poppins', sans-serif",
      color: '#333333',
      lineHeight: 1.7,
    }}>
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Testimonial/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
