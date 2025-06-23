// src/components/HomeTestimonials.jsx
import React, { useState } from 'react';
import '../styles/home-testimonials.css';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function HomeTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "James Mwangi",
      role: "CEO, Greenfield Properties",
      content: "Greania Build delivered our commercial complex ahead of schedule while maintaining exceptional quality standards. Their attention to detail and professional project management made the entire process seamless.",
      rating: 5,
      project: "Nakuru Business Hub"
    },
    {
      id: 2,
      name: "Susan Wanjiku",
      role: "Homeowner",
      content: "Building our family home with Greania was a wonderful experience. They listened to our needs, offered creative solutions, and the final result exceeded our expectations. We couldn't be happier!",
      rating: 5,
      project: "Lakeview Luxury Villa"
    },
    {
      id: 3,
      name: "County Engineer",
      role: "Nakuru County Government",
      content: "The Gilgil-Nakuru highway project was completed with excellent craftsmanship. Greania's team showed remarkable expertise in infrastructure development and adhered to all safety and environmental regulations.",
      rating: 4,
      project: "Gilgil-Nakuru Highway"
    },
    {
      id: 4,
      name: "David Omondi",
      role: "Director, Heritage Holdings",
      content: "The renovation of our historic building preserved its character while adding modern functionality. Greania's craftsmen demonstrated incredible skill in blending old and new construction techniques.",
      rating: 5,
      project: "Heritage Office Renovation"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="home-testimonials">
      <div className="testimonials-header">
        <span className="section-subtitle">Client Voices</span>
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="divider"></div>
        <p className="section-description">
          Don't just take our word for it - hear from those who've worked with us.
        </p>
      </div>

      <div className="testimonials-container">
        <button className="nav-button prev" onClick={prevTestimonial}>
          <FaChevronLeft />
        </button>
        
        <div className="testimonial-card">
          <div className="quote-icon">
            <FaQuoteLeft />
          </div>
          <div className="testimonial-content">
            <p className="testimonial-text">
              {testimonials[currentTestimonial].content}
            </p>
            <div className="testimonial-meta">
              <div className="client-info">
                <h3 className="client-name">{testimonials[currentTestimonial].name}</h3>
                <p className="client-role">{testimonials[currentTestimonial].role}</p>
                <p className="client-project">
                  <strong>Project:</strong> {testimonials[currentTestimonial].project}
                </p>
              </div>
              <div className="client-rating">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`star ${i < testimonials[currentTestimonial].rating ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <button className="nav-button next" onClick={nextTestimonial}>
          <FaChevronRight />
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentTestimonial ? 'active' : ''}`}
            onClick={() => setCurrentTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HomeTestimonials;