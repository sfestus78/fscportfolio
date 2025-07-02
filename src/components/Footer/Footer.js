import React from 'react'
import './Footer.css'
import logo_light from '../../img/logo-light.png'
// import logo_dark from '../../img/logo-dark.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo_light} alt="my-logo" className="logo" />
            </div>
            <p>Let's bring your vision to life.</p>
          </div>
          
          <div className="footer-nav">
            <div className="nav-section">
              {/* <h4>Navigation</h4> */}
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button>
              <button onClick={() => document.getElementById('testimonials-section')?.scrollIntoView({ behavior: 'smooth' })}>Testimonials</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
            </div>
          </div>
          
          <div className="footer-cta">
            {/* <h4>Ready to work together?</h4> */}
            <button 
              className="cta-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              LET'S CHAT
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Festus Samuel.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
