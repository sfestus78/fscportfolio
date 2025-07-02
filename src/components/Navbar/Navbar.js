import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo_light from '../../img/logo-light.png'
import logo_dark from '../../img/logo-dark.png'
import toggle_light from '../../img/day.png'
import toggle_dark from '../../img/night.png'


// Enhanced Navbar Component
const Navbar = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-container" onClick={() => scrollToSection('intro')}>
            <img src={theme === 'light' ? logo_light : logo_dark} alt="logo" className="logo" />
        </div>
        
        <div className="nav-menu">
          <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
          <button className="nav-link" onClick={() => scrollToSection('projects')}>Works</button>
          <button className="nav-link" onClick={() => scrollToSection('testimonials-section')}>Clients</button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>

        <div className="nav-actions">
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            LET'S CHAT
          </button>

          <img onClick={()=>{toggle_mode()}} src={theme === 'light' ? toggle_light : toggle_dark} alt="day/night" className='theme-toggle' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar
