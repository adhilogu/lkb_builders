export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  status: 'ongoing' | 'completed';
  location: string;
  thumbnail: string;
  images: string[];
  amenities: string[];
  landInfo: {
    totalArea: string;
    builtUpArea: string;
    floors: number;
    bedrooms: number;
    bathrooms: number;
  };
  highlights: string[];
  nearbyLandmarks: string[];
  mapEmbedUrl: string;
  layoutDiagram?: string;
  completionDate?: string;
}

export const projects: Project[] = [
  {
    id: "serene-villa",
    name: "Serene Villa",
    shortDescription: "A luxurious 4-bedroom contemporary villa with panoramic views",
    fullDescription: "Serene Villa represents the pinnacle of modern luxury living. This meticulously crafted 4-bedroom residence combines contemporary architecture with natural elements, creating a harmonious living space that connects seamlessly with its surroundings. Every detail has been thoughtfully designed to maximize comfort, functionality, and aesthetic appeal.",
    status: "completed",
    location: "Whitefield, Bangalore",
    thumbnail: "/project-1.jpg",
    images: ["/project-1.jpg", "/gallery-1.jpg", "/gallery-2.jpg"],
    amenities: [
      "Private Swimming Pool",
      "Home Theater",
      "Smart Home Automation",
      "Landscaped Garden",
      "Double-height Living Room",
      "Italian Marble Flooring",
      "Modular Kitchen",
      "Private Terrace"
    ],
    landInfo: {
      totalArea: "4,500 sq ft",
      builtUpArea: "6,200 sq ft",
      floors: 2,
      bedrooms: 4,
      bathrooms: 5
    },
    highlights: [
      "Award-winning contemporary design",
      "Premium German fittings throughout",
      "Energy-efficient design with solar panels",
      "Rainwater harvesting system",
      "24/7 security with CCTV surveillance"
    ],
    nearbyLandmarks: [
      "International Tech Park - 2 km",
      "Phoenix Marketcity - 5 km",
      "Manipal Hospital - 3 km",
      "Whitefield Metro Station - 1.5 km"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4!2d77.7!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    completionDate: "December 2024"
  },
  {
    id: "azure-heights",
    name: "Azure Heights",
    shortDescription: "Modern 3-floor luxury residence with pool and entertainment deck",
    fullDescription: "Azure Heights is a testament to architectural excellence, featuring a striking three-story design that maximizes space and light. This modern masterpiece offers an unparalleled living experience with its rooftop pool, entertainment deck, and panoramic city views. The residence seamlessly blends indoor and outdoor spaces, creating an oasis of tranquility in the heart of the city.",
    status: "ongoing",
    location: "Indiranagar, Bangalore",
    thumbnail: "/project-2.jpg",
    images: ["/project-2.jpg", "/project-3.jpg", "/project-4.jpg"],
    amenities: [
      "Rooftop Infinity Pool",
      "Entertainment Deck",
      "Elevator",
      "Basement Parking",
      "Wine Cellar",
      "Home Gym",
      "Japanese Garden",
      "Smart Security System"
    ],
    landInfo: {
      totalArea: "3,200 sq ft",
      builtUpArea: "7,500 sq ft",
      floors: 3,
      bedrooms: 5,
      bathrooms: 6
    },
    highlights: [
      "Triple-height entrance lobby",
      "Floor-to-ceiling windows",
      "Imported fixtures from Italy",
      "Central air conditioning",
      "Backup power generator"
    ],
    nearbyLandmarks: [
      "100 Feet Road - 0.5 km",
      "Indiranagar Metro Station - 1 km",
      "CMH Road - 2 km",
      "Domlur - 3 km"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567891"
  },
  {
    id: "harmony-haven",
    name: "Harmony Haven",
    shortDescription: "Eco-friendly smart home with sustainable architecture",
    fullDescription: "Harmony Haven represents our commitment to sustainable luxury living. This innovative residence incorporates cutting-edge green building technologies while maintaining the highest standards of comfort and elegance. From solar power to rainwater harvesting, every element has been designed with environmental consciousness in mind.",
    status: "ongoing",
    location: "Koramangala, Bangalore",
    thumbnail: "/project-3.jpg",
    images: ["/project-3.jpg", "/gallery-1.jpg", "/construction-1.jpg"],
    amenities: [
      "Solar Power System",
      "Green Roof Garden",
      "EV Charging Station",
      "Smart Home System",
      "Natural Ventilation Design",
      "Organic Kitchen Garden",
      "Meditation Room",
      "Home Office"
    ],
    landInfo: {
      totalArea: "2,800 sq ft",
      builtUpArea: "4,800 sq ft",
      floors: 2,
      bedrooms: 3,
      bathrooms: 4
    },
    highlights: [
      "LEED Platinum certified design",
      "70% reduction in energy consumption",
      "Recycled and sustainable materials",
      "Biophilic design elements",
      "Natural cooling system"
    ],
    nearbyLandmarks: [
      "Forum Mall - 2 km",
      "Sony World Junction - 1.5 km",
      "Koramangala Indoor Stadium - 1 km",
      "St. John's Hospital - 3 km"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.6!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567892"
  },
  {
    id: "imperial-manor",
    name: "Imperial Manor",
    shortDescription: "Classical European-inspired mansion with modern amenities",
    fullDescription: "Imperial Manor brings timeless European elegance to contemporary living. This magnificent residence features classical architectural elements including grand columns, ornate moldings, and a sweeping staircase, all seamlessly integrated with modern comforts and smart home technology. A true masterpiece for those who appreciate refined luxury.",
    status: "completed",
    location: "Sadashivanagar, Bangalore",
    thumbnail: "/project-4.jpg",
    images: ["/project-4.jpg", "/gallery-2.jpg", "/project-1.jpg"],
    amenities: [
      "Grand Ballroom",
      "Library",
      "Indoor Swimming Pool",
      "Staff Quarters",
      "Wine Tasting Room",
      "Private Chapel",
      "Formal Dining Hall",
      "Butler's Pantry"
    ],
    landInfo: {
      totalArea: "8,000 sq ft",
      builtUpArea: "12,500 sq ft",
      floors: 3,
      bedrooms: 7,
      bathrooms: 9
    },
    highlights: [
      "Hand-crafted European woodwork",
      "Crystal chandeliers from Italy",
      "Heated marble floors",
      "Private art gallery",
      "Temperature-controlled wine cellar"
    ],
    nearbyLandmarks: [
      "Palace Grounds - 1 km",
      "Sankey Tank - 2 km",
      "Malleshwaram - 3 km",
      "Raj Bhavan - 2 km"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d77.5!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567893",
    completionDate: "August 2024"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByStatus = (status: 'ongoing' | 'completed' | 'all'): Project[] => {
  if (status === 'all') return projects;
  return projects.filter(project => project.status === status);
};

export const getProjectsByLocation = (location: string): Project[] => {
  return projects.filter(project => 
    project.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getAllLocations = (): string[] => {
  const locations = projects.map(p => p.location);
  return [...new Set(locations)];
};
