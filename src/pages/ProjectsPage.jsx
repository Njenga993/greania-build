// src/pages/ProjectsPage.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HomeProjects from '../components/HomeProjects'; // Import the component
import HomeTestimonials from '../components/HomeTestimonials';
import { projectsData } from '../data/projects.jsx'; // Use the same data
import '../styles/home-projects.css';
import '../styles/projects-page.css';
import '../styles/home-testimonials.css';
import IMG from '/makueni.jpeg'

// Function to generate comprehensive project schemas using the same data structure
const generateProjectsSchema = (projects) => {
  return projects.map((project) => ({
    "@type": "CreativeWork",
    "@id": `https://greaniabuild.co.ke/projects#${project.slug}`,
    "name": project.title,
    "description": project.description,
    "image": `https://greaniabuild.co.ke${project.image}`,
    "url": `https://greaniabuild.co.ke/projects/${project.slug}`,
    "author": {
      "@type": "Organization",
      "name": "Greania Build Ltd",
      "url": "https://greaniabuild.co.ke/"
    },
    "dateCreated": project.date || new Date().toISOString().split('T')[0],
    "location": {
      "@type": "Place",
      "name": project.location || "Kenya",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KE"
      }
    },
    "about": {
      "@type": "Thing",
      "name": project.category || "Construction Project"
    }
  }));
};

// Function to generate FAQ schema for projects page
const generateProjectsFAQ = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of construction projects does Greania Build undertake in Kenya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We undertake residential, commercial, community, and sustainable construction projects across Kenya including mud houses, seedbanks, community centers, roofing projects, renovations, and green building solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas in Kenya have you completed construction projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We've completed projects in Nairobi, Kiambu, Kajiado, Machakos, Nakuru, and various other locations across Kenya. Our portfolio showcases diverse projects from urban Nairobi to rural communities."
        }
      },
      {
        "@type": "Question",
        "name": "How many projects has Greania Build completed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Since 2020, Greania Build has successfully completed over 200+ construction projects across Kenya with a 4.8-star client satisfaction rating and 98% on-time completion rate."
        }
      },
      {
        "@type": "Question",
        "name": "Can I see before and after photos of your construction projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many of our project case studies include before and after photos showing the transformation. Visit our project portfolio to see detailed case studies from across Kenya."
        }
      }
    ]
  };
};

// Main Projects page schema
const projectsPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://greaniabuild.co.ke/projects#webpage",
    "name": "Construction Projects Portfolio Kenya | Greania Build - Completed Works",
    "description": "Explore Greania Build's construction portfolio in Kenya: 200+ successful projects including sustainable building, roofing, renovations, mud houses & commercial construction across Nairobi, Kiambu, Kajiado.",
    "url": "https://greaniabuild.co.ke/projects",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://greaniabuild.co.ke/#website"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://greaniabuild.co.ke/assets/projects-hero.jpg",
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
          "name": "Construction Projects Portfolio Kenya",
          "item": "https://greaniabuild.co.ke/projects"
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Greania Build Construction Projects in Kenya",
      "description": "Complete portfolio of construction, building, and renovation projects completed across Kenya since 2020",
      "numberOfItems": projectsData.length,
      "itemListElement": generateProjectsSchema(projectsData)
    }
  }
];

// Extract unique categories from projectsData for filtering
const extractCategories = () => {
  const categories = ["All Projects"];
  projectsData.forEach(project => {
    if (project.category && !categories.includes(project.category)) {
      categories.push(project.category);
    }
  });
  return categories.slice(0, 8); // Limit to 8 categories including "All Projects"
};

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const projectCategories = extractCategories();

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All Projects") {
      return projectsData;
    }
    return projectsData.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  // Load more projects
  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 6, filteredProjects.length));
  };

  // Preload project images
  const preloadImages = [
    {
      src: "https://greaniabuild.co.ke/assets/projects-hero.jpg",
      srcSet: "https://greaniabuild.co.ke/assets/projects-hero.jpg 1200w, https://greaniabuild.co.ke/assets/projects-hero-mobile.jpg 600w",
      sizes: "(max-width: 768px) 100vw, 1200px"
    }
  ];

  // Project completion statistics
  const projectStats = {
    total: 200,
    residential: 120,
    commercial: 45,
    community: 35,
    rating: 4.8,
    onTime: 98
  };

  return (
    <>
      <SEO 
        title="Construction Projects Portfolio Kenya | Greania Build - 200+ Completed Works"
        description="Greania Build construction portfolio: View 200+ successful projects in Kenya including sustainable building, roofing, renovations, mud houses. Serving Nairobi, Kiambu, Kajiado & nationwide."
        keywords="construction projects Kenya, building portfolio Nairobi, roofing projects Kenya, renovation projects, completed works Kenya, sustainable construction projects, mud house projects Kenya, commercial construction Nairobi, before after construction, construction case studies Kenya"
        url="https://greaniabuild.co.ke/projects"
        image="https://greaniabuild.co.ke/assets/og-projects.jpg"
        pageSpecificSchema={projectsPageSchema}
        preloadImages={preloadImages}
        geo={{
          latitude: "-1.2921",
          longitude: "36.8219",
          placename: "Nairobi, Kenya"
        }}
      />
      
      <main className="projects-page" itemScope itemType="https://schema.org/CollectionPage">
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
                <span itemProp="name">Construction Projects Portfolio Kenya</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* SEO Header */}
        <header className="projects-seo-header">
          <div className="container">
            <h1 itemProp="name" className="projects-main-heading">
              Construction Projects Portfolio: <span className="brand-name">Greania Build</span> Kenya
            </h1>
            <p className="projects-subtitle" itemProp="description">
              Explore <strong>200+ successful construction projects</strong> completed across Kenya since 2020. 
              Featuring <strong>sustainable building, roofing, renovations, and commercial construction</strong> 
              in <strong>Nairobi, Kiambu, Kajiado, Machakos, Nakuru</strong> and nationwide.
            </p>
            <div className="project-stats">
              <div className="stat-item">
                <span className="stat-number">{projectStats.total}+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{projectStats.residential}</span>
                <span className="stat-label">Residential Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{projectStats.commercial}</span>
                <span className="stat-label">Commercial Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{projectStats.rating}★</span>
                <span className="stat-label">Client Rating</span>
              </div>
            </div>
          </div>
        </header>

        {/* Project Categories Filter */}
        <section className="project-categories" aria-labelledby="categories-heading">
          <div className="container">
            <h2 id="categories-heading" className="section-heading">
              Browse Projects by Category
            </h2>
            <p className="section-subtitle">
              Filter our construction portfolio by project type
            </p>
            <div className="category-filters">
              {projectCategories.map(category => (
                <button
                  key={category}
                  className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisibleProjects(6);
                  }}
                  aria-pressed={selectedCategory === category}
                >
                  {category === "All Projects" ? category : category.replace(" Projects", "")}
                  <span className="project-count">
                    {category === "All Projects" 
                      ? projectsData.length 
                      : projectsData.filter(p => p.category === category).length
                    }
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Locations Grid */}
        <section className="project-locations" aria-labelledby="locations-heading">
          <div className="container">
            <h2 id="locations-heading" className="section-heading">
              <span className="brand-name"> Projects Across Kenya</span>
            </h2>
            <div className="locations-grid">
              <div className="location-card">
                <h3>Nairobi County</h3>
                <p>45+ projects completed in Westlands, Karen, Runda, Lavington</p>
                <span className="project-count">45+</span>
              </div>
              <div className="location-card">
                <h3>Kiambu County</h3>
                <p>35+ projects in Thika, Ruaka, Limuru, Kikuyu</p>
                <span className="project-count">35+</span>
              </div>
              <div className="location-card">
                <h3>Kajiado County</h3>
                <p>25+ projects in Kitengela, Ongata Rongai, Kiserian</p>
                <span className="project-count">25+</span>
              </div>
              <div className="location-card">
                <h3>Other Areas</h3>
                <p>95+ projects across Machakos, Nakuru & nationwide</p>
                <span className="project-count">95+</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects List Section */}
        <section className="projects-list-section" aria-labelledby="projects-list-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="projects-list-heading" className="section-heading">
                {selectedCategory === "All Projects" 
                  ? "Featured Construction Projects in Kenya" 
                  : `${selectedCategory} in Kenya`
                }
              </h2>
              <p className="section-subtitle">
                Showing {Math.min(visibleProjects, filteredProjects.length)} of {filteredProjects.length} projects
                {selectedCategory !== "All Projects" && ` in ${selectedCategory}`}
              </p>
            </header>
            
            {/* Use the HomeProjects component structure but with filtered projects */}
            <div className="projects-grid">
              {filteredProjects.slice(0, visibleProjects).map((project) => (
                <article className="project-card" key={project.id} itemScope itemType="https://schema.org/CreativeWork">
                  <Link to={`/projects/${project.slug}`} className="project-image-link" itemProp="url">
                    <figure className="project-image">
                      <img 
                        src={project.image} 
                        alt={project.imageAlt || `${project.title} - Greania Build Kenya`} 
                        loading="lazy" 
                        itemProp="image"
                      />
                      <figcaption className="image-overlay">
                        <span className="project-category" itemProp="genre">
                          {project.icon} {project.category}
                        </span>
                      </figcaption>
                    </figure>
                  </Link>
                  
                  <div className="project-content">
                    <h3 itemProp="name">
                      <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p itemProp="description">{project.description}</p>
                    
                    {project.features && project.features.length > 0 && (
                      <ul className="project-features">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} itemProp="keywords">{feature}</li>
                        ))}
                      </ul>
                    )}
                    
                    <Link to={`/projects/${project.slug}`} className="view-more-btn" itemProp="url">
                      View Project Details
                    </Link>
                    
                    <meta itemProp="author" content="Greania Build Ltd" />
                    <meta itemProp="dateCreated" content={project.date || "2023"} />
                  </div>
                </article>
              ))}
            </div>
            
            {visibleProjects < filteredProjects.length && (
              <div className="load-more-container">
                <button onClick={loadMoreProjects} className="load-more-btn">
                  Load More Projects ({filteredProjects.length - visibleProjects} remaining)
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Featured Project Showcase */}
        <section className="featured-showcase" aria-labelledby="showcase-heading">
          <div className="container">
            <h2 id="showcase-heading" className="section-heading">
             <span className="brands-name">Featured Project: Sustainable Community Center </span>
            </h2>
            <div className="showcase-content">
              <div className="showcase-image">
                <img 
                  src={ IMG } 
                  alt="Sustainable Community Center project by Greania Build in Kenya"
                  loading="lazy"
                />
              </div>
              <div className="showcase-details">
                <h3>Project Highlights</h3>
                <ul className="showcase-features">
                  <li><strong>Location:</strong> Nairobi, Kenya</li>
                  <li><strong>Duration:</strong> 6 months</li>
                  <li><strong>Scope:</strong> 5000 sq ft community center</li>
                  <li><strong>Features:</strong> Solar power, rainwater harvesting, sustainable materials</li>
                  <li><strong>Impact:</strong> Serves 500+ community members</li>
                </ul>
                <Link to="/projects/sustainable-community-center" className="showcase-cta">
                  View Full Case Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery 
        <section className="before-after" aria-labelledby="before-after-heading">
          <div className="container">
            <h2 id="before-after-heading" className="section-heading">
              Construction Transformations
            </h2>
            <p className="section-subtitle">
              See the remarkable transformations from some of our renovation projects in Kenya
            </p>
            <div className="comparison-grid">
              <div className="comparison-item">
                <div className="comparison-image before">
                  <img src="https://greaniabuild.co.ke/assets/before-1.jpg" alt="Before: Old roofing structure in Kenya" loading="lazy" />
                  <span className="comparison-label">Before</span>
                </div>
                <div className="comparison-image after">
                  <img src="https://greaniabuild.co.ke/assets/after-1.jpg" alt="After: New sustainable roofing by Greania Build" loading="lazy" />
                  <span className="comparison-label">After</span>
                </div>
              </div>
              <div className="comparison-item">
                <div className="comparison-image before">
                  <img src="https://greaniabuild.co.ke/assets/before-2.jpg" alt="Before: Deteriorated mud house in rural Kenya" loading="lazy" />
                  <span className="comparison-label">Before</span>
                </div>
                <div className="comparison-image after">
                  <img src="https://greaniabuild.co.ke/assets/after-2.jpg" alt="After: Renovated modern mud house by Greania Build" loading="lazy" />
                  <span className="comparison-label">After</span>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

         
        <section className="testimonial-section" aria-labelledby="testimonials-heading">
          <div className="container">
            {/*<h2 id="testimonials-heading" className="section-heading">
              <span className="brand-name">   Client Testimonials from Our Projects </span>
            </h2>
            <p className="section-subtitle">
              What our clients say about working with Greania Build on their construction projects in Kenya
            </p>*/}
            <div className="testimonial-break">
              <HomeTestimonials />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="projects-faq" aria-labelledby="faq-heading">
          <div className="container">
            <h2 id="faq-heading" className="section-heading">
             <span className="brand-name">   Frequently Asked Questions About Our Projects </span>
            </h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How long does a typical construction project take?</h3>
                <p>Project timelines vary: renovations take 2-6 weeks, new residential construction 3-12 months, commercial projects 6-24 months. We provide detailed timelines during consultation.</p>
              </div>
              <div className="faq-item">
                <h3>Can you work within my budget?</h3>
                <p>Yes, we offer flexible solutions for various budgets. We provide transparent quotes and work with clients to achieve the best results within their financial constraints.</p>
              </div>
              <div className="faq-item">
                <h3>Do you provide project updates during construction?</h3>
                <p>Absolutely. We provide regular updates, photos, and progress reports throughout the construction process to keep you informed every step of the way.</p>
              </div>
              <div className="faq-item">
                <h3>What areas in Kenya do you serve?</h3>
                <p>We serve Nairobi, Kiambu, Kajiado, Machakos, Nakuru, and throughout Kenya with our construction services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading" className="section-heading">
              Ready to Start Your Construction Project in Kenya?
            </h2>
            <p>
              Join our portfolio of successful projects across Kenya. Contact us today for a free consultation 
              and let's build something amazing together.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Start Your Project
              </Link>
              <a href="tel:+254711234567" className="cta-button secondary">
                Call: +254 711 234 567
              </a>
            </div>
            <p className="cta-note">
              <strong>Free Consultation:</strong> Get expert advice for your construction project | 
              <strong> Portfolio:</strong> <Link to="/projects">View 200+ completed projects</Link>
            </p>
          </div>
        </section>

        {/* SEO Footer Content */}
        <footer className="projects-seo-footer">
          <div className="container">
            <div className="seo-footer-content">
              <h3 className="visually-hidden">Construction Portfolio Keywords</h3>
              <p className="seo-keyword-list">
                <strong>Construction Projects Kenya:</strong> Building Projects Portfolio Nairobi | Completed Construction Works Kenya | 
                Roofing Projects Kenya | Renovation Projects Nairobi | Sustainable Building Projects | Mud House Construction Kenya | 
                Commercial Construction Portfolio | Before After Construction Kenya | Construction Case Studies Nairobi | 
                Building Contractor Projects | Construction Company Portfolio Kenya | Green Building Projects Kenya
              </p>
            </div>
          </div>
        </footer>

        {/* Additional schema for FAQ */}
        <script type="application/ld+json">
          {JSON.stringify(generateProjectsFAQ())}
        </script>
      </main>
    </>
  );
}

export default ProjectsPage;