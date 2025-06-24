// src/components/Hero.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../styles/hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="tagline">Building Excellence Since 2020</div>
          <h1>Building Strong Foundations for a Better Tomorrow</h1>
          <p className="hero-description">
            At Greania Build Solutions, we turn architectural dreams into concrete realities — with expertise, integrity, and innovation. 
            Our award-winning team delivers exceptional construction services across residential, commercial, and infrastructure projects.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">96%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">ISO 9001</span>
              <span className="stat-label">Certified</span>
            </div>
          </div>

          <div className="hero-buttons">
            <Link to="/projects" className="btn primary">
              View Our Projects
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn secondary">
              Request a Quote
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 3H3v18h18V3zM8 12h8m-4 4V8"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            interval={5000}
            stopOnHover={false}
            transitionTime={800}
          >
            <div className="carousel-slide">
              <img src="/greania-build/image001.jpeg" alt="Roadwork construction" loading="lazy" />
              <div className="carousel-caption">
                <h3>Precision Road Construction</h3>
                <p>Connecting communities with durable and safe roads, built to last generations.</p>
                <Link to="/services/road-construction" className="caption-link">Learn More →</Link>
              </div>
            </div>
            <div className="carousel-slide">
              <img src="/greania-build/image001.jpeg" alt="Modern commercial building" loading="lazy" />
              <div className="carousel-caption">
                <h3>Modern Commercial Excellence</h3>
                <p>From blueprints to handover — we deliver business-ready spaces with style and structure.</p>
                <Link to="/services/commercial" className="caption-link">Learn More →</Link>
              </div>
            </div>
            <div className="carousel-slide">
              <img src="/greania-build/image002.jpeg" alt="Construction team at work" loading="lazy" />
              <div className="carousel-caption">
                <h3>Teamwork That Builds Nations</h3>
                <p>Our dedicated engineers and workers bring your vision to life with precision and care.</p>
                <Link to="/about/team" className="caption-link">Meet Our Team →</Link>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Hero;