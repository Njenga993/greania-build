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
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import '../styles/home.css';

// Enhanced Home Page specific schema with comprehensive data
const generateHomeServicesSchema = (services) => {
  return services.slice(0, 6).map(service => ({
    "@type": "Service",
    "@id": `https://greaniabuild.co.ke/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`,
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
    }
  }));
};

const generateHomeProjectsSchema = (projects) => {
  return projects.slice(0, 6).map(project => ({
    "@type": "Project",
    "@id": `https://greaniabuild.co.ke/projects#${project.title.toLowerCase().replace(/\s+/g, '-')}`,
    "name": project.title,
    "description": project.description,
    "image": [
      `https://greaniabuild.co.ke${project.image}`,
      ...(project.additionalImages || []).map(img => `https://greaniabuild.co.ke${img}`)
    ],
    "mainEntityOfPage": `https://greaniabuild.co.ke/projects/${project.id || project.title.toLowerCase().replace(/\s+/g, '-')}`,
    "provider": {
      "@type": "Organization",
      "name": "Greania Build Ltd",
      "url": "https://greaniabuild.co.ke/"
    },
    "location": {
      "@type": "Place",
      "name": project.location || "Kenya"
    },
    "dateCreated": project.date || new Date().toISOString().split('T')[0]
  }));
};

// Comprehensive Home Page Schema
const homePageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://greaniabuild.co.ke/#webpage",
    "name": "Greania Build – Leading Construction Company in Kenya | Sustainable Building & Roofing",
    "description": "Greania Build is Kenya's premier construction company offering sustainable building, roofing, renovations, interior design, and green building solutions. Serving Nairobi, Kiambu, Kajiado, and nationwide.",
    "url": "https://greaniabuild.co.ke/",
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
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://greaniabuild.co.ke/assets/hero.jpg",
      "width": "1200",
      "height": "630"
    },
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://greaniabuild.co.ke/#website"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://greaniabuild.co.ke/#business",
    "name": "Greania Build Ltd",
    "description": "Top-rated construction company in Kenya specializing in sustainable building, roofing, renovations, and green construction solutions for residential and commercial projects.",
    "url": "https://greaniabuild.co.ke/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://greaniabuild.co.ke/assets/logo.png",
      "width": "300",
      "height": "100"
    },
    "telephone": "+254 711 234 567",
    "email": "info@greaniabuild.co.ke",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Westlands Business Center",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "postalCode": "00100",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.2921",
      "longitude": "36.8219"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "priceRange": "KES 500,000 - 50,000,000+",
    "paymentAccepted": "Cash, M-Pesa, Credit Card, Bank Transfer",
    "areaServed": [
      {
        "@type": "City",
        "name": "Nairobi"
      },
      {
        "@type": "City",
        "name": "Kiambu"
      },
      {
        "@type": "City",
        "name": "Kajiado"
      },
      {
        "@type": "City",
        "name": "Machakos"
      },
      {
        "@type": "Country",
        "name": "Kenya"
      }
    ],
    "makesOffer": generateHomeServicesSchema(servicesData),
    "hasPart": generateHomeProjectsSchema(projectsData),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "47",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "47"
    },
    "sameAs": [
      "https://www.facebook.com/greaniabuild",
      "https://www.instagram.com/greaniabuild",
      "https://twitter.com/greaniabuild",
      "https://www.linkedin.com/company/greaniabuild"
    ],
    "knowsAbout": [
      "Sustainable Construction",
      "Green Building Certification",
      "Roofing Installation",
      "Building Renovations",
      "Interior Design",
      "Construction Project Management",
      "Energy Efficient Solutions",
      "Eco-friendly Materials"
    ],
    "founder": "Greania Build Team",
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "25"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What construction services does Greania Build offer in Kenya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Greania Build offers comprehensive construction services including sustainable building, roofing installation, home renovations, interior design, green building solutions, commercial construction, and project management across Kenya."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas in Kenya does Greania Build serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily serve Nairobi, Kiambu, Kajiado, Machakos, and Nakuru counties, with project capabilities extending throughout Kenya. Contact us for specific location inquiries."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Greania Build for construction projects in Kenya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine 5+ years of experience, sustainable building practices, quality workmanship, transparent pricing, and a commitment to green construction principles. Our 4.8-star rating from 47 clients reflects our dedication to excellence."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer sustainable/green building solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We specialize in sustainable construction using eco-friendly materials, energy-efficient designs, solar integration, water harvesting systems, and green building certifications for environmentally conscious projects."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical timeline for a construction project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary: renovations take 2-6 weeks, new residential construction 3-12 months, commercial projects 6-24 months. We provide detailed timelines during consultation based on project scope."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a quote for my construction project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact us via phone (+254 711 234 567), email (info@greaniabuild.co.ke), or our contact form. We offer free consultations and detailed quotes within 48 hours of project assessment."
        }
      }
    ]
  }
];

function Home() {
  // Preload critical images
  const preloadImages = [
    {
      src: "https://greaniabuild.co.ke/assets/hero.jpg",
      srcSet: "https://greaniabuild.co.ke/assets/hero.jpg 1200w, https://greaniabuild.co.ke/assets/hero-mobile.jpg 600w",
      sizes: "(max-width: 768px) 100vw, 1200px"
    },
    {
      src: "https://greaniabuild.co.ke/assets/logo.png",
      srcSet: "https://greaniabuild.co.ke/assets/logo.png 300w, https://greaniabuild.co.ke/assets/logo@2x.png 600w",
      sizes: "300px"
    }
  ];

  return (
    <>
      <SEO 
        title="Greania Build – Top Construction Company Kenya | Sustainable Building & Roofing Services"
        description="Greania Build: Kenya's #1 construction company for sustainable building, roofing, renovations & green construction. 4.8★ rated. Serving Nairobi, Kiambu, Kajiado & nationwide. Free consultations."
        keywords="construction company Kenya, roofing services Nairobi, sustainable building Kenya, house renovations Nairobi, green construction Kenya, building contractor Kenya, interior design Nairobi, construction services Kenya, home builders Kenya, commercial construction Nairobi, eco-friendly building Kenya, construction management Kenya"
        url="https://greaniabuild.co.ke/"
        image="https://greaniabuild.co.ke/assets/og-home.jpg"
        pageSpecificSchema={homePageSchema}
        preloadImages={preloadImages}
        geo={{
          latitude: "-1.2921",
          longitude: "36.8219",
          placename: "Nairobi, Kenya"
        }}
        serviceAreas={["Nairobi", "Kiambu", "Kajiado", "Machakos", "Nakuru", "Kenya"]}
      />
      
      <div className="home-page" itemScope itemType="https://schema.org/HomeAndConstructionBusiness">
        {/* Semantic H1 - visible but styled appropriately */}
        <header className="seo-header" aria-label="Company introduction">
          <h1 className="seo-main-heading" itemProp="name">
            Greania Build: Leading Construction Company in Kenya
          </h1>
          <p className="seo-subtitle" itemProp="description">
            Sustainable building, roofing, renovations & green construction solutions serving 
            <span itemProp="areaServed"> Nairobi, Kiambu, Kajiado, Machakos, Nakuru </span>
            and throughout Kenya.
          </p>
          <meta itemProp="telephone" content="+254711234567" />
          <meta itemProp="email" content="info@greaniabuild.co.ke" />
          <meta itemProp="address" content="Westlands, Nairobi, Kenya" />
        </header>
        
        {/* Hero Section */}
        <section 
          aria-labelledby="hero-heading" 
          role="banner"
          itemProp="mainEntityOfPage"
          itemScope
          itemType="https://schema.org/WebPageElement"
        >
          <h2 id="hero-heading" className="visually-hidden">Welcome to Greania Build</h2>
          <Hero />
        </section>

        {/* Quick Navigation with improved accessibility */}
        <nav className="home-nav-cards" aria-label="Main navigation">
          <h2 className="section-heading visually-hidden">Explore Greania Build</h2>
          <div className="cards-container" role="list">
            <Link 
              to="/services" 
              className="nav-card" 
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="makesOffer"
            >
              <div className="card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.586l6-6z"/>
                  <path d="M12 17c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2z"/>
                </svg>
              </div>
              <h3 itemProp="name">Our Construction Services</h3>
              <p itemProp="description">Comprehensive building solutions including sustainable construction, roofing, and renovations in Kenya</p>
              <meta itemProp="url" content="https://greaniabuild.co.ke/services" />
            </Link>
            
            <Link 
              to="/projects" 
              className="nav-card" 
              role="listitem"
              itemScope
              itemType="https://schema.org/Project"
              itemProp="hasPart"
            >
              <div className="card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM4 8h16v4h-6c-1.103 0-2 .897-2 2v4H4V8zm8 6v4h6v-4h-6z"/>
                </svg>
              </div>
              <h3 itemProp="name">Completed Projects Portfolio</h3>
              <p itemProp="description">Browse our successful construction projects across Kenya with before/after photos</p>
              <meta itemProp="url" content="https://greaniabuild.co.ke/projects" />
            </Link>
            
            <Link 
              to="/about" 
              className="nav-card" 
              role="listitem"
              itemScope
              itemType="https://schema.org/AboutPage"
            >
              <div className="card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                  <path d="M11 11h2v6h-2zm0-4h2v2h-2z"/>
                </svg>
              </div>
              <h3>About Our Company</h3>
              <p>Learn about our 5+ years experience, sustainable practices, and team expertise in Kenyan construction</p>
            </Link>
            
            <Link 
              to="/contact" 
              className="nav-card" 
              role="listitem"
              itemScope
              itemType="https://schema.org/ContactPage"
            >
              <div className="card-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
                </svg>
              </div>
              <h3>Free Consultation</h3>
              <p>Get a free quote for your construction project. Call +254 711 234 567 or message us online</p>
            </Link>
          </div>
        </nav>

        {/* About Section with enhanced SEO content */}
        <section 
          aria-labelledby="about-heading" 
          className="seo-content-section"
          itemProp="description"
        >
          <div className="container">
            <h2 id="about-heading" className="section-heading">
              Why Choose <span className="brand-name">Greania Build</span> for Construction in Kenya?
            </h2>
            <div className="seo-content-grid">
              <div className="seo-content-block">
                <h3>Expert Construction Services in Kenya</h3>
                <p>
                  As a leading <strong>construction company in Nairobi</strong> with over 5 years of experience, 
                  Greania Build delivers exceptional <strong>building, roofing, and renovation services</strong> 
                  across Kenya. We specialize in <strong>sustainable construction practices</strong> that combine 
                  durability with environmental responsibility.
                </p>
              </div>
              <div className="seo-content-block">
                <h3>Serving Multiple Locations</h3>
                <p>
                  We provide <strong>construction services in Nairobi</strong> and surrounding counties including 
                  <strong>Kiambu, Kajiado, Machakos, and Nakuru</strong>. Our mobile teams ensure quality 
                  construction work throughout Kenya, with projects ranging from residential homes to commercial complexes.
                </p>
                <ul className="location-list">
                  <li><strong>Nairobi County:</strong> Westlands, Karen, Runda, Lavington</li>
                  <li><strong>Kiambu County:</strong> Thika, Ruaka, Limuru, Kikuyu</li>
                  <li><strong>Kajiado County:</strong> Kitengela, Ongata Rongai, Kiserian</li>
                  <li><strong>Nationwide:</strong> Custom projects across Kenya</li>
                </ul>
              </div>
              <div className="seo-content-block">
                <h3>Our Construction Specialties</h3>
                <ul className="specialties-list">
                  <li><strong>Sustainable Building Construction</strong> - Eco-friendly materials & design</li>
                  <li><strong>Professional Roofing Services</strong> - Installation, repair, replacement</li>
                  <li><strong>Complete Home Renovations</strong> - Kitchen, bathroom, whole-house</li>
                  <li><strong>Interior Design & Finishing</strong> - Modern, functional spaces</li>
                  <li><strong>Green Building Solutions</strong> - Energy efficiency & solar integration</li>
                  <li><strong>Commercial Construction</strong> - Offices, retail spaces, institutions</li>
                </ul>
              </div>
            </div>
            <AboutSection />
          </div>
        </section>

        {/* Services Section with enhanced markup */}
        <section 
          aria-labelledby="services-heading" 
          className="seo-services-section"
          itemProp="makesOffer"
          itemScope
          itemType="https://schema.org/OfferCatalog"
        >
          <div className="container">
            <header className="section-header">
              <h2 id="services-heading" className="section-heading" itemProp="name">
              <span className="brand-name"> Our Comprehensive Construction Services in Kenya </span>
              </h2>
              <p className="section-subtitle">
                Professional building solutions serving <strong>Nairobi, Kiambu, Kajiado, Machakos, Nakuru</strong> and throughout Kenya
              </p>
            </header>
            <HomeServices />
          </div>
        </section>

        {/* Projects Section */}
        <section 
          aria-labelledby="projects-heading"
          className="seo-projects-section"
          itemProp="hasPart"
        >
          <div className="container">
            <header className="section-header">
              <h2 id="projects-heading" className="section-heading">
                <span className="brand-name"> Recent Construction Projects in Kenya </span>
              </h2>
              <p className="section-subtitle">
                Browse our portfolio of completed <strong>building, roofing, and renovation projects</strong> across multiple locations in Kenya
              </p>
            </header>
            <HomeProjects />
          </div>
        </section>

        {/* Testimonials with review schema */}
        <section 
          aria-labelledby="testimonials-heading"
          className="seo-testimonials"
          itemProp="review"
          itemScope
          itemType="https://schema.org/AggregateRating"
        >
          <div className="container">
            <h2 id="testimonials-heading" className="section-heading">
              Client Reviews & Testimonials
            </h2>
            <div className="rating-display" aria-label="Company rating">
              <div className="stars" aria-hidden="true">★★★★★</div>
              <span className="rating-text">
                Rated <strong>4.8/5</strong> from <strong>47 reviews</strong> by Kenyan clients
              </span>
              <meta itemProp="ratingValue" content="4.8" />
              <meta itemProp="ratingCount" content="47" />
              <meta itemProp="bestRating" content="5" />
              <meta itemProp="worstRating" content="1" />
            </div>
            <HomeTestimonials />
          </div>
        </section>

        {/* Contact Section with call-to-action */}
        <section 
          aria-labelledby="contact-form-heading"
          className="seo-contact-section"
          itemProp="contactPoint"
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <div className="container">
            
            <HomeContact />
          </div>
        </section>

        {/* Footer SEO Content */}
        <footer className="seo-footer">
          <div className="container">
            <div className="seo-footer-content">
              <h3 className="visually-hidden">Construction Services Keywords</h3>
              <p className="seo-keyword-list">
                <strong>Construction Services in Kenya:</strong> Building Construction Nairobi | Roofing Services Kenya | 
                House Renovations Nairobi | Sustainable Building Kenya | Green Construction Solutions | Interior Design Nairobi | 
                Commercial Construction Kenya | Building Contractor Nairobi | Construction Company Kenya | 
                Home Builders Kenya | Renovation Contractors Nairobi | Building Materials Kenya
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;