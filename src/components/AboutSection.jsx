// src/components/AboutSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about-section.css';

// ✅ Import images locally (reliable everywhere)
import image001 from '/image001.jpeg';
import image002 from '/western.jpeg';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="section-header">
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title">Building With Integrity Since 2020</h2>
            <div className="divider"></div>
          </div>
          
          <div className="about-text">
            <p>
              Greania Build Solutions is a premier construction company dedicated to excellence in 
              every project we undertake. With over 5 years of experience, we've built a reputation 
              for quality craftsmanship, innovative solutions, and unwavering commitment to our clients.
            </p>
            <p>
              Our team of certified professionals brings expertise across all construction disciplines, 
              ensuring your project is completed to the highest standards, on time and within budget.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 15h-4.342L12 19.243 9.342 17H5V4h14v13z"/>
                  <path d="M12 14.5c1.933 0 3.5-1.567 3.5-3.5S13.933 7.5 12 7.5 8.5 9.067 8.5 11s1.567 3.5 3.5 3.5zm0-5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5z"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>To redefine construction excellence through innovation and sustainable practices</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                  <path d="M13 7h-2v6h6v-2h-4z"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>Deliver exceptional construction services that exceed client expectations</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 16v-2h2v2h-2zm1.976-12.376-.373.616c-.378.627-.914 1.512-1.025 2.76h-1.578c.148-1.667.797-2.91 1.509-3.876.295-.4.635-.785 1-1.15.365.365.705.75 1 1.15.712.966 1.361 2.209 1.509 3.876h-1.578c-.111-1.248-.647-2.133-1.025-2.76l-.373-.616c-.173.285-.32.558-.44.82-.287.626-.436 1.339-.436 2.03v1h-1v-1c0-1.226.293-2.368.812-3.352.506-.958 1.188-1.69 1.188-1.69s.682.732 1.188 1.69c.519.984.812 2.126.812 3.352v3h-1v-1h-1v2h4v-1h1v1h1v-3c0-1.929-.728-3.755-2.024-5.376z"/>
                </svg>
              </div>
              <h3>Our Values</h3>
              <p>Quality, Integrity, Innovation, and Client Satisfaction</p>
            </div>
          </div>
          
          <Link to="/about" className="about-button">
            Learn More About Us
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        
        <div className="about-image">

          {/* First image */}
          <img 
            src={image001}
            alt="Greania Build Solutions Team"
            loading="lazy"
          />

          <div className="experience-badge">
            <span>5+</span>
            <small>Years Experience</small>
          </div>

          {/* Second image */}
          <img 
            src={image002}
            alt="Greania Build Solutions Team Working"
            loading="lazy"
          />
          
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
