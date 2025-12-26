// src/pages/ContactPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HomeContact from '../components/HomeContact';
import '../styles/home-contact.css';
import '../styles/contact-page.css';

// Enhanced Schema for Contact Page with comprehensive details
const contactPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://greaniabuild.co.ke/contact#webpage",
    "name": "Contact Greania Build Construction Company Kenya | Nakuru Office +254 757 657 217",
    "description": "Contact Greania Build for construction, roofing & renovation services in Kenya. Call +254 757 657 217, email info@greaniabuild.co.ke, or visit our Nakuru office. Free consultations for sustainable building projects.",
    "url": "https://greaniabuild.co.ke/contact",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://greaniabuild.co.ke/#website"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://greaniabuild.co.ke/assets/contact-hero.jpg",
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
          "name": "Contact Greania Build Construction Company Kenya",
          "item": "https://greaniabuild.co.ke/contact"
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "@id": "https://greaniabuild.co.ke/#construction-business",
    "name": "Greania Build Ltd",
    "url": "https://greaniabuild.co.ke/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://greaniabuild.co.ke/assets/logo.png",
      "width": "300",
      "height": "100"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+254-757-657-217",
        "contactType": "customer service",
        "availableLanguage": ["English", "Swahili"],
        "areaServed": ["KE"],
        "contactOption": "TollFree",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "17:00"
        },
        "description": "Main contact number for construction, roofing and renovation services in Kenya"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Greania Plaza, Gilgil Road",
      "addressLocality": "Nakuru",
      "addressRegion": "Nakuru County",
      "postalCode": "20100",
      "addressCountry": "KE",
      "description": "Greania Build Construction Company office in Nakuru, Kenya"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00",
        "description": "Regular construction business hours in Kenya"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "13:00",
        "description": "Weekend consultation hours for construction projects"
      }
    ],
    "email": "info@greaniabuild.co.ke",
    "priceRange": "KES 500,000 - 50,000,000+",
    "paymentAccepted": "Cash, M-Pesa, Credit Card, Bank Transfer",
    "currenciesAccepted": "KES, USD",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-0.3031",
        "longitude": "36.0800"
      },
      "geoRadius": "150000",
      "description": "Serving Nakuru, Nairobi, Kiambu, Kajiado, Machakos and throughout Kenya"
    },
    "knowsAbout": [
      "Sustainable Construction Kenya",
      "Roofing Installation Nakuru",
      "Building Renovations Kenya",
      "Green Building Solutions",
      "Construction Project Management",
      "Mud House Construction",
      "Natural Building Techniques"
    ],
    "sameAs": [
      "https://www.facebook.com/greaniabuild",
      "https://www.instagram.com/greaniabuild",
      "https://twitter.com/greaniabuild",
      "https://www.linkedin.com/company/greaniabuild",
      "https://www.youtube.com/@greaniabuild"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Construction Consultation Kenya",
          "description": "Free construction consultation and site assessment for building projects in Kenya"
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I contact Greania Build for construction services in Nakuru, Kenya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact Greania Build Kenya at +254 757 657 217 (Nakuru office). Email info@greaniabuild.co.ke, visit our office at Greania Plaza, Gilgil Road Nakuru, or use our online contact form for free construction consultations in Nakuru and surrounding areas."
        }
      },
      {
        "@type": "Question",
        "name": "What are Greania Build's business hours in Nakuru, Kenya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Monday-Friday: 8:00 AM - 5:00 PM | Saturday: 9:00 AM - 1:00 PM | Sunday: Closed. Emergency construction services available for urgent building needs in Nakuru and surrounding regions."
        }
      },
      {
        "@type": "Question",
        "name": "Does Greania Build offer free construction consultations in Nakuru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Greania Build offers free construction consultations and site assessments for all building, roofing, and renovation projects in Nakuru, Nairobi, Kiambu, Kajiado and throughout Kenya."
        }
      },
      {
        "@type": "Question",
        "name": "What construction service areas does Greania Build cover from Nakuru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "From our Nakuru office, we provide construction services throughout Kenya including Nakuru County, Nairobi, Kiambu, Kajiado, Machakos and nationwide projects. We serve Nakuru town, Gilgil, Naivasha and surrounding areas."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly will Greania Build respond to my construction inquiry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We respond within 24 hours to all construction inquiries. For urgent building needs in Nakuru or emergency construction services, call +254 757 657 217 for immediate assistance."
        }
      }
    ]
  }
];

function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Greania Build Construction Company Kenya | Nakuru Office +254 757 657 217"
        description="Contact Greania Build Kenya for construction, roofing & renovation services. Nakuru office: +254 757 657 217 | Email: info@greaniabuild.co.ke. Free consultations. Serving Nakuru, Nairobi, Kiambu, Kajiado, Machakos and nationwide."
        keywords="contact construction company Kenya, Greania Build phone number Nakuru, construction office Kenya Nakuru, roofing services contact Nakuru, building contractor Kenya contact, renovation contractors Nakuru, construction consultation free Kenya, emergency construction services Nakuru, construction company email Kenya, building services contact Nakuru, construction project inquiry Kenya, Greania Build address Nakuru Gilgil Road"
        url="https://greaniabuild.co.ke/contact"
        image="https://greaniabuild.co.ke/assets/og-contact.jpg"
        pageSpecificSchema={contactPageSchema}
        geo={{
          latitude: "-0.3031",
          longitude: "36.0800",
          placename: "Nakuru, Kenya"
        }}
        serviceAreas={["Nakuru", "Nairobi", "Kiambu", "Kajiado", "Machakos", "Kenya"]}
      />
      
      <main className="contact-page" itemScope itemType="https://schema.org/ContactPage">
        {/* Breadcrumb Navigation with Schema */}
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
                <span itemProp="name">Contact Greania Build Construction Company Kenya</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Contact Hero Section with Enhanced SEO */}
        <section className="contact-hero" aria-labelledby="contact-hero-heading" itemScope itemType="https://schema.org/WPHeader">
          <div className="container">
            <h1 id="contact-hero-heading" itemProp="headline">
              Contact Greania Build Construction Company Kenya
            </h1>
            <p itemProp="description">
              Get in touch with Kenya's trusted construction partner for <strong>sustainable building, roofing, and renovation services</strong> in 
              <strong> Nakuru, Nairobi, Kiambu, Kajiado, Machakos</strong> and throughout Kenya. 
              <strong> Free consultations</strong> available for all construction projects.
            </p>
            <div className="seo-contact-highlight" aria-label="Primary contact information">
              <p><strong>Call Now:</strong> <a href="tel:+254757657217" itemProp="telephone">+254 757 657 217</a> | 
              <strong> Email:</strong> <a href="mailto:info@greaniabuild.co.ke" itemProp="email">info@greaniabuild.co.ke</a></p>
            </div>
          </div>
        </section>

        {/* Main Content Area: Form and Contact Info */}
        <div className="container contact-content-wrapper">
          {/* Left Side: The Contact Form Component with Schema */}
          <section 
            className="contact-form-section" 
            aria-labelledby="contact-form-heading"
            itemScope 
            itemType="https://schema.org/ContactPoint"
          >
            <h2 id="contact-form-heading">Send Us Your Construction Inquiry</h2>
            <p itemProp="description">
              Get a <strong>free construction consultation</strong> for your building project in Kenya. 
              Fill out the form below for <strong>construction, roofing, or renovation services</strong> in 
              Nakuru, Nairobi, Kiambu, Kajiado or other areas in Kenya.
            </p>
            <HomeContact />
            <meta itemProp="email" content="info@greaniabuild.co.ke" />
            <meta itemProp="telephone" content="+254757657217" />
            <meta itemProp="contactType" content="customer service" />
            <meta itemProp="areaServed" content="Kenya" />
            <meta itemProp="availableLanguage" content="English, Swahili" />
          </section>

          {/* Right Side: Static Contact Information & Map with Enhanced Schema */}
          <aside className="contact-info-section" aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading">Our Construction Company Information</h2>
            
            <div className="info-block" itemScope itemType="https://schema.org/PostalAddress">
              <h3>Nakuru Office Address</h3>
              <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">Greania Plaza, Gilgil Road</span><br />
                <span itemProp="addressLocality">Nakuru</span>, 
                <span itemProp="addressRegion"> Nakuru County</span><br />
                <span itemProp="postalCode">20100</span><br />
                <span itemProp="addressCountry">Kenya</span>
              </p>
              <p className="seo-service-note">
                <strong>Serving:</strong> Nakuru County, Nairobi, Kiambu, Kajiado, Machakos and nationwide
              </p>
            </div>

            <div className="info-block" itemScope itemType="https://schema.org/ContactPoint">
              <h3>Contact Details</h3>
              <p>
                <strong>Phone:</strong> <a href="tel:+254757657217" itemProp="telephone">+254 757 657 217</a><br />
                <strong>Email:</strong> <a href="mailto:info@greaniabuild.co.ke" itemProp="email">info@greaniabuild.co.ke</a><br />
                <strong>Sales:</strong> <a href="mailto:sales@greaniabuild.co.ke">sales@greaniabuild.co.ke</a>
              </p>
              <meta itemProp="contactType" content="customer service" />
              <meta itemProp="availableLanguage" content="English, Swahili" />
              <meta itemProp="areaServed" content="KE" />
            </div>

            <div className="info-block" itemScope itemType="https://schema.org/OpeningHoursSpecification">
              <h3>Business Hours</h3>
              <p>
                <span itemProp="dayOfWeek" content="Monday, Tuesday, Wednesday, Thursday, Friday">
                  Monday - Friday: <span itemProp="opens" content="08:00">8:00 AM</span> - <span itemProp="closes" content="17:00">5:00 PM</span><br />
                </span>
                <span itemProp="dayOfWeek" content="Saturday">
                  Saturday: 9:00 AM - 1:00 PM<br />
                </span>
                Sunday: Closed
              </p>
              <p className="seo-emergency-note">
                <strong>Emergency Construction Services:</strong> Available for urgent building needs
              </p>
            </div>

            {/* Embedded Map with Enhanced Schema */}
            <div className="map-container">
              <h3>Find Our Nakuru Office</h3>
              <iframe 
                title="Greania Build Construction Company Nakuru Office Location - Gilgil Road, Kenya"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.742345845786!2d36.07321531526192!3d-0.2829148354188666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTYnNTguNSJTIDM2wrAwNCczNS4yIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps showing Greania Build construction company office location on Gilgil Road, Nakuru, Kenya"
              >
              </iframe>
              <p className="seo-map-note">
                <strong>Construction Service Areas from Nakuru:</strong> We provide building, roofing and renovation services in 
                <strong> Nakuru County (Nakuru town, Gilgil, Naivasha, Molo)</strong>, 
                <strong> Nairobi</strong>, 
                <strong> Kiambu (Thika, Ruaka)</strong>, 
                <strong> Kajiado (Kitengela, Ongata Rongai)</strong>, 
                <strong> Machakos</strong> and throughout Kenya.
              </p>
            </div>
          </aside>
        </div>

        {/* Service Areas Section for SEO */}
        <section className="seo-service-areas" aria-label="Construction service areas in Kenya">
          <div className="container">
            <h2 className="visually-hidden">Greania Build Construction Service Areas in Kenya</h2>
            <div className="seo-areas-content">
              <p>
                <strong>Construction Services Available Throughout Kenya:</strong> Greania Build provides comprehensive 
                building, roofing, renovation and construction services from our Nakuru office serving 
                <strong> Nakuru County (Nakuru, Gilgil, Naivasha, Molo, Njoro)</strong>, 
                <strong> Nairobi County (Westlands, Karen, Runda, Lavington)</strong>, 
                <strong> Kiambu County (Thika, Ruaka, Limuru, Kikuyu)</strong>, 
                <strong> Kajiado County (Kitengela, Ongata Rongai, Kiserian)</strong>, 
                <strong> Machakos County</strong> and nationwide construction projects across Kenya.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Footer Content */}
        <footer className="contact-seo-footer">
          <div className="container">
            <div className="seo-footer-content">
              <h3 className="visually-hidden">Construction Contact Information Keywords</h3>
              <p className="seo-keyword-list">
                <strong>Construction Contact Kenya:</strong> Contact Construction Company Nakuru | Greania Build Phone Number Kenya | 
                Construction Office Nakuru Gilgil Road | Building Contractor Contact Kenya | Roofing Services Contact Nakuru | 
                Renovation Contractors Phone Number | Construction Consultation Free Kenya | Emergency Construction Services Nakuru | 
                Building Company Email Kenya | Construction Company Address Nakuru | Construction Service Areas Kenya | 
                Free Building Consultation Nakuru | Construction Project Inquiry Kenya | Building Services Contact Nairobi
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default ContactPage;