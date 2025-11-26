import React from 'react';
import '../styles/services-page.css';
import { 
  FaHome, 
  FaSeedling, 
  FaTree, 
  FaChurch, 
  FaBolt, 
  FaWater, 
  FaWarehouse, 
  FaHammer,
  FaTools,
  FaHandshake
} from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaHome size={40} />,
      title: "Mud House Construction",
      description: "Sustainable and affordable housing solutions using locally sourced materials and traditional building techniques.",
      highlights: ["Eco-friendly materials", "Thermal efficiency", "Cultural preservation"]
    },
    {
      icon: <FaSeedling size={40} />,
      title: "Seedbank Development",
      description: "Specialized construction of climate-controlled storage facilities to preserve indigenous seeds and support food security.",
      highlights: ["Climate control systems", "Pest management", "Training facilities"]
    },
    {
      icon: <FaTree size={40} />,
      title: "Natural Building",
      description: "Construction using sustainable materials like bamboo, earth, and locally sourced timber for community spaces.",
      highlights: ["Bamboo construction", "Earth building", "Natural ventilation"]
    },
    {
      icon: <FaChurch size={40} />,
      title: "Sacred Space Renovation",
      description: "Respectful renovation and interior design for places of worship, creating welcoming spaces for communities.",
      highlights: ["Acoustic optimization", "Accessibility features", "Cultural sensitivity"]
    },
    {
      icon: <FaBolt size={40} />,
      title: "Rural Electrification",
      description: "Installation of electrical systems in remote areas, connecting homes and facilities to reliable power sources.",
      highlights: ["Solar installations", "Grid connections", "Community training"]
    },
    {
      icon: <FaWater size={40} />,
      title: "Water Harvesting Systems",
      description: "Design and installation of rainwater collection and storage systems for communities facing water scarcity.",
      highlights: ["Rainwater collection", "Filtration systems", "Storage solutions"]
    },
    {
      icon: <FaWarehouse size={40} />,
      title: "Community Storage",
      description: "Construction of storage facilities for agricultural produce to reduce post-harvest losses and support local economies.",
      highlights: ["Climate control", "Loading bays", "Security features"]
    },
    {
      icon: <FaHammer size={40} />,
      title: "Small-Scale Infrastructure",
      description: "Essential community infrastructure like bridges, pathways, and public spaces that connect and serve local populations.",
      highlights: ["Footbridges", "Community centers", "Public spaces"]
    },
    {
      icon: <FaTools size={40} />,
      title: "Skills Training",
      description: "Hands-on construction training programs that empower community members with practical building skills.",
      highlights: ["Apprenticeship programs", "Tool provision", "Certification"]
    }
  ];

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="sercivehero-content">
          <h1>Our Community Services</h1>
          <p>
            Greania Build Solutions offers a comprehensive range of community-focused construction services that preserve cultural heritage while embracing sustainable practices. Discover how we can strengthen your community together.
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon" style={{ color: index % 2 === 0 ? '#004d40' : '#ffc107' }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-highlights">
                {service.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Services;