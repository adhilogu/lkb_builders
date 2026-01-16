export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  featuredImage: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "modern-architecture-trends-2024",
    title: "Modern Architecture Trends Shaping Luxury Homes in 2024",
    excerpt: "Explore the cutting-edge architectural trends that are redefining luxury residential construction, from biophilic design to smart home integration.",
    content: `The world of luxury residential architecture is evolving rapidly, with 2024 bringing exciting new trends that prioritize both aesthetics and functionality. At LKB Builders, we stay at the forefront of these developments to deliver homes that are not just beautiful, but also forward-thinking.

**Biophilic Design Integration**
One of the most significant trends is the seamless integration of nature into living spaces. This goes beyond simple indoor plants—we're talking about living walls, natural light optimization, and materials that connect residents with the natural world.

**Smart Home Technology**
Today's luxury homes are intelligent homes. From automated climate control to security systems that recognize residents, smart technology is becoming an essential element of modern construction.

**Sustainable Luxury**
Sustainability is no longer optional. High-end clients increasingly demand eco-friendly materials, energy-efficient systems, and designs that minimize environmental impact without compromising on luxury.

**Open Floor Plans with Purpose**
While open floor plans remain popular, there's a new emphasis on creating defined zones within open spaces, allowing for both connection and privacy.`,
    author: "Architect Priya Sharma",
    date: "January 10, 2024",
    category: "Architecture",
    featuredImage: "/project-1.jpg",
    readTime: "5 min read"
  },
  {
    id: "choosing-right-materials",
    title: "Choosing the Right Materials for Your Dream Home",
    excerpt: "A comprehensive guide to selecting premium materials that combine durability, aesthetics, and value for your custom home construction.",
    content: `Material selection is one of the most crucial decisions in home construction. The right choices can enhance your home's beauty, durability, and value for decades to come.

**Natural Stone**
From marble to granite, natural stone adds timeless elegance to any space. We source premium stones from the world's finest quarries to ensure exceptional quality.

**Engineered Wood**
Modern engineered wood offers the beauty of natural timber with enhanced durability and sustainability. It's an excellent choice for flooring, cabinetry, and structural elements.

**Glass and Glazing**
High-performance glass solutions provide stunning views while maintaining energy efficiency. We use triple-glazed windows in many of our projects for optimal insulation.

**Sustainable Options**
Bamboo, recycled materials, and locally-sourced products are increasingly popular among environmentally-conscious clients.`,
    author: "Rajesh Kumar",
    date: "January 5, 2024",
    category: "Materials",
    featuredImage: "/project-3.jpg",
    readTime: "4 min read"
  },
  {
    id: "interior-design-essentials",
    title: "Interior Design Essentials for Modern Luxury Living",
    excerpt: "Discover the key interior design principles that transform houses into extraordinary homes that reflect your personal style.",
    content: `Interior design is the art of creating spaces that are both beautiful and functional. Here are the essential principles that guide our approach to luxury interiors.

**Balance and Proportion**
Great design is about achieving visual balance. We carefully consider the scale of furniture, artwork, and architectural elements to create harmonious spaces.

**Color Psychology**
Colors profoundly impact how we feel in a space. We work with clients to develop color palettes that evoke the desired emotions—calm, energized, sophisticated, or cozy.

**Texture and Layering**
Texture adds depth and interest to interiors. We combine smooth and rough, matte and glossy, soft and hard elements to create rich, inviting spaces.

**Lighting Design**
Lighting can make or break a space. We design layered lighting schemes that combine ambient, task, and accent lighting for maximum flexibility and impact.`,
    author: "Interior Designer Meera Patel",
    date: "December 28, 2023",
    category: "Interior Design",
    featuredImage: "/gallery-1.jpg",
    readTime: "6 min read"
  },
  {
    id: "construction-timeline-expectations",
    title: "What to Expect: Your Luxury Home Construction Timeline",
    excerpt: "Understanding the phases of luxury home construction helps you plan and ensures a smooth building experience from groundbreaking to move-in.",
    content: `Building a luxury home is a significant investment of time and resources. Understanding the typical timeline helps set realistic expectations and ensures a smooth process.

**Pre-Construction Phase (2-4 months)**
This includes site analysis, architectural design, permit acquisition, and contractor selection. Thorough planning here prevents costly changes later.

**Foundation and Structure (3-4 months)**
The foundation is literally the base of your home. We take extra care during this phase, as any issues here can affect the entire structure.

**Mechanical Systems (2-3 months)**
Electrical, plumbing, and HVAC systems are installed. This is also when smart home infrastructure is integrated.

**Finishing Phase (3-4 months)**
This includes interior finishes, fixtures, landscaping, and final inspections. This is when your home truly comes to life.

**Total Timeline**
A typical luxury home takes 10-15 months to complete. Rush timelines often compromise quality—we recommend patience for the best results.`,
    author: "Project Manager Vikram Singh",
    date: "December 20, 2023",
    category: "Construction",
    featuredImage: "/construction-1.jpg",
    readTime: "7 min read"
  }
];

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogsByCategory = (category: string): BlogPost[] => {
  if (category === 'all') return blogPosts;
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};
