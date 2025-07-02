import React, { useState } from 'react'
import { /*FaGithub, */FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css'
import calculatorplaceholder from '../../img/calculator.jpeg'
import todoplaceholder from '../../img/todo.jpeg'
import portfolioplaceholder from '../../img/port.png'
import hirePlaceholder from '../../img/hire.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Calculator App",
      description: "Advanced calculator with history, memory functions, and sleek animations",
      image: calculatorplaceholder,
      demoLink: "https://calculat0r.fly.dev",
      category: "web",
      tech: ["Reacts", "CSS3", "HTML5"],
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity-focused todo app with categories, priorities, and progress tracking",
      image: todoplaceholder,
      demoLink: "https://tda75.fly.dev",
      category: "web",
      tech: ["React", "Local Storage", "CSS3"],
      featured: true
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "Beautiful weather app with location-based forecasts and interactive maps",
      image: hirePlaceholder,
      demoLink: "#",
      category: "web",
      tech: ["React", "Weather API"],
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio with dark mode, smooth animations, and modern design",
      image: portfolioplaceholder,
      demoLink: "#",
      category: "design",
      tech: ["React", "CSS3", "Responsive Design"],
      featured: true
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p>A showcase of my recent work and creative solutions</p>
          
          <div className="project-filters">
            {['all', 'web', 'design'].map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image-container">
                <img
                    className="project-image"
                    src={project.image}
                    alt= {project.title}              
                />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn primary"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    {/* <button className="action-btn secondary">
                      <FaGithub /> Code
                    </button> */}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects
