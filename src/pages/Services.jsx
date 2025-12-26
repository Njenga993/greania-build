// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO, { ServicePageSEO } from '../components/SEO';
import { servicesData } from '../data/services';
import '../styles/services-page.css';
import '../styles/home-services.css';

// Function to generate comprehensive service schemas
const generateServicesSchema = (services) => {
  return services.map((service, index) => ({
    "@type": "Service",
    "@id": `https://greaniabuild.co.ke/services#${service.slug || service.title.toLowerCase().replace(/\s+/g, '-')}`,
    "name": service.title,
    "description": service.description,
    "url": `https://greaniabuild.co.ke/services/${service.slug || service.title.toLowerCase().replace(/\s+/g, '-')}`,
    "provider": {
      "@type": "Organization",
      "name": "Greania Build Ltd",
      "url": "https://greaniabuild.co.ke/"
    },
    "serviceType": service.category || "Construction Service",
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.highlights?.map(highlight => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": highlight
        }
      })) || []
    }
  }));
};

// Function to generate FAQ schema for services page
const generateServicesFAQ = (services) => {
  const faqs = [
    {
      "@type": "Question",
      "name": "What construction services does Greania Build offer in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Greania Build offers comprehensive construction services in Kenya including sustainable building, roofing installation, home renovations, interior design, commercial construction, green building solutions, mud house construction, seedbank development, and natural building techniques."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas in Kenya do you provide construction services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Nairobi, Kiambu, Kajiado, Machakos, Nakuru, and throughout Kenya. Our mobile construction teams ensure quality services across multiple locations."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer sustainable/green construction services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Sustainable construction is our specialty. We provide eco-friendly building solutions, green roofing, energy-efficient designs, and natural building techniques across Kenya."
      }
    }
  ];

  // Add service-specific FAQs
  services.slice(0, 4).forEach(service => {
    faqs.push({
      "@type": "Question",
      "name": `What does ${service.title} involve in Kenya?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": service.description
      }
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs
  };
};

// Main Services page schema
const servicesPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://greaniabuild.co.ke/services#webpage",
    "name": "Construction Services in Kenya | Greania Build - Sustainable Building & Roofing",
    "description": "Comprehensive construction services in Kenya including sustainable building, roofing, renovations, interior design & green construction. Serving Nairobi, Kiambu, Kajiado & nationwide.",
    "url": "https://greaniabuild.co.ke/services",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://greaniabuild.co.ke/#website"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://greaniabuild.co.ke/assets/services-hero.jpg",
      "width": "1200",
      "height": "630"
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
          "name": "Construction Services in Kenya",
          "item": "https://greaniabuild.co.ke/services"
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Construction Services Offered by Greania Build in Kenya",
    "description": "Complete list of construction, roofing, renovation and building services available in Nairobi and throughout Kenya",
    "numberOfItems": servicesData.length,
    "itemListElement": generateServicesSchema(servicesData)
  }
];

// Service areas for Kenya
const serviceAreas = [
  "Nairobi", "Kiambu", "Kajiado", "Machakos", "Nakuru", 
  "Westlands", "Karen", "Runda", "Thika", "Kitengela"
];

function Services() {
  // Preload service images
  const preloadImages = [
    {
      src: "https://greaniabuild.co.ke/assets/services-hero.jpg",
      srcSet: "https://greaniabuild.co.ke/assets/services-hero.jpg 1200w, https://greaniabuild.co.ke/assets/services-hero-mobile.jpg 600w",
      sizes: "(max-width: 768px) 100vw, 1200px"
    }
  ];

  return (
    <>
      <SEO 
        title="Construction Services in Kenya | Greania Build - Sustainable Building, Roofing & Renovations"
        description="Greania Build: Comprehensive construction services in Kenya including sustainable building, roofing installation, home renovations, interior design & green construction. Serving Nairobi, Kiambu, Kajiado & nationwide. Get free quote."
        keywords="construction services Kenya, roofing services Nairobi, building contractor Kenya, renovation services Kenya, interior design Nairobi, sustainable construction Kenya, green building Kenya, mud house construction Kenya, seedbank development Kenya, natural building Kenya, construction company services, building services Kenya"
        url="https://greaniabuild.co.ke/services"
        image="https://greaniabuild.co.ke/assets/og-services.jpg"
        pageSpecificSchema={servicesPageSchema}
        preloadImages={preloadImages}
        serviceAreas={serviceAreas}
        serviceType="Construction Services"
        geo={{
          latitude: "-1.2921",
          longitude: "36.8219",
          placename: "Nairobi, Kenya"
        }}
      />
      
      <main className="services-page" itemScope itemType="https://schema.org/Service">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" aria-current="page">
                <span itemProp="name">Construction Services in Kenya</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* SEO Header */}
        <header className="services-seo-header">
          <div className="container">
            <h1 itemProp="name" className="services-main-heading">
              Construction Services in Kenya by <span className="brand-name">Greania Build</span>
            </h1>
            <p className="services-subtitle" itemProp="description">
              Comprehensive <strong>building, roofing, renovation, and green construction solutions</strong> serving 
              <strong> Nairobi, Kiambu, Kajiado, Machakos, Nakuru</strong> and throughout Kenya. 
              <strong> 4.8★ rated</strong> with <strong>200+ successful projects</strong> since 2020.
            </p>
            <div className="services-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🏗️</span>
                <span className="highlight-text">Sustainable Construction</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🏠</span>
                <span className="highlight-text">Roofing & Renovations</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🌱</span>
                <span className="highlight-text">Green Building Solutions</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📞</span>
                <span className="highlight-text">Free Consultation</span>
              </div>
            </div>
          </div>
        </header>

        {/* Service Areas Section */}
        <section className="service-areas-section" aria-labelledby="areas-heading">
          <div className="container">
            <h2 id="areas-heading" className="section-heading">
              Our Service Areas in Kenya
            </h2>
            <p className="section-subtitle">
              Providing professional construction services across multiple locations in Kenya
            </p>
            <div className="areas-grid">
              <div className="area-group">
                <h3>Nairobi County</h3>
                <ul>
                  <li>Westlands</li>
                  <li>Karen</li>
                  <li>Runda</li>
                  <li>Lavington</li>
                  <li>Kileleshwa</li>
                  <li>Kilimani</li>
                </ul>
              </div>
              <div className="area-group">
                <h3>Kiambu County</h3>
                <ul>
                  <li>Thika</li>
                  <li>Ruaka</li>
                  <li>Limuru</li>
                  <li>Kikuyu</li>
                  <li>Kiambu Town</li>
                </ul>
              </div>
              <div className="area-group">
                <h3>Kajiado County</h3>
                <ul>
                  <li>Kitengela</li>
                  <li>Ongata Rongai</li>
                  <li>Kiserian</li>
                  <li>Ngong</li>
                </ul>
              </div>
              <div className="area-group">
                <h3>Other Areas</h3>
                <ul>
                  <li>Machakos</li>
                  <li>Nakuru</li>
                  <li>Nationwide Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Introduction */}
        <section className="services-intro" aria-labelledby="services-intro-heading">
          <div className="container">
            <h2 id="services-intro-heading" className="section-heading">
              Building Sustainable Kenya Since 2020
            </h2>
            <p className="intro-text">
              With <strong>5+ years of experience</strong> in Kenya's construction industry, we've developed specialized 
              services that address the unique needs of residential and commercial clients across the country. 
              Our approach combines <strong>traditional building techniques</strong> with <strong>modern sustainability practices</strong> 
              to create solutions that are both durable and environmentally responsible.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.8★</span>
                <span className="stat-label">Client Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Counties Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">On-Time Completion</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services List with Enhanced Schema */}
        <section className="services-list" aria-labelledby="services-list-heading" itemScope itemType="https://schema.org/ItemList">
          <div className="container">
            <header className="section-header">
              <h2 id="services-list-heading" className="section-heading">
               <span className="brand-name">  Our Comprehensive Construction Services in Kenya </span>
              </h2>
              <p className="section-subtitle">
                Professional building solutions for residential, commercial, and community projects
              </p>
            </header>
            
            <div className="services-grid">
              {servicesData.map((service, index) => (
                <article 
                  className="service-card" 
                  key={service.slug}
                  itemScope 
                  itemType="https://schema.org/Service"
                  itemProp="itemListElement"
                >
                  <div 
                    className="service-icon" 
                    style={{ 
                      backgroundColor: index % 2 === 0 ? '#004d40' : '#ffc107',
                      color: index % 2 === 0 ? '#fff' : '#002f34'
                    }} 
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h3 itemProp="name">{service.title}</h3>
                  <p itemProp="description">{service.description}</p>
                  
                  {service.highlights && (
                    <ul className="service-highlights" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
                      {service.highlights.map((highlight, i) => (
                        <li key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                          <span itemProp="itemOffered" itemScope itemType="https://schema.org/Service">
                            <span itemProp="name">{highlight}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="service-meta">
                    <span className="meta-item">
                      <span className="meta-icon">📍</span>
                      <span>Nairobi & Nationwide</span>
                    </span>
                    <span className="meta-item">
                      <span className="meta-icon">💰</span>
                      <span>Free Quote</span>
                    </span>
                  </div>
                  
                  <Link 
                    to={`/contact?service=${encodeURIComponent(service.title)}&source=services`} 
                    className="service-cta"
                    itemProp="url"
                  >
                    Get Free Quote for {service.title}
                    <span className="cta-arrow">→</span>
                  </Link>
                  <meta itemProp="serviceType" content={service.title} />
                  <meta itemProp="provider" content="Greania Build Ltd" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="service-categories" aria-labelledby="categories-heading">
          <div className="container">
            <h2 id="categories-heading" className="section-heading">
              Construction Service Categories
            </h2>
            <div className="categories-grid">
              <div className="category-card">
                <h3>Residential Construction</h3>
                <ul>
                  <li>House Construction & Building</li>
                  <li>Home Renovations & Extensions</li>
                  <li>Interior Design & Finishing</li>
                  <li>Roofing Installation & Repair</li>
                  <li>Kitchen & Bathroom Remodels</li>
                </ul>
              </div>
              <div className="category-card">
                <h3>Commercial Construction</h3>
                <ul>
                  <li>Office Building Construction</li>
                  <li>Retail Space Development</li>
                  <li>Commercial Renovations</li>
                  <li>Institutional Buildings</li>
                  <li>Warehouse Construction</li>
                </ul>
              </div>
              <div className="category-card">
                <h3>Specialized Services</h3>
                <ul>
                  <li>Sustainable/Green Building</li>
                  <li>Mud House & Natural Building</li>
                  <li>Water Harvesting Systems</li>
                  <li>Solar Installation Integration</li>
                  <li>Custom Construction Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="service-process" aria-labelledby="process-heading" itemScope itemType="https://schema.org/Action">
          <div className="container">
            <h2 id="process-heading" className="section-heading" itemProp="name">
              Our Construction Process in Kenya
            </h2>
            <p className="section-subtitle">
              Transparent, efficient process from consultation to completion
            </p>
            <div className="process-steps">
              <div className="step" itemProp="object" itemScope itemType="https://schema.org/Step">
                <div className="step-number">1</div>
                <h3 itemProp="name">Free Consultation</h3>
                <p itemProp="description">
                  We begin by understanding your specific needs, budget, and goals through detailed discussions and site assessments in Nairobi or your location.
                </p>
              </div>
              <div className="step" itemProp="object" itemScope itemType="https://schema.org/Step">
                <div className="step-number">2</div>
                <h3 itemProp="name">Planning & Design</h3>
                <p itemProp="description">
                  Our team develops customized construction solutions that balance functionality, sustainability, and cultural appropriateness for Kenyan contexts.
                </p>
              </div>
              <div className="step" itemProp="object" itemScope itemType="https://schema.org/Step">
                <div className="step-number">3</div>
                <h3 itemProp="name">Professional Implementation</h3>
                <p itemProp="description">
                  Certified craftsmen and project managers execute the plan with attention to detail, quality standards, and minimal disruption.
                </p>
              </div>
              <div className="step" itemProp="object" itemScope itemType="https://schema.org/Step">
                <div className="step-number">4</div>
                <h3 itemProp="name">Completion & Support</h3>
                <p itemProp="description">
                  We ensure proper handover of the completed project and provide necessary training for maintenance and operation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="services-faq" aria-labelledby="faq-heading">
          <div className="container">
            <h2 id="faq-heading" className="section-heading">
              Frequently Asked Questions
            </h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What areas in Kenya do you serve?</h3>
                <p>We serve Nairobi, Kiambu, Kajiado, Machakos, Nakuru, and throughout Kenya with our construction services.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer free consultations?</h3>
                <p>Yes, we offer free consultations for all construction projects. Contact us to schedule your free site assessment.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a typical construction project take?</h3>
                <p>Timelines vary: renovations take 2-6 weeks, new construction 3-12 months. We provide detailed timelines during consultation.</p>
              </div>
              <div className="faq-item">
                <h3>Are your workers certified and insured?</h3>
                <p>Yes, all our construction workers are certified professionals, fully insured, and undergo regular safety training.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading" className="section-heading">
              Ready to Start Your Construction Project in Kenya?
            </h2>
            <p>
              Contact Kenya's trusted construction company today for a free consultation and quote. 
              Serving Nairobi, Kiambu, Kajiado and nationwide.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Get Free Construction Quote
              </Link>
              <a href="tel:+254711234567" className="cta-button secondary">
                Call: +254 711 234 567
              </a>
            </div>
            <p className="cta-note">
              <strong>Office Hours:</strong> Mon-Fri 8am-5pm, Sat 9am-1pm | 
              <strong> Email:</strong> <a href="mailto:info@greaniabuild.co.ke">info@greaniabuild.co.ke</a>
            </p>
          </div>
        </section>

        {/* SEO Footer Content */}
        <footer className="services-seo-footer">
          <div className="container">
            <div className="seo-footer-content">
              <h3 className="visually-hidden">Construction Services Keywords</h3>
              <p className="seo-keyword-list">
                <strong>Construction Services in Kenya:</strong> Building Construction Services Kenya | Roofing Services Nairobi | 
                Renovation Contractors Kenya | Interior Design Nairobi | Sustainable Construction Kenya | Green Building Solutions | 
                Mud House Construction Kenya | Natural Building Techniques | Commercial Construction Nairobi | 
                House Building Kenya | Construction Company Services | Building Contractor Nairobi
              </p>
            </div>
          </div>
        </footer>

        {/* Additional schema for FAQ */}
        <script type="application/ld+json">
          {JSON.stringify(generateServicesFAQ(servicesData))}
        </script>
      </main>
    </>
  );
}

export default Services;