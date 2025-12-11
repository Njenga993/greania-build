// src/pages/ProjectsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HomeProjects from '../components/HomeProjects';
import HomeTestimonials from '../components/HomeTestimonials';
import { projectsData } from '../data/projects.jsx'; // Import project data
import '../styles/home-projects.css';
import '../styles/projects-page.css';
import '../styles/home-testimonials.css';

// Function to dynamically generate schema for projects
const generateProjectsSchema = (projects) => {
  return projects.map(project => ({
    "@type": "Project",
    "name": project.title,
    "description": project.description,
    "image": `https://greaniabuild.co.ke${project.image}`, // Ensure full URL
    "url": `https://greaniabuild.co.ke/projects/${project.slug}`,
    "provider": {
      "@type": "Organization",
      "name": "Greania Build Ltd",
      "url": "https://greaniabuild.co.ke/"
    },
    "category": project.category
  }));
};

// Schema for Projects page
const projectsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Our Projects - Greania Build",
  "description": "Explore Greania Build's portfolio of sustainable construction projects across Kenya, including mud houses, seedbanks, community centers, and more.",
  "url": "https://greaniabuild.co.ke/projects",
  "mainEntity": {
    "@type": "Organization",
    "name": "Greania Build Ltd",
    "url": "https://greaniabuild.co.ke/"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://greaniabuild.co.ke/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://greaniabuild.co.ke/projects"
      }
    ]
  },
  // Dynamically generate the 'hasPart' array
  "hasPart": generateProjectsSchema(projectsData)
};

function ProjectsPage() {
  return (
    <>
      <SEO 
        title="Our Projects - Greania Build | Sustainable Construction Portfolio in Kenya"
        description="Explore Greania Build's portfolio of sustainable construction projects across Kenya. See our commitment to quality, innovation, and community development."
        keywords="Greania Build projects, construction portfolio Kenya, sustainable building projects, mud house projects, seedbank construction Kenya"
        url="https://greaniabuild.co.ke/projects"
        pageSpecificSchema={projectsPageSchema}
      />
      
      <main className="projects-page">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Projects</li>
            </ol>
          </div>
        </nav>

        {/* Projects Hero Section */}
        <section className="projects-hero" aria-labelledby="projects-hero-heading">
          <div className="container">
            <h1 id="projects-hero-heading">Our Portfolio of Sustainable Projects</h1>
            <p>
              Since 2020, Greania Build has had the privilege of working on diverse projects across Kenya that showcase our commitment to sustainability, quality craftsmanship, and community development. Browse our portfolio to see how we're transforming spaces and lives.
            </p>
          </div>
        </section>

        {/* Projects List Section */}
        <section className="projects-list-section" aria-labelledby="projects-list-heading">
          <div className="container">
            <h2 id="projects-list-heading" className="visually-hidden">Featured Projects</h2>
            <HomeProjects />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonial-section" aria-labelledby="testimonials-heading">
          <div className="container">
            <h2 id="testimonials-heading">What Our Clients Say</h2>
            <div className="testimonial-break">
              <HomeTestimonials />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">Have a Project in Mind?</h2>
            <p>We're always excited to take on new challenges and bring sustainable construction solutions to life. Let's discuss how we can work together on your next project.</p>
            <Link to="/contact" className="cta-button">Start Your Project</Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProjectsPage;