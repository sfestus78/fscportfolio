import React from 'react'
import './Testimonials.css'
// import fourth_profile from '../../img/p5.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Bryan Somto",
      title: "Junior Developer",
      testimonial: "Festus is an exceptional developer with a keen eye for detail. His ability to transform complex requirements into elegant solutions is remarkable. Working with him has been a game-changer for our projects.",
      rating: 5,
      // avatar: fourth_profile
    },
    {
      id: 2,
      name: "Ernest Ekoli",
      title: "UI/UX Designer",
      testimonial: "The collaboration with Festus was seamless. He brought our designs to life with pixel-perfect precision and added thoughtful interactions that enhanced the user experience beyond our expectations.",
      rating: 5,
      // avatar: "👩‍🎨"
    },
    {
      id: 3,
      name: "Emeka",
      title: "Graphics Designer",
      testimonial: "I've been working with Festus for multiple projects, and he consistently delivers outstanding results. His technical expertise combined with creative problem-solving makes him invaluable.",
      rating: 5,
      // avatar: "🎨"
    }
  ];

  return (
    <section className="testimonials" id="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h3>TESTIMONIALS</h3>
          <h2>Don't take our word for it, <br />see what our clients say</h2>
          <p>I'm honored by your feedback and it fuels my commitment to deliving the best.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                {/* <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div> */}
                <p className="testimonial-text">{testimonial.testimonial}</p>
                <div className="testimonial-author">
                  {/* <div className="author-avatar">{testimonial.avatar}</div> */}
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials
