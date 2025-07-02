import React, { useState }  from 'react'
import './About.css'
import {FaCode, FaPalette, FaMobile, FaCss3, FaReact,FaJs,FaFigma} from 'react-icons/fa';
import fourth_profile from '../../img/p5.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isExpanded, setIsExpanded] = useState(false);

  const skills = [
    { name: 'React.js', level: 90, icon: <FaReact /> },
    { name: 'JavaScript', level: 85, icon: <FaJs /> },
    { name: 'CSS', level: 88, icon: <FaCss3 /> },
    { name: 'UI/UX', level: 80, icon: <FaFigma /> }
  ];

  const services = [
    { icon: <FaCode />, title: 'Frontend Development', desc: 'Modern React applications with stunning UI' },
    { icon: <FaPalette />, title: 'UI/UX Design', desc: 'Beautiful, user-centered design solutions' },
    { icon: <FaMobile />, title: 'Responsive Design', desc: 'Mobile-first, cross-platform experiences' }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-nav">
          {['about', 'services', 'skills'].map((tab) => (
            <button
              key={tab}
              className={`about-nav-link ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="about-img-bg"><img src={fourth_profile} alt="My-photo"  /></div>
            </div>
          </div>

          <div className="about-text">
            {activeTab === 'about' && (
              <div className="tab-content">
                <h2>Why hire me for your next project?</h2>
                <div className={`description ${isExpanded ? 'expanded' : ''}`}>
                  <p>
                    Meet a <strong>passionate and results-driven Software Developer</strong> who transforms 
                    complex challenges into elegant digital masterpieces. I specialize in crafting responsive, 
                    user-friendly web applications using modern tools like React, JavaScript, and CSS.
                  </p>
                  {isExpanded && (
                    <p className="expanded-text">
                      Beyond code, I believe in continuous learning, problem-solving, and delivering clean, 
                      efficient solutions that improve user experience. Whether it's collaborating on a team 
                      or working independently, I bring creativity, focus, and a strong desire to grow with 
                      every project I take on. Let's build something <strong>exceptional</strong>!
                    </p>
                  )}
                </div>
                <button className="expand-btn" onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="tab-content">
                <h2>My Services</h2>
                <div className="services-grid">
                  {services.map((service, index) => (
                    <div key={index} className="service-card">
                      <div className="service-icon">{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="tab-content">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
