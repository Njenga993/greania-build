// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AboutSection from '../components/AboutSection';
import { milestonesData } from '../data/milestones.jsx'; // Import timeline data
import '../styles/about-page.css';


// Function to dynamically generate schema for milestones
const generateMilestonesSchema = (milestones) => {
  return milestones.map(milestone => ({
    "@type": "Event",
    "name": milestone.year,
    "startDate": milestone.year,
    "description": milestone.description
  }));
};

// Schema for About page
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About Greania Build - Sustainable Construction in Kenya",
  "description": "Learn about Greania Build's journey, expertise in sustainable construction, and our commitment to quality in Kenya's construction industry since 2020.",
  "url": "https://greaniabuild.co.ke/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Greania Build Ltd",
    "url": "https://greaniabuild.co.ke/",
    "foundingDate": "2020",
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
        "name": "About",
        "item": "https://greaniabuild.co.ke/about"
      }
    ]
  }
};

// Company milestones schema
const milestonesSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Greania Build Ltd",
  "foundingDate": "2020",
  "description": "Kenya's trusted construction partner specializing in sustainable building, roofing, renovations, and green building solutions.",
  "url": "https://greaniabuild.co.ke/",
  // Dynamically generate the 'milestones' array
  "milestones": generateMilestonesSchema(milestonesData)
};

function About() {
  return (
    <>
      <SEO 
        title="About Greania Build - Sustainable Construction in Kenya"
        description="Learn about Greania Build's journey, expertise in sustainable construction, and our commitment to quality in Kenya's construction industry since 2020."
        keywords="Greania Build about, construction company Kenya, sustainable building Kenya, construction history Kenya, green building Kenya"
        url="https://greaniabuild.co.ke/about"
        pageSpecificSchema={aboutPageSchema}
      />
      
      <main className="about-page">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">About</li>
            </ol>
          </div>
        </nav>

        {/* About Section */}
        <section aria-labelledby="about-heading">
          <h1 id="about-heading" className="visually-hidden">About Greania Build</h1>
          <AboutSection />
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us" aria-labelledby="why-choose-heading">
          <div className="container">
            <h2 id="why-choose-heading">Why Choose Greania Build Solutions?</h2>
            <div className="features">
              <div className="feature-card">
                <h3>Certified Experts</h3>
                <p>Our team consists of licensed professionals with years of experience in every construction discipline.</p>
              </div>
              <div className="feature-card">
                <h3>Client-Centered Approach</h3>
                <p>We prioritize your goals, budget, and satisfaction — every step of the way.</p>
              </div>
              <div className="feature-card">
                <h3>Proven Track Record</h3>
                <p>From roads to residential homes, our portfolio showcases a legacy of trust and performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline / Milestones */}
        <section className="milestones" aria-labelledby="journey-heading">
          <div className="container">
            <h2 id="journey-heading">Our Journey</h2>
            <ul className="timeline">
              {milestonesData.map((milestone, index) => (
                <li key={index}>
                  <span className="year">{milestone.year}</span>
                  <p>{milestone.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">Ready to Build Your Dream Project?</h2>
            <p>Join our growing list of satisfied clients who have experienced the Greania Build difference.</p>
            <Link to="/contact" className="cta-button">Get In Touch</Link>
          </div>
        </section>

        {/* Schema for milestones */}
        <script type="application/ld+json">
          {JSON.stringify(milestonesSchema)}
        </script>
      </main>
    </>
  );
}

export default About;