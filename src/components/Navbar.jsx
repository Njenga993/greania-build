// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '/cropped-greanialogo3-1.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-text">
            🚧 We Are Offering Special Discounts!{' '}
            <Link to="/contact" className="announcement-link">Contact Us Today!</Link>
          </span>
          <div className="announcement-contacts">
            <a href="tel:+254757657217" className="contact-link">
              <FaPhone /> +254 757 657 217
            </a>
            <a href="mailto:info@greaniabuild.co.ke" className="contact-link">
              <MdEmail /> info@greaniabuild.co.ke
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-left">
            <Link to="/" className="logo-link">
              <img 
                src= {logo}
                alt="Greania Build" 
                className="logo-img"
              />
            </Link>
          </div>

          <ul className="navbar-center">
            <li><NavLink to="/greania-build/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>

          <div className="navbar-right">
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
            <Link to="/contact" className="cta-button">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="hamburger-icon" 
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          <div className="mobile-menu-header">
            <img 
              src= {logo}
              alt="Greania Build" 
              className="mobile-logo"
            />
            <button 
              className="close-button" 
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <ul className="mobile-nav-links">
            <li><NavLink to="/greania-build/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>

          <div className="mobile-contact-info">
            <a href="tel:+254757657217" className="mobile-contact-link">
              <FaPhone /> +254 757 657 217
            </a>
            <a href="mailto:info@greaniabuild.com" className="mobile-contact-link">
              <MdEmail /> info@greaniabuild.com
            </a>
          </div>

          <div className="mobile-socials">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {menuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

// Custom NavLink component for active state styling
function NavLink({ to, children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={isActive ? 'nav-link active' : 'nav-link'}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default Navbar;