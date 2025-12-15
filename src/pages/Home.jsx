// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import HomeServices from '../components/HomeServices';
import HomeProjects from '../components/HomeProjects';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeContact from '../components/HomeContact';
import { servicesData } from '../data/services'; // Import for schema
import { projectsData } from '../data/projects'; // Import for schema
import '../styles/home.css';

// Function to generate schema for services shown on the home page
const generateHomeServicesSchema = (services) => {
  return services.slice(0, 6).map(service => ({ // Take first 6 services
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Greania Build Ltd",
      "url": "https://greaniabuild.co.ke/"
    }
  }));
};

// Function to generate schema for projects shown on the home page
const generateHomeProjectsSchema = (projects) => {
  return projects.slice(0, 6).map(project => ({ // Take first 6 projects
    "@type": "Project",
    "name": project.title,
    "description": project.description,
    "image": `https://greaniabuild.co.ke${project.image}`,
    "provider": {
      "@type": "Organization",
      "name": "Greania Build Ltd",
      "url": "https://greaniabuild.co.ke/"
    }
  }));
};

// Enhanced Home page specific schema
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Greania Build - Sustainable Construction in Kenya",
  "description": "Kenya's trusted construction partner specializing in sustainable building, roofing, renovations, and green building solutions for residential, commercial, and community projects.",
  "url": "https://greaniabuild.co.ke/",
  "mainEntity": {
    "@type": "Organization",
    "name": "Greania Build Ltd",
    "url": "https://greaniabuild.co.ke/",
    "logo": "https://greaniabuild.co.ke/assets/logo.png",
    "sameAs": [
      "https://www.facebook.com/greaniabuild",
      "https://www.instagram.com/greaniabuild"
    ],
    // Include the services and projects as part of the main entity
    "hasPart": [
      ...generateHomeServicesSchema(servicesData),
      ...generateHomeProjectsSchema(projectsData)
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://greaniabuild.co.ke/"
      }
    ]
  }
};

function Home() {
  return (
    <>
      <SEO 
        title="Greania Build – Sustainable Construction, Roofing, Renovations & Green Building Solutions in Kenya"
        description="Greania Build is Kenya's trusted construction partner specializing in sustainable building, roofing, renovations, interiors, and energy-efficient solutions. We deliver quality workmanship, eco-friendly designs, and value-driven project execution for homeowners, developers, and commercial clients."
        keywords="Greania Build, construction company Kenya, sustainable construction Kenya, roofing services Kenya, renovations Kenya, green building Kenya, house construction Kenya, interior design Kenya, real estate development Kenya, building contractor Nairobi, eco-friendly construction Kenya"
        pageSpecificSchema={homePageSchema}
      />
      
      <div className="home-page">
        {/* Visually hidden H1 for SEO and accessibility */}
        <h1 className="visually-hidden">Greania Build: Sustainable Construction in Kenya</h1>
        
        {/* Hero Section - Main content area */}
        <section aria-labelledby="hero-heading">
          <Hero />
        </section>

        {/* Quick Navigation */}
        <section className="home-nav-cards" aria-labelledby="nav-heading">
          <h2 id="nav-heading" className="visually-hidden">Quick Navigation</h2>
          <div className="cards-container">
            <Link to="/services" className="nav-card" aria-describedby="services-desc">
              <div className="card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.586l6-6z"/>
                  <path d="M12 17c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2z"/>
                </svg>
              </div>
              <h3>Our Services</h3>
              <p id="services-desc">Explore our comprehensive construction solutions</p>
            </Link>
            
            <Link to="/projects" className="nav-card" aria-describedby="projects-desc">
              <div className="card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM4 8h16v4h-6c-1.103 0-2 .897-2 2v4H4V8zm8 6v4h6v-4h-6z"/>
                </svg>
              </div>
              <h3>View Projects</h3>
              <p id="projects-desc">See our portfolio of completed works</p>
            </Link>
            
            <Link to="/about" className="nav-card" aria-describedby="about-desc">
              <div className="card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                  <path d="M11 11h2v6h-2zm0-4h2v2h-2z"/>
                </svg>
              </div>
              <h3>About Us</h3>
              <p id="about-desc">Learn about our company and values</p>
            </Link>
            
            <Link to="/contact" className="nav-card" aria-describedby="contact-desc">
              <div className="card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
                </svg>
              </div>
              <h3>Contact</h3>
              <p id="contact-desc">Get in touch with our team</p>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section aria-labelledby="about-heading">
          <h2 id="about-heading" className="visually-hidden">About Greania Build</h2>
          <AboutSection />
        </section>

        {/* Services Section */}
        <section aria-labelledby="services-heading">
          <h2 id="services-heading" className="visually-hidden">Our Services</h2>
          <HomeServices />
        </section>

        {/* Projects Section */}
        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="visually-hidden">Our Projects</h2>
          <HomeProjects />
        </section>

        {/* Testimonials Section */}
        <section aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="visually-hidden">Client Testimonials</h2>
          <HomeTestimonials />
        </section>

        {/* Contact Section */}
        <section aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="visually-hidden">Contact Us</h2>
          <HomeContact />
        </section>
      </div>
    </>
  );
}

export default Home;