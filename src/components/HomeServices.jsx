// src/components/HomeServices.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home-services.css';
import { FaBuilding, FaHome, FaRoad, FaHammer, FaHardHat, FaTools } from 'react-icons/fa';

function HomeServices() {
  const services = [
    {
      icon: <FaBuilding size={40} />,
      title: "Commercial Construction",
      description: "From office complexes to retail spaces, we deliver high-quality commercial buildings on time and within budget.",
      highlights: ["Design-build", "Project management", "LEED certification"]
    },
    {
      icon: <FaHome size={40} />,
      title: "Residential Projects",
      description: "Beautiful, functional homes built with precision and care using quality materials and craftsmanship.",
      highlights: ["Custom homes", "Renovations", "Smart home integration"]
    },
    {
      icon: <FaRoad size={40} />,
      title: "Infrastructure Development",
      description: "Roads, bridges, and utilities that connect communities and support economic growth.",
      highlights: ["Asphalt paving", "Drainage systems", "Site preparation"]
    },
    {
      icon: <FaHammer size={40} />,
      title: "Renovation Services",
      description: "Transforming existing spaces with innovative solutions that enhance functionality and aesthetics.",
      highlights: ["Interior remodeling", "Structural upgrades", "Historic preservation"]
    },
    {
      icon: <FaHardHat size={40} />,
      title: "Project Management",
      description: "Comprehensive oversight from conception to completion ensuring quality and efficiency.",
      highlights: ["Cost control", "Scheduling", "Quality assurance"]
    },
    {
      icon: <FaTools size={40} />,
      title: "Consultation Services",
      description: "Expert advice to help you make informed decisions about your construction projects.",
      highlights: ["Feasibility studies", "Design consultation", "Budget planning"]
    }
  ];

  return (
    <section className="home-services">
      <div className="services-header">
        <span className="section-subtitle">Our Expertise</span>
        <h2 className="section-title">Comprehensive Construction Solutions</h2>
        <div className="divider"></div>
        <p className="section-description">
          Greania Build Solutions delivers end-to-end construction services with uncompromising quality and professionalism.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
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