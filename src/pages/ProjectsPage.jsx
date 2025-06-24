import React from 'react';
import '../styles/home-projects.css';
import '../styles/home-testimonials.css';
import HomeProjects from '../components/HomeProjects';
import HomeTestimonials from '../components/HomeTestimonials';

function ProjectsPage() {
  return (
    <main>
      <HomeProjects />

      <div className="testimonial-break">
        <HomeTestimonials />
      </div>
    </main>
  );
}

export default ProjectsPage;
