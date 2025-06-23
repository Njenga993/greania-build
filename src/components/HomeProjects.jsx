// src/components/HomeProjects.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home-projects.css';
import { FaExpand, FaHardHat, FaBuilding, FaRoad } from 'react-icons/fa';

function HomeProjects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Nakuru Business Hub",
      category: "Commercial",
      image: "/roadwork-ahead-with-reflections-4799875.jpg",
      description: "A modern 8-story commercial complex with retail spaces, offices, and conference facilities in Nakuru CBD.",
      features: ["LEED Certified", "15,000 sqm", "6-month timeline"],
      icon: <FaBuilding />
    },
    {
      id: 2,
      title: "Lakeview Luxury Villas",
      category: "Residential",
      image: "/roadwork-ahead-with-reflections-4799875.jpg",
      description: "Exclusive gated community with 12 luxury villas featuring smart home technology and sustainable design.",
      features: ["Solar powered", "3-5 bedrooms", "Landscaped gardens"],
      icon: <FaHardHat />
    },
    {
      id: 3,
      title: "Gilgil-Nakuru Highway",
      category: "Infrastructure",
      image: "/image002.jpeg",
      description: "20km dual carriageway highway project with drainage systems and modern safety features.",
      features: ["Grade A asphalt", "LED lighting", "6 bridges"],
      icon: <FaRoad />
    },
    {
      id: 4,
      title: "Heritage Office Renovation",
      category: "Renovation",
      image: "/image001.jpeg",
      description: "Restoration and modernization of a historic building into contemporary office spaces while preserving original features.",
      features: ["Structural reinforcement", "Vintage preservation", "Modern interiors"],
      icon: <FaHardHat />
    }
  ];

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section className="home-projects">
      <div className="projects-header">
        <span className="section-subtitle">Our Portfolio</span>
        <h2 className="section-title">Recent Projects That Define Our Excellence</h2>
        <div className="divider"></div>
        <p className="section-description">
          Each project reflects our commitment to quality, innovation, and client satisfaction.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`} 
            key={project.id}
          >
            <div 
              className="project-image" 
              style={{ backgroundImage: `url(${project.image})` }}
              onClick={() => toggleExpand(project.id)}
            >
              <div className="image-overlay">
                <span className="expand-icon"><FaExpand /></span>
                <span className="project-category">
                  {project.icon} {project.category}
                </span>
              </div>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              
              <div className={`project-details ${expandedProject === project.id ? 'visible' : ''}`}>
                <p>{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <button 
                className="view-more-btn" 
                onClick={() => toggleExpand(project.id)}
              >
                {expandedProject === project.id ? 'Show Less' : 'View Details'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <Link to="/projects" className="cta-button">
          Explore Full Portfolio
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default HomeProjects;