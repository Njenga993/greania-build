import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HomeContact from '../components/HomeContact';
import '../styles/home-contact.css'; // For the component styles
import '../styles/contact-page.css'; // For the page layout styles

// Schema for Contact Page - Updated with your details
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Greania Build",
  "description": "Contact Greania Build for your sustainable construction needs in Kenya. Find our office location, phone number, email, and send us a message through our contact form.",
  "url": "https://greaniabuild.co.ke/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Greania Build Ltd",
    "url": "https://greaniabuild.co.ke/",
    "logo": "https://greaniabuild.co.ke/assets/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-757-657-217",
      "contactType": "customer service",
      "availableLanguage": ["English", "Swahili"],
      "email": "info@greaniabuild.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Greania Plaza, Gilgil Road",
      "addressLocality": "Nakuru",
      "addressRegion": "Nakuru County",
      "postalCode": "20100",
      "addressCountry": "KE"
    },
    "openingHours": "Mo-Fr 08:00-17:00, Sa 09:00-13:00",
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
        "name": "Contact",
        "item": "https://greaniabuild.co.ke/contact"
      }
    ]
  }
};

function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Greania Build | Get in Touch for Sustainable Construction in Kenya"
        description="Contact Greania Build for your sustainable construction needs in Kenya. Find our office location in Nakuru, phone number, email, and send us a message through our contact form."
        keywords="contact Greania Build, Greania Build phone, Greania Build email, construction company Kenya contact, sustainable construction contact Kenya"
        url="https://greaniabuild.co.ke/contact"
        pageSpecificSchema={contactPageSchema}
      />
      
      <main className="contact-page">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Contact</li>
            </ol>
          </div>
        </nav>

        {/* Contact Hero Section */}
        <section className="contact-hero" aria-labelledby="contact-hero-heading">
          <div className="container">
            <h1 id="contact-hero-heading">Get in Touch with Greania Build</h1>
            <p>
              We're ready to discuss your sustainable construction project. Whether you have a question, need a quote, or want to schedule a consultation, our team is here to help.
            </p>
          </div>
        </section>

        {/* Main Content Area: Form and Contact Info */}
        <div className="container contact-content-wrapper">
          {/* Left Side: The Contact Form Component */}
          <section className="contact-form-section" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading">Send Us a Message</h2>
            <p>
              Fill out the form below, and we'll get back to you as soon as possible, typically within 24 business hours.
            </p>
            <HomeContact />
          </section>

          {/* Right Side: Static Contact Information & Map */}
          <aside className="contact-info-section" aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading">Our Information</h2>
            
            <div className="info-block">
              <h3>Office Address</h3>
              <p>
                Greania Build Ltd<br />
                Greania Plaza, Gilgil Road<br />
                Nakuru, 20100<br />
                Kenya
              </p>
            </div>

            <div className="info-block">
              <h3>Contact Details</h3>
              <p>
                <strong>Phone:</strong> <a href="tel:+254757657217">+254 757 657 217</a><br />
                <strong>Email:</strong> <a href="mailto:info@greaniabuild.com">info@greaniabuild.com</a>
              </p>
            </div>

            <div className="info-block">
              <h3>Business Hours</h3>
              <p>
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
            </div>

            {/* Embedded Map */}
            <div className="map-container">
              <h3>Find Us</h3>
              <iframe 
                title="Greania Build Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.742345845786!2d36.07321531526192!3d-0.2829148354188666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTYnNTguNSJTIDM2wrAwNCczNS4yIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default ContactPage;