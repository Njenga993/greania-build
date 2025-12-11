// src/components/HomeServices.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services'; // Import data from new file
import '../styles/home-services.css';
import '../styles/services-page.css';

function HomeServices() {
  return (
    <section className="home-services">
      <div className="services-header">
        <span className="section-subtitle">Our Expertise</span>
        <h2 className="section-title">Community-Focused Construction Services</h2>
        <div className="divider"></div>
        <p className="section-description">
          From traditional building techniques to modern sustainable solutions, we deliver services that strengthen communities and preserve cultural heritage.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={service.slug}>
            <div className="service-icon" style={{ color: index % 2 === 0 ? '#004d40' : '#ffc107' }}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-highlights">
              {service.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <Link to="/services" className="cta-button">
          View All Services
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default HomeServices;