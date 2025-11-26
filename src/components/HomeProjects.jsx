// src/components/HomeProjects.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home-projects.css';
import { FaExpand, FaHardHat, FaBuilding, FaRoad, FaHome, FaSeedling, FaTree, FaChurch, FaBolt, FaWarehouse, FaWater } from 'react-icons/fa';

function HomeProjects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Turkana Mud Houses Initiative",
      category: "Community",
      image: "./roadwork-ahead-with-reflections-4799875.jpg",
      description: "Construction of 10 sustainable mud houses for local families in Turkana County, using locally sourced materials and traditional building techniques.",
      features: ["Eco-friendly materials", "10 family homes", "Water harvesting systems"],
      icon: <FaHome />
    },
    {
      id: 2,
      title: "Turkana Seedbank Project",
      category: "Agricultural",
      image: "./roadwork-ahead-with-reflections-4799875.jpg",
      description: "Establishment of a community seedbank to preserve indigenous seeds and support food security in Turkana County.",
      features: ["Climate-controlled storage", "Training facility", "Local seed varieties"],
      icon: <FaSeedling />
    },
    {
      id: 3,
      title: "Makueni Natural Structures",
      category: "Eco-Construction",
      image: "./roadwork-ahead-with-reflections-4799875.jpg",
      description: "Building of community spaces using natural materials and sustainable techniques in Makueni County.",
      features: ["Bamboo construction", "Natural ventilation", "Rainwater collection"],
      icon: <FaTree />
    },
    {
      id: 4,
      title: "Embu Eco-Center",
      category: "Community",
      image: "./roadwork-ahead-with-reflections-4799875.jpg",
      description: "Development of a community center in Embu using natural building methods and renewable energy.",
      features: ["Solar power", "Natural materials", "Community workshops"],
      icon: <FaBuilding />
    },
    {
      id: 5,
      title: "Local Church Interior Design",
      category: "Interior",
      image: "./roadwork-ahead-with-reflections-4799875.jpg",
      description: "Interior renovation and design of a local church, creating a welcoming space for worship and community gatherings.",
      features: ["Custom woodwork", "Improved acoustics", "Accessible design"],
      icon: <FaChurch />
    },
    {
      id: 6,
      title: "Rural Electrification Project",
      category: "Infrastructure",
      image: "./roadwork-ahead-with-reflections-4799875.jpg",
      description: "Installation of electricity systems in rural communities, connecting homes and facilities to reliable power sources.",
      features: ["Solar installations", "Wiring for 50 homes", "Community training"],
      icon: <FaBolt />
    },
    {
      id: 7,
      title: "Community Storage Facility",
      category: "Agricultural",
      image: "./roadwork-ahead-with-reflections-4799875.jpg",
      description: "Construction of a modern storage facility for agricultural produce to reduce post-harvest losses.",
      features: ["Climate control", "Pest management", "Loading bays"],
      icon: <FaWarehouse />
    },
    {
      id: 8,
      title: "Water Harvesting Systems",
      category: "Infrastructure",
      image: "./roadwork-ahead-with-reflections-4799875.jpg",
      description: "Installation of water harvesting and storage systems for communities facing water scarcity.",
      features: ["Rainwater collection", "Filtration systems", "Storage tanks"],
      icon: <FaWater />
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
          From large commercial developments to community-focused initiatives, each project reflects our commitment to quality, sustainability, and client satisfaction.
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