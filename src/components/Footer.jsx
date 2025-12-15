// src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaChevronDown, 
  FaChevronUp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import logo from '/cropped-greanialogo3-1.png';

function Footer() {
  const [expandedSections, setExpandedSections] = useState({
    faq: false,
    links: false,
    legal: false
  });

  const faqs = [
    { question: "What services does Greania Build offer?", answer: "We offer general construction, project management, renovations, and design-build solutions." },
    { question: "Where are you located?", answer: "Our offices are in Gilgil Nakuru, Kenya. We serve clients across East Africa." },
    { question: "How can I request a quotation?", answer: "You can use the Contact page or call us directly for a personalized quotation." },
    { question: "Do you offer site supervision?", answer: "Yes, we provide on-site supervision for all our projects." },
    { question: "What makes Greania Build different?", answer: "We combine integrity, professionalism, and innovation to deliver top-tier results." },
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <img src= {logo} alt="Greania Build" />
            </div>
            <p className="footer-mission">
              Building the future with integrity and excellence. We transform visions into strong foundations.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+254 757 657 217</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@greaniabuild.co.ke
                </span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Gilgil, Nakuru, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <div 
              className="footer-section-header" 
              onClick={() => toggleSection('links')}
            >
              <h3>Quick Links</h3>
              <span className="toggle-icon">
                {expandedSections.links ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div className={`footer-section-content ${expandedSections.links ? 'expanded' : ''}`}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="footer-links-section">
            <div 
              className="footer-section-header" 
              onClick={() => toggleSection('legal')}
            >
              <h3>Legal</h3>
              <span className="toggle-icon">
                {expandedSections.legal ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div className={`footer-section-content ${expandedSections.legal ? 'expanded' : ''}`}>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/transparency">Transparency</Link></li>
                <li><Link to="/sitemap">Site Map</Link></li>
                <li><Link to="/cookies">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
              />
              <button type="submit">
                Subscribe
              </button>
            </form>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="footer-faq">
          <div 
            className="faq-header" 
            onClick={() => toggleSection('faq')}
          >
            <h3>Frequently Asked Questions</h3>
            <span className="toggle-icon">
              {expandedSections.faq ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          <div className={`faq-content ${expandedSections.faq ? 'expanded' : ''}`}>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">{faq.question}</div>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Greania Build Solutions. All rights reserved.
          </p>
          <p className="credits">
            Designed & Developed by <Link to="https://njenga993.github.io/kspace/">K-space  </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;