export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'interior' | 'exterior' | 'progress' | 'completed';
  title: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/project-1.jpg",
    alt: "Luxury living room interior",
    category: "interior",
    title: "Contemporary Living Space"
  },
  {
    id: "2",
    src: "/project-2.jpg",
    alt: "Modern villa exterior with pool",
    category: "exterior",
    title: "Azure Heights Villa"
  },
  {
    id: "3",
    src: "/project-3.jpg",
    alt: "Designer kitchen with marble countertops",
    category: "interior",
    title: "Gourmet Kitchen"
  },
  {
    id: "4",
    src: "/project-4.jpg",
    alt: "Luxury bedroom with panoramic views",
    category: "interior",
    title: "Master Suite"
  },
  {
    id: "5",
    src: "/construction-1.jpg",
    alt: "Construction site progress",
    category: "progress",
    title: "Harmony Haven - In Progress"
  },
  {
    id: "6",
    src: "/gallery-1.jpg",
    alt: "Elegant marble bathroom",
    category: "interior",
    title: "Spa Bathroom"
  },
  {
    id: "7",
    src: "/gallery-2.jpg",
    alt: "Home office with library",
    category: "interior",
    title: "Executive Study"
  },
  {
    id: "8",
    src: "/hero-home.jpg",
    alt: "Completed luxury villa exterior",
    category: "completed",
    title: "Serene Villa - Completed"
  }
];

export const getGalleryByCategory = (category: string): GalleryImage[] => {
  if (category === 'all') return galleryImages;
  return galleryImages.filter(img => img.category === category);
};
