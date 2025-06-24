import React from 'react';
import AboutSection from '../components/AboutSection';
import '../styles/about-page.css';

function About() {
  return (
    <main className="about-page">
      <AboutSection />

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Greania Build Solutions?</h2>
          <div className="features">
            <div className="feature-card">
              <h3>Certified Experts</h3>
              <p>Our team consists of licensed professionals with years of experience in every construction discipline.</p>
            </div>
            <div className="feature-card">
              <h3>Client-Centered Approach</h3>
              <p>We prioritize your goals, budget, and satisfaction — every step of the way.</p>
            </div>
            <div className="feature-card">
              <h3>Proven Track Record</h3>
              <p>From roads to residential homes, our portfolio showcases a legacy of trust and performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team">
        <div className="container">
          <h2>Meet Our Leadership Team</h2>
          <p className="team-intro">
            Greania Build Solutions is driven by a passionate team of engineers, project managers, and innovators committed to delivering excellence.
          </p>
          <div className="team-cards">
            <div className="team-member">
              <div className="photo-placeholder">CEO</div>
              <h4>John Mwangi</h4>
              <p>Founder & Chief Executive Officer</p>
            </div>
            <div className="team-member">
              <div className="photo-placeholder">CTO</div>
              <h4>Grace Wambui</h4>
              <p>Head of Technical Operations</p>
            </div>
            <div className="team-member">
              <div className="photo-placeholder">PM</div>
              <h4>Kevin Otieno</h4>
              <p>Senior Project Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="milestones">
        <div className="container">
          <h2>Our Journey</h2>
          <ul className="timeline">
            <li>
              <span className="year">2020</span>
              <p>Greania Build Solutions was founded and completed its first residential project.</p>
            </li>
            <li>
              <span className="year">2021</span>
              <p>Expanded into commercial construction and secured 10+ new contracts.</p>
            </li>
            <li>
              <span className="year">2022</span>
              <p>Introduced civil engineering division and roadworks expertise.</p>
            </li>
            <li>
              <span className="year">2023</span>
              <p>Opened a second regional office and hit 100+ completed projects.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default About;
