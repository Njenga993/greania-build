// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import { 
  FaBars, 
  FaTimes, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaChevronDown,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';

// Import your logo (update the path if needed)
import logo from '/cropped-greanialogo3-1.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <a href="tel:+254757657217">+254 757 657 217</a>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:info@greaniabuild.co.ke">info@greaniabuild.co.ke</a>
              </div>
              
            </div>
            <div className="social-links">
              <a 
                href="https://facebook.com/greaniabuild" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://twitter.com/greaniabuild" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://instagram.com/greaniabuild" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com/company/greaniabuild" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://wa.me/254757657217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-container">
            {/* Logo */}
            <Link to="/" className="logo" onClick={closeMenu}>
              <img 
                src={logo} 
                alt="Greania Build - Construction Company Kenya" 
                className="logo-img"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-menu">
              <ul className="nav-list">
                <li>
                  <Link 
                    to="/" 
                    className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                </li>
                
                {/* Services Dropdown */}
                <li className="nav-dropdown">
                  <button 
                    className={`nav-link ${servicesOpen ? 'active' : ''}`}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    Services
                    <FaChevronDown className="dropdown-icon" />
                  </button>
                  <div className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
                    <Link to="/services" className="dropdown-item" onClick={closeMenu}>
                      <span className="dropdown-icon"></span>
                      <div>
                        <span className="dropdown-title">All Services</span>
                        <span className="dropdown-desc">Complete construction solutions</span>
                      </div>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link to="/services#sustainable" className="dropdown-item" onClick={closeMenu}>
                      <span className="dropdown-icon"></span>
                      <div>
                        <span className="dropdown-title">Sustainable Building</span>
                        <span className="dropdown-desc">Eco-friendly construction</span>
                      </div>
                    </Link>
                    <Link to="/services#roofing" className="dropdown-item" onClick={closeMenu}>
                      <span className="dropdown-icon"></span>
                      <div>
                        <span className="dropdown-title">Roofing Services</span>
                        <span className="dropdown-desc">Installation & repair</span>
                      </div>
                    </Link>
                    <Link to="/services#renovations" className="dropdown-item" onClick={closeMenu}>
                      <span className="dropdown-icon"></span>
                      <div>
                        <span className="dropdown-title">Renovations</span>
                        <span className="dropdown-desc">Home & commercial upgrades</span>
                      </div>
                    </Link>
                    <Link to="/services#interiors" className="dropdown-item" onClick={closeMenu}>
                      <span className="dropdown-icon"></span>
                      <div>
                        <span className="dropdown-title">Interior Design</span>
                        <span className="dropdown-desc">Modern living spaces</span>
                      </div>
                    </Link>
                  </div>
                </li>

                <li>
                  <Link 
                    to="/projects" 
                    className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="nav-actions">
              <a href="tel:+254757657217" className="phone-btn">
                <FaPhoneAlt />
                <span>Call Now</span>
              </a>
              <Link to="/contact" className="quote-btn">
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-toggle" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-header">
          <img 
            src={logo} 
            alt="Greania Build" 
            className="mobile-logo-img"
          />
          <button 
            className="mobile-close" 
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="mobile-content">
          <ul className="mobile-nav">
            <li>
              <Link 
                to="/" 
                className={`mobile-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`mobile-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`mobile-link ${isActive('/services') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`mobile-link ${isActive('/projects') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`mobile-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mobile-contact">
            <h3>Contact Us</h3>
            <a href="tel:+254757657217" className="mobile-contact-item">
              <FaPhoneAlt />
              <div>
                <span>+254 757 657 217</span>
                <small>Construction Hotline</small>
              </div>
            </a>
            <a href="mailto:info@greaniabuild.co.ke" className="mobile-contact-item">
              <FaEnvelope />
              <div>
                <span>info@greaniabuild.co.ke</span>
                <small>Email Response in 24h</small>
              </div>
            </a>
            <div className="mobile-contact-item">
              <FaMapMarkerAlt />
              <div>
                <span>Greania Plaza, Gilgil Road</span>
                <small>Nakuru, Kenya</small>
              </div>
            </div>
          </div>

          <div className="mobile-actions">
            <a href="https://wa.me/254757657217" className="mobile-whatsapp">
              <FaWhatsapp />
              <span>Chat on WhatsApp</span>
            </a>
            <Link to="/contact" className="mobile-quote" onClick={closeMenu}>
              Request Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;