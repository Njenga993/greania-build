// src/data/projects.js
import { FaBuilding, FaHome, FaSeedling, FaTree, FaChurch, FaBolt, FaWarehouse, FaWater } from 'react-icons/fa';

// Note: Update these image paths to your actual public assets folder
import turkanaImg from "/turkana.jpeg";
import kakumaImg from "/kakuma.jpeg";
import makueniImg from "/makueni.jpeg";
import westernImg from "/western.jpeg";
import churchImg from "/church.jpeg";
import solarImg from "/eco-friendly-solar-panels-in-sunlit-landscape-321030.jpg";
import tankImg from "/stacked-shipping-containers-in-a-freight-yard-332307.jpg";
import waterImg from "/efficient-water-pump-in-action-356516.jpg";

export const projectsData = [
  {
    id: 1,
    slug: "mud-houses-initiative",
    title: "Mud Houses Initiative",
    category: "Community",
    image: turkanaImg,
    imageAlt: "Sustainable mud houses constructed in Turkana County",
    description: "Construction of 10 sustainable mud houses for local families in Turkana County, using locally sourced materials and traditional building techniques.",
    features: ["Eco-friendly materials", "10 family homes", "Water harvesting systems"],
    icon: <FaHome />
  },
  {
    id: 2,
    slug: "seedbank-project",
    title: "Seedbank Project",
    category: "Agricultural",
    image: kakumaImg,
    imageAlt: "Community seedbank facility in Turkana County",
    description: "Establishment of a community seedbank to preserve indigenous seeds and support food security in Turkana County.",
    features: ["Climate-controlled storage", "Training facility", "Local seed varieties"],
    icon: <FaSeedling />
  },
  {
    id: 3,
    slug: "natural-structures",
    title: "Natural Structures",
    category: "Eco-Construction",
    image: makueniImg,
    imageAlt: "Community spaces built with natural materials in Makueni",
    description: "Building of community spaces using natural materials and sustainable techniques in Makueni County.",
    features: ["Bamboo construction", "Natural ventilation", "Rainwater collection"],
    icon: <FaTree />
  },
  {
    id: 4,
    slug: "eco-center",
    title: "Eco-Center",
    category: "Community",
    image: westernImg,
    imageAlt: "Sustainable community center in Embu",
    description: "Development of a community center in Embu using natural building methods and renewable energy.",
    features: ["Solar power", "Natural materials", "Community workshops"],
    icon: <FaBuilding />
  },
  {
    id: 5,
    slug: "local-church-interior",
    title: "Local Church Interior Design",
    category: "Interior",
    image: churchImg,
    imageAlt: "Interior of a renovated local church with custom woodwork",
    description: "Interior renovation and design of a local church, creating a welcoming space for worship and community gatherings.",
    features: ["Custom woodwork", "Improved acoustics", "Accessible design"],
    icon: <FaChurch />
  },
  {
    id: 6,
    slug: "rural-electrification",
    title: "Rural Electrification Project",
    category: "Infrastructure",
    image: solarImg,
    imageAlt: "Solar panel installation for rural electrification",
    description: "Installation of electricity systems in rural communities, connecting homes and facilities to reliable power sources.",
    features: ["Solar installations", "Wiring for 50 homes", "Community training"],
    icon: <FaBolt />
  },
  {
    id: 7,
    slug: "community-storage-facility",
    title: "Community Storage Facility",
    category: "Agricultural",
    image: tankImg,
    imageAlt: "Modern agricultural storage facility with climate control",
    description: "Construction of a modern storage facility for agricultural produce to reduce post-harvest losses.",
    features: ["Climate control", "Pest management", "Loading bays"],
    icon: <FaWarehouse />
  },
  {
    id: 8,
    slug: "water-harvesting-systems",
    title: "Water Harvesting Systems",
    category: "Infrastructure",
    image: waterImg,
    imageAlt: "Rainwater harvesting and storage system installation",
    description: "Installation of water harvesting and storage systems for communities facing water scarcity.",
    features: ["Rainwater collection", "Filtration systems", "Storage tanks"],
    icon: <FaWater />
  }
];