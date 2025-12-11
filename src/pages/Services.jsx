// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { servicesData } from '../data/services'; // Import data from new file
import '../styles/services-page.css';
import '../styles/home-services.css';

// Function to dynamically generate schema for all services
const generateServicesSchema = (services) => {
  return services.map(service => ({
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Greania Build Ltd",
      "url": "https://greaniabuild.co.ke/"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    }
  }));
};

// Schema for Services page
const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Our Services - Greania Build",
  "description": "Explore Greania Build's comprehensive construction services including mud house construction, seedbank development, natural building, and more in Kenya.",
  "url": "https://greaniabuild.co.ke/services",
  "mainEntity": {
    "@type": "Organization",
    "name": "Greania Build Ltd",
    "url": "https://greaniabuild.co.ke/",
    "sameAs": [
      "https://www.facebook.com/greaniabuild",
      "https://www.instagram.com/greaniabuild"
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://greaniabuild.co.ke/services"
      }
    ]
  },
  // Dynamically generate the 'hasPart' array for all services
  "hasPart": generateServicesSchema(servicesData)
};

function Services() {
  return (
    <>
      <SEO 
        title="Our Services - Greania Build | Sustainable Construction in Kenya"
        description="Explore Greania Build's comprehensive construction services including mud house construction, seedbank development, natural building, and more in Kenya."
        keywords="Greania Build services, mud house construction Kenya, seedbank development Kenya, natural building Kenya, sacred space renovation, rural electrification Kenya, water harvesting systems Kenya"
        url="https://greaniabuild.co.ke/services"
        pageSpecificSchema={servicesPageSchema}
      />
      
      <main className="services-page">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Services</li>
            </ol>
          </div>
        </nav>

        {/* Services Hero Section */}
        <section className="services-hero" aria-labelledby="services-hero-heading">
          <div className="servicehero-content">
            <h1 id="services-hero-heading">Our Community Services</h1>
            <p>
              Greania Build Solutions offers a comprehensive range of community-focused construction services that preserve cultural heritage while embracing sustainable practices. Discover how we can strengthen your community together.
            </p>
          </div>
        </section>

        {/* Services Introduction */}
        <section className="services-intro" aria-labelledby="services-intro-heading">
          <div className="container">
            <h2 id="services-intro-heading">Building Sustainable Communities</h2>
            <p>
              With over 5 years of experience in Kenya's construction industry, we've developed specialized services that address the unique needs of communities across the country. Our approach combines traditional building techniques with modern sustainability practices to create solutions that are both culturally appropriate and environmentally responsible.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="services-list" aria-labelledby="services-list-heading">
          <div className="container">
            <h2 id="services-list-heading" className="visually-hidden">Our Services</h2>
            <div className="services-grid">
              {servicesData.map((service, index) => (
                <article className="service-card" key={service.slug}>
                  <div className="service-icon" style={{ color: index % 2 === 0 ? '#004d40' : '#ffc107' }} aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-highlights">
                    {service.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                  <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="service-cta">
                    Inquire about this service
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="service-process" aria-labelledby="process-heading">
          <div className="container">
            <h2 id="process-heading">Our Service Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Consultation</h3>
                <p>We begin by understanding your specific needs, challenges, and goals through detailed discussions and site assessments.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Planning & Design</h3>
                <p>Our team develops customized solutions that balance functionality, sustainability, and cultural appropriateness.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Implementation</h3>
                <p>Skilled craftsmen and project managers execute the plan with attention to detail and quality standards.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Handover & Training</h3>
                <p>We ensure proper handover of the completed project and provide necessary training for maintenance and operation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">Ready to Start Your Project?</h2>
            <p>Our team is ready to discuss how we can help bring your vision to life with our sustainable construction solutions.</p>
            <Link to="/contact" className="cta-button">Get In Touch</Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;