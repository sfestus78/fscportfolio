import React, { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  
  // Initialize theme default to light
  useEffect(() => {
    const savedTheme = 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Intro />
      <About />
      <Projects />  
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;