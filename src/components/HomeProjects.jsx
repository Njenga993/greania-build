// src/components/HomeProjects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects.jsx'; // Import data from the new file
import '../styles/home-projects.css';
import '../styles/projects-page.css';

function HomeProjects() {
  return (
    <section className="home-projects">
      <div className="projects-header">
        <span className="section-subtitle">Our Portfolio</span>
        <h2 className="section-title"> Recent Projects That Define Our Excellence</h2>
        <div className="divider"></div>
        <p className="section-description">
          From large commercial developments to community-focused initiatives, each project reflects our commitment to quality, sustainability, and client satisfaction.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <article className="project-card" key={project.id}>
            <Link to={`/projects/${project.slug}`} className="project-image-link">
              <figure className="project-image">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
                <figcaption className="image-overlay">
                  <span className="project-category">
                    {project.icon} {project.category}
                  </span>
                </figcaption>
              </figure>
            </Link>
            
            <div className="project-content">
              <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
              <p>{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link to={`/projects/${project.slug}`} className="view-more-btn">
                View Project Details
              </Link>
            </div>
          </article>
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