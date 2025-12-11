// src/data/services.jsx
import { 
  FaHome, 
  FaSeedling, 
  FaTree, 
  FaChurch, 
  FaBolt, 
  FaWater, 
  FaWarehouse, 
  FaHammer,
  FaTools
} from 'react-icons/fa';

export const servicesData = [
  {
    slug: "mud-house-construction",
    icon: <FaHome size={40} />,
    title: "Mud House Construction",
    description: "Sustainable and affordable housing solutions using locally sourced materials and traditional building techniques.",
    highlights: ["Eco-friendly materials", "Thermal efficiency", "Cultural preservation"]
  },
  {
    slug: "seedbank-development",
    icon: <FaSeedling size={40} />,
    title: "Seedbank Development",
    description: "Specialized construction of climate-controlled storage facilities to preserve indigenous seeds and support food security.",
    highlights: ["Climate control systems", "Pest management", "Training facilities"]
  },
  {
    slug: "natural-building",
    icon: <FaTree size={40} />,
    title: "Natural Building",
    description: "Construction using sustainable materials like bamboo, earth, and locally sourced timber for community spaces.",
    highlights: ["Bamboo construction", "Earth building", "Natural ventilation"]
  },
  {
    slug: "sacred-space-renovation",
    icon: <FaChurch size={40} />,
    title: "Sacred Space Renovation",
    description: "Respectful renovation and interior design for places of worship, creating welcoming spaces for communities.",
    highlights: ["Acoustic optimization", "Accessibility features", "Cultural sensitivity"]
  },
  {
    slug: "rural-electrification",
    icon: <FaBolt size={40} />,
    title: "Rural Electrification",
    description: "Installation of electrical systems in remote areas, connecting homes and facilities to reliable power sources.",
    highlights: ["Solar installations", "Grid connections", "Community training"]
  },
  {
    slug: "water-harvesting-systems",
    icon: <FaWater size={40} />,
    title: "Water Harvesting Systems",
    description: "Design and installation of rainwater collection and storage systems for communities facing water scarcity.",
    highlights: ["Rainwater collection", "Filtration systems", "Storage solutions"]
  },
  {
    slug: "community-storage",
    icon: <FaWarehouse size={40} />,
    title: "Community Storage",
    description: "Construction of storage facilities for agricultural produce to reduce post-harvest losses and support local economies.",
    highlights: ["Climate control", "Loading bays", "Security features"]
  },
  {
    slug: "small-scale-infrastructure",
    icon: <FaHammer size={40} />,
    title: "Small-Scale Infrastructure",
    description: "Essential community infrastructure like bridges, pathways, and public spaces that connect and serve local populations.",
    highlights: ["Footbridges", "Community centers", "Public spaces"]
  },
  {
    slug: "skills-training",
    icon: <FaTools size={40} />,
    title: "Skills Training",
    description: "Hands-on construction training programs that empower community members with practical building skills.",
    highlights: ["Apprenticeship programs", "Tool provision", "Certification"]
  }
];