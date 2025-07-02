import React from 'react'
import './Contact.css'
import { FaLinkedin, FaDribbble, FaInstagram, FaTwitter, FaMedium, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      description: 'Professional networking',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/festus-samuel-951246179',
      className: 'linkedin',
      color: '#0077B5'
    },
    {
      name: 'Dribbble',
      description: 'Design portfolio',
      icon: <FaDribbble />,
      url: 'https://dribbble.com/festus-samuel',
      className: 'dribbble',
      color: '#EA4C89'
    },
    {
      name: 'Instagram',
      description: 'Visual storytelling',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/am_sammy',
      className: 'instagram',
      color: '#E4405F'
    },
    {
      name: 'Twitter',
      description: 'Quick thoughts & updates',
      icon: <FaTwitter />,
      url: 'https://x.com/chief_sam_',
      className: 'twitter',
      color: '#1DA1F2'
    },
    {
      name: 'Medium',
      description: 'Technical articles',
      icon: <FaMedium />,
      url: 'https://medium.com/@sfestus78',
      className: 'medium',
      color: '#00AB6C'
    },
    {
      name: 'Email',
      description: 'Send me a digital letter',
      icon: <FaEnvelope />,
      url: 'mailto:sfestus78@gmail.com',
      className: 'email',
      color: '#fbbf24'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>SOCIAL MEDIA</h3>
          <h2>Let's Be Friends</h2>
          <p>Ready to start your next project? Let's connect and create something amazing together.</p>
        </div>

        <div className="contact-grid">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`contact-card ${link.className}`}
              target={link.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              style={{ '--hover-color': link.color }}
            >
              <div className="card-content">
                <div className="card-text">
                  <h4>{link.name}</h4>
                  <p>{link.description}</p>
                </div>
                <div className="card-icon">
                  {link.icon}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact
