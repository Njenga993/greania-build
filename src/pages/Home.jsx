// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import HomeServices from '../components/HomeServices';
import HomeProjects from '../components/HomeProjects';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeContact from '../components/HomeContact';
import '../styles/home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Using the Hero component instead of duplicate hero section */}
      <Hero />

      {/* Quick Navigation */}
      <section className="home-nav-cards">
        <div className="cards-container">
          <Link to="/services" className="nav-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.586l6-6z"/>
                <path d="M12 17c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2z"/>
              </svg>
            </div>
            <h3>Our Services</h3>
            <p>Explore our comprehensive construction solutions</p>
          </Link>
          
          <Link to="/projects" className="nav-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM4 8h16v4h-6c-1.103 0-2 .897-2 2v4H4V8zm8 6v4h6v-4h-6z"/>
              </svg>
            </div>
            <h3>View Projects</h3>
            <p>See our portfolio of completed works</p>
          </Link>
          
          <Link to="/about" className="nav-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                <path d="M11 11h2v6h-2zm0-4h2v2h-2z"/>
              </svg>
            </div>
            <h3>About Us</h3>
            <p>Learn about our company and values</p>
          </Link>
          
          <Link to="/contact" className="nav-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
              </svg>
            </div>
            <h3>Contact</h3>
            <p>Get in touch with our team</p>
          </Link>
        </div>
      </section>
    <AboutSection/>
    <HomeServices/>
    <HomeProjects/>
    <HomeTestimonials/>
    <HomeContact/>
      {/* <FAQSection /> */}
    </div>
  );
}

export default Home;