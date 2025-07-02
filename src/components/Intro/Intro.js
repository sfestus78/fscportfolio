import React, { useMemo, useState, useEffect } from 'react'
import './Intro.css'
import fourth_profile from '../../img/p5.png';

const Intro = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = useMemo(() => ['Software Developer', 'Frontend Engineer', 'React'], []);

  useEffect(() => {
    const typeWriter = () => {
      const currentText = roles[currentRole];
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index <= currentText.length) {
          setDisplayText(currentText.substring(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }, 2000);
        }
      }, 100);
    };

    typeWriter();
  }, [currentRole, roles]);

  return (
    <section className="intro" id="intro">
      <div className="intro-container">
        <div className="intro-content">
          <div className="intro-animation">
            <span className="hello">Hello, I'm</span>
            <h1 className="name">
              Festus <span className="highlight">Samuel</span>
            </h1>
            <div className="role-container">
              <span className="role-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="intro-description">
              I'm committed to writing clean, efficient and maintainable code with strong focus on delivering high quality and reliable solutions.
            </p>
            <div className="intro-actions">
              <button className="cta-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Hire Me
              </button>
              <button className="cta-secondary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Work
              </button>
            </div>
          </div>
        </div>
        
        <div className="intro-visual">
          <div className="profile-container">
            <div className="profile-image">
              <div className="profile-bg">
                <img 
                src={fourth_profile} 
                alt="My-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro
