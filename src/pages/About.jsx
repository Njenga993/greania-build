// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AboutSection from '../components/AboutSection';
import { milestonesData } from '../data/milestones.jsx';
import '../styles/about-page.css';

// Function to dynamically generate schema for milestones
const generateMilestonesSchema = (milestones) => {
  return milestones.map((milestone, index) => ({
    "@type": "Event",
    "@id": `https://greaniabuild.co.ke/about#milestone-${index + 1}`,
    "name": `Greania Build Milestone: ${milestone.year}`,
    "startDate": milestone.year,
    "endDate": milestone.year,
    "description": milestone.description,
    "location": {
      "@type": "Place",
      "name": "Kenya"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Greania Build Ltd",
      "url": "https://greaniabuild.co.ke/"
    }
  }));
};

// Enhanced Company schema for About page
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ConstructionBusiness",
  "@id": "https://greaniabuild.co.ke/#organization",
  "name": "Greania Build Ltd",
  "legalName": "Greania Build Limited",
  "description": "Leading construction company in Kenya specializing in sustainable building, roofing, renovations, and green construction solutions. Serving Nairobi, Kiambu, Kajiado and nationwide since 2020.",
  "url": "https://greaniabuild.co.ke/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://greaniabuild.co.ke/assets/logo.png",
    "width": "300",
    "height": "100"
  },
  "foundingDate": "2020",
  "foundingLocation": {
    "@type": "Place",
    "name": "Nairobi, Kenya"
  },
  "founder": {
    "@type": "Person",
    "name": "Greania Build Team"
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "25",
    "unitText": "employees"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Westlands Business Center",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi County",
    "postalCode": "00100",
    "addressCountry": "KE"
  },
  "telephone": "+254 711 234 567",
  "email": "info@greaniabuild.co.ke",
  "sameAs": [
    "https://www.facebook.com/greaniabuild",
    "https://www.instagram.com/greaniabuild",
    "https://twitter.com/greaniabuild",
    "https://www.linkedin.com/company/greaniabuild",
    "https://www.youtube.com/@greaniabuild"
  ],
  "knowsAbout": [
    "Sustainable Construction",
    "Green Building Certification",
    "Roofing Installation",
    "Building Renovations",
    "Interior Design Kenya",
    "Construction Project Management",
    "Energy Efficient Building Solutions",
    "Eco-friendly Materials Kenya"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "-1.2921",
      "longitude": "36.8219"
    },
    "geoRadius": "100000"
  },
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
      "@type": "City",
      "name": "Nakuru"
    },
    {
      "@type": "Country",
      "name": "Kenya"
    }
  ],
  "brand": "Greania Build",
  "slogan": "Building a Sustainable Future for Kenya",
  "vatID": "KE-12345678",
  "taxID": "A123456789X"
};

// About page schema
const aboutPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://greaniabuild.co.ke/about#webpage",
    "name": "About Greania Build - Leading Construction Company in Kenya Since 2020",
    "description": "Learn about Greania Build - Kenya's premier construction company specializing in sustainable building, roofing, renovations, and green construction. Serving Nairobi, Kiambu, Kajiado and nationwide with 4.8★ rated services.",
    "url": "https://greaniabuild.co.ke/about",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://greaniabuild.co.ke/#website"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://greaniabuild.co.ke/assets/about-hero.jpg",
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
          "name": "About Greania Build Kenya",
          "item": "https://greaniabuild.co.ke/about"
        }
      ]
    }
  },
  organizationSchema,
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When was Greania Build founded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Greania Build was founded in 2020 in Nairobi, Kenya, with a mission to provide sustainable construction solutions across the country."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Kenya does Greania Build serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Nairobi, Kiambu, Kajiado, Machakos, Nakuru, and throughout Kenya with our construction, roofing, and renovation services."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Greania Build different from other construction companies in Kenya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine sustainable building practices, certified expertise, client-centered approach, and a proven 4.8-star track record from 47+ satisfied Kenyan clients."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer sustainable/green building solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Sustainable construction is our specialty. We use eco-friendly materials, energy-efficient designs, and green building practices for all our projects in Kenya."
        }
      },
      {
        "@type": "Question",
        "name": "How many projects has Greania Build completed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Since 2020, we've successfully completed over 200+ construction, roofing, and renovation projects across Kenya, with a 98% client satisfaction rate."
        }
      },
      {
        "@type": "Question",
        "name": "Are your construction workers certified and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All our team members are certified professionals, fully insured, and undergo regular training in the latest construction techniques and safety standards."
        }
      }
    ]
  }
];

function About() {
  // Preload about page images
  const preloadImages = [
    {
      src: "https://greaniabuild.co.ke/assets/about-hero.jpg",
      srcSet: "https://greaniabuild.co.ke/assets/about-hero.jpg 1200w, https://greaniabuild.co.ke/assets/about-hero-mobile.jpg 600w",
      sizes: "(max-width: 768px) 100vw, 1200px"
    }
  ];

  return (
    <>
      <SEO 
        title="About Greania Build - Kenya's Leading Construction Company Since 2020"
        description="Greania Build: Founded 2020 in Nairobi. Kenya's trusted construction company specializing in sustainable building, roofing, renovations. 4.8★ rated. Serving Nairobi, Kiambu, Kajiado & nationwide."
        keywords="about Greania Build Kenya, construction company Nairobi, sustainable building Kenya, roofing services company Kenya, renovation experts Nairobi, green construction Kenya, building contractor Kenya, construction history Kenya, construction company about us, Greania Build team Kenya"
        url="https://greaniabuild.co.ke/about"
        image="https://greaniabuild.co.ke/assets/og-about.jpg"
        pageSpecificSchema={aboutPageSchema}
        preloadImages={preloadImages}
        geo={{
          latitude: "-1.2921",
          longitude: "36.8219",
          placename: "Nairobi, Kenya"
        }}
        articlePublishedTime="2020-01-01"
      />
      
      <main className="about-page" itemScope itemType="https://schema.org/AboutPage">
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
                <span itemProp="name">About Greania Build Kenya</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* SEO Header */}
        <header className="about-seo-header">
          <div className="container">
            <h1 itemProp="name" className="about-main-heading">
              About <span className="brand-name">Greania Build</span>: Building Kenya's Future Since 2020
            </h1>
            <p className="about-subtitle" itemProp="description">
              Founded in Nairobi, Greania Build has grown to become one of Kenya's most trusted construction companies, 
              specializing in <strong>sustainable building, roofing, renovations, and green construction solutions</strong> 
              across <strong>Nairobi, Kiambu, Kajiado, Machakos, Nakuru, and nationwide</strong>.
            </p>
            <div className="company-facts">
              <div className="fact-item" itemProp="foundingDate" content="2020">
                <span className="fact-number">2020</span>
                <span className="fact-label">Founded in Nairobi</span>
              </div>
              <div className="fact-item">
                <span className="fact-number">200+</span>
                <span className="fact-label">Projects Completed</span>
              </div>
              <div className="fact-item" itemProp="employee" itemScope itemType="https://schema.org/EmployeeRole">
                <span className="fact-number" itemProp="numberOfEmployees">25</span>
                <span className="fact-label" itemProp="roleName">Certified Experts</span>
              </div>
              <div className="fact-item">
                <span className="fact-number">4.8★</span>
                <span className="fact-label">Client Rating</span>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section aria-labelledby="about-heading" className="about-content-section">
          <div className="container">
            <h2 id="about-heading" className="visually-hidden">Our Story & Mission</h2>
            <div className="about-content-grid">
              <div className="about-content-block">
                <h3>Our Founding Story</h3>
                <p>
                  <strong>Greania Build</strong> was established in <strong>2020 in Nairobi, Kenya</strong> with a clear 
                  vision: to revolutionize Kenya's construction industry through sustainable practices and exceptional 
                  craftsmanship. What started as a small team of passionate builders has grown into a <strong>leading 
                  construction company serving multiple counties across Kenya</strong>.
                </p>
              </div>
              <div className="about-content-block">
                <h3>Our Mission in Kenya</h3>
                <p>
                  To deliver <strong>high-quality, sustainable construction solutions</strong> that exceed client 
                  expectations while contributing to Kenya's development. We believe in building structures that 
                  not only stand the test of time but also respect our environment.
                </p>
              </div>
              <div className="about-content-block">
                <h3>Core Values</h3>
                <ul className="values-list">
                  <li><strong>Sustainability</strong> - Eco-friendly construction practices</li>
                  <li><strong>Quality</strong> - Exceptional workmanship & materials</li>
                  <li><strong>Integrity</strong> - Transparent processes & honest pricing</li>
                  <li><strong>Innovation</strong> - Latest construction techniques</li>
                  <li><strong>Client Focus</strong> - Your vision, our execution</li>
                </ul>
              </div>
            </div>
            <AboutSection />
          </div>
        </section>

        {/* Why Choose Us Section with enhanced SEO content */}
        <section className="why-choose-us" aria-labelledby="why-choose-heading" itemScope itemType="https://schema.org/ItemList">
          <div className="container">
            <h2 id="why-choose-heading" className="section-heading">
             <span className="brand-name"> Why Choose Greania Build for Your Construction Project in Kenya?</span> 
            </h2>
            <p className="section-subtitle">
              Discover why over 200+ clients in <strong>Nairobi, Kiambu, Kajiado, and beyond</strong> trust us with their construction needs
            </p>
            
            <div className="features" itemProp="itemListElement">
              <div className="feature-card" itemScope itemType="https://schema.org/Service">
                <div className="feature-icon" aria-hidden="true"></div>
                <h3 itemProp="name">Certified Construction Experts</h3>
                <p itemProp="description">
                  Our team consists of <strong>licensed professionals</strong> with NCA certifications and years of experience 
                  in every construction discipline. All workers are trained in latest building codes and safety standards.
                </p>
              </div>
              
              <div className="feature-card" itemScope itemType="https://schema.org/Service">
                <div className="feature-icon" aria-hidden="true"></div>
                <h3 itemProp="name">Client-Centered Approach</h3>
                <p itemProp="description">
                  We prioritize your goals, budget, and satisfaction at every stage. From initial consultation in Nairobi 
                  to project completion across Kenya, you're involved in every decision.
                </p>
              </div>
              
              <div className="feature-card" itemScope itemType="https://schema.org/Service">
                <div className="feature-icon" aria-hidden="true"></div>
                <h3 itemProp="name">Proven Track Record</h3>
                <p itemProp="description">
                  <strong>200+ successful projects</strong> across Kenya with <strong>4.8-star rating</strong> from 47+ verified clients. 
                  From residential homes in Karen to commercial buildings in Westlands.
                </p>
              </div>
              
              <div className="feature-card" itemScope itemType="https://schema.org/Service">
                <div className="feature-icon" aria-hidden="true"></div>
                <h3 itemProp="name">Sustainable Building Specialists</h3>
                <p itemProp="description">
                  Pioneers in green construction in Kenya. We use eco-friendly materials, energy-efficient designs, 
                  and sustainable practices that reduce environmental impact.
                </p>
              </div>
              
              <div className="feature-card" itemScope itemType="https://schema.org/Service">
                <div className="feature-icon" aria-hidden="true"></div>
                <h3 itemProp="name">Fully Insured & Guaranteed</h3>
                <p itemProp="description">
                  Comprehensive insurance coverage and workmanship guarantees on all projects. Your investment 
                  is protected when you choose Greania Build.
                </p>
              </div>
              
              <div className="feature-card" itemScope itemType="https://schema.org/Service">
                <div className="feature-icon" aria-hidden="true"></div>
                <h3 itemProp="name">Timely Project Completion</h3>
                <p itemProp="description">
                  We respect your time. Our project management systems ensure <strong>98% on-time completion rate</strong> 
                  with minimal disruptions to your daily life or business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline / Milestones with enhanced markup */}
        <section className="milestones" aria-labelledby="journey-heading" itemScope itemType="https://schema.org/EventSeries">
          <div className="container">
            <header className="section-header">
              <h2 id="journey-heading" className="section-heading" itemProp="name">
                <span className="brand-name"> Our Construction Journey in Kenya </span>
              </h2>
              <p className="section-subtitle">
                Milestones in building Kenya's sustainable construction landscape since 2020
              </p>
            </header>
            
            <ul className="timeline" itemScope itemType="https://schema.org/ItemList">
              {milestonesData.map((milestone, index) => (
                <li 
                  key={index} 
                  itemProp="itemListElement" 
                  itemScope 
                  itemType="https://schema.org/Event"
                >
                  <span className="year" itemProp="startDate">{milestone.year}</span>
                  <p itemProp="description">{milestone.description}</p>
                  <meta itemProp="name" content={`Greania Build Milestone: ${milestone.year}`} />
                  <meta itemProp="location" content="Kenya" />
                </li>
              ))}
            </ul>
            
            <div className="company-growth">
              <h3>Company Growth & Impact</h3>
              <div className="growth-stats">
                <div className="growth-stat">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="growth-stat">
                  <span className="stat-number">47+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="growth-stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Counties Served</span>
                </div>
                <div className="growth-stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Team Members</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="service-areas" aria-labelledby="areas-heading">
          <div className="container">
            <h2 id="areas-heading" className="section1-heading">
             <span className="brand-name">  Where We Build in Kenya </span>
            </h2>
            <p className="section-subtitle">
              <span className="brand-name"> Serving multiple locations across Kenya with our construction expertise </span>
            </p>
            <div className="areas-grid">
              <div className="area-card">
                <h3>Nairobi County</h3>
                <ul>
                  <li>Westlands</li>
                  <li>Karen</li>
                  <li>Runda</li>
                  <li>Lavington</li>
                  <li>Kileleshwa</li>
                </ul>
              </div>
              <div className="area-card">
                <h3>Kiambu County</h3>
                <ul>
                  <li>Thika</li>
                  <li>Ruaka</li>
                  <li>Limuru</li>
                  <li>Kikuyu</li>
                  <li>Kiambu Town</li>
                </ul>
              </div>
              <div className="area-card">
                <h3>Kajiado County</h3>
                <ul>
                  <li>Kitengela</li>
                  <li>Ongata Rongai</li>
                  <li>Kiserian</li>
                  <li>Ngong</li>
                </ul>
              </div>
              <div className="area-card">
                <h3>Nationwide Projects</h3>
                <ul>
                  <li>Machakos</li>
                  <li>Nakuru</li>
                  <li>Mombasa</li>
                  <li>Kisumu</li>
                  <li>Custom Locations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section" aria-labelledby="cta-heading" itemProp="mainEntity" itemScope itemType="https://schema.org/Action">
          <div className="container">
            <h2 id="cta-heading" className="section-heading" itemProp="name">
              Ready to Build with Kenya's Trusted Construction Partner?
            </h2>
            <p itemProp="description">
              Join our growing list of satisfied clients in Nairobi, Kiambu, Kajiado and across Kenya 
              who have experienced the Greania Build difference.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary" itemProp="url">
                Get Your Free Consultation
              </Link>
              <Link to="/projects" className="cta-button secondary">
                View Our Projects
              </Link>
            </div>
            <p className="cta-note">
              <strong>Call now:</strong> <a href="tel:+254711234567" className="phone-link">+254 711 234 567</a> | 
              <strong> Email:</strong> <a href="mailto:info@greaniabuild.co.ke">info@greaniabuild.co.ke</a>
            </p>
          </div>
        </section>

        {/* SEO Footer Content */}
        <footer className="about-seo-footer">
          <div className="container">
            <div className="seo-footer-content">
              <h3 className="visually-hidden">Construction Company Keywords</h3>
              <p className="seo-keyword-list">
                <strong>Construction Company Kenya:</strong> About Greania Build Kenya | Construction Company Nairobi | 
                Sustainable Building Kenya | Roofing Services Company | Renovation Experts Nairobi | Green Construction Kenya | 
                Building Contractor Kenya | Construction History Kenya | Construction Team Nairobi | 
                Construction Company Profile Kenya | Building Services Nairobi | Construction Experts Kenya
              </p>
            </div>
          </div>
        </footer>

        {/* Additional schema for milestones */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Greania Build Milestones Timeline",
            "description": "Key milestones in Greania Build's construction journey in Kenya since 2020",
            "itemListElement": generateMilestonesSchema(milestonesData)
          })}
        </script>
      </main>
    </>
  );
}

export default About;