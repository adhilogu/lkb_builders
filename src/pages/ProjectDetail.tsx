import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Maximize, 
  Bed, 
  Bath, 
  Building2, 
  CheckCircle,
  Navigation,
  FileText
} from 'lucide-react';
import { useState } from 'react';
import { getProjectById, projects } from '@/data/projects';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import Lightbox from '@/components/Lightbox';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || '');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="btn-luxury px-6 py-3 rounded-full text-primary-foreground font-medium inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            <span className="relative z-10">Back to Projects</span>
          </Link>
        </div>
      </main>
    );
  }

  const galleryImages = project.images.map((src, index) => ({
    id: String(index),
    src,
    alt: `${project.name} - Image ${index + 1}`,
    category: 'interior' as const,
    title: `${project.name} - Image ${index + 1}`
  }));

  const relatedProjects = projects
    .filter(p => p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent mb-6 transition-colors"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </Link>

              <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
                project.status === 'ongoing' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'bg-primary-foreground text-primary'
              }`}>
                {project.status === 'ongoing' ? 'Ongoing Project' : 'Completed'}
              </div>

              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-primary-foreground mb-4">
                {project.name}
              </h1>

              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin size={18} />
                <span>{project.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-serif text-3xl font-bold mb-6">About This Project</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {project.fullDescription}
                </p>
              </ScrollReveal>

              {/* Gallery */}
              <ScrollReveal>
                <h3 className="font-serif text-2xl font-bold mb-6">Photo Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setLightboxOpen(true);
                      }}
                    >
                      <img
                        src={image}
                        alt={`${project.name} - ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize className="text-primary-foreground" size={24} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Highlights */}
              <ScrollReveal>
                <h3 className="font-serif text-2xl font-bold mb-6">Project Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {project.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-card card-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Amenities */}
              <ScrollReveal>
                <h3 className="font-serif text-2xl font-bold mb-6">Amenities & Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {project.amenities.map((amenity, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-xl bg-secondary text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm font-medium">{amenity}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Nearby Landmarks */}
              <ScrollReveal>
                <h3 className="font-serif text-2xl font-bold mb-6">Nearby Landmarks</h3>
                <div className="space-y-3 mb-12">
                  {project.nearbyLandmarks.map((landmark, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Navigation className="text-accent" size={18} />
                      <span className="text-muted-foreground">{landmark}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Map */}
              <ScrollReveal>
                <h3 className="font-serif text-2xl font-bold mb-6">Location</h3>
                <div className="rounded-xl overflow-hidden card-shadow h-80">
                  <iframe
                    src={project.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${project.name} Location`}
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <ScrollReveal direction="right">
                  <div className="p-8 rounded-2xl bg-card card-shadow border-gradient mb-8">
                    <h3 className="font-serif text-xl font-bold mb-6">Property Details</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-4 border-b border-border">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Maximize size={18} />
                          <span>Total Area</span>
                        </div>
                        <span className="font-semibold">{project.landInfo.totalArea}</span>
                      </div>

                      <div className="flex items-center justify-between pb-4 border-b border-border">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 size={18} />
                          <span>Built-up Area</span>
                        </div>
                        <span className="font-semibold">{project.landInfo.builtUpArea}</span>
                      </div>

                      <div className="flex items-center justify-between pb-4 border-b border-border">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 size={18} />
                          <span>Floors</span>
                        </div>
                        <span className="font-semibold">{project.landInfo.floors}</span>
                      </div>

                      <div className="flex items-center justify-between pb-4 border-b border-border">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Bed size={18} />
                          <span>Bedrooms</span>
                        </div>
                        <span className="font-semibold">{project.landInfo.bedrooms}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Bath size={18} />
                          <span>Bathrooms</span>
                        </div>
                        <span className="font-semibold">{project.landInfo.bathrooms}</span>
                      </div>
                    </div>

                    {project.completionDate && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="text-muted-foreground text-sm mb-1">Completed</div>
                        <div className="font-semibold">{project.completionDate}</div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                  <div className="p-8 rounded-2xl luxury-gradient text-primary-foreground">
                    <h3 className="font-serif text-xl font-bold mb-4">Interested in This Project?</h3>
                    <p className="text-primary-foreground/80 mb-6 text-sm">
                      Contact us to learn more or schedule a site visit.
                    </p>
                    <Link
                      to="/contact"
                      className="block w-full py-3 rounded-full bg-accent text-accent-foreground font-medium text-center hover:bg-accent/90 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </ScrollReveal>

                {project.layoutDiagram && (
                  <ScrollReveal direction="right" delay={0.3}>
                    <button className="mt-6 w-full py-4 rounded-xl border border-border flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
                      <FileText size={20} />
                      <span className="font-medium">View Layout Diagram</span>
                    </button>
                  </ScrollReveal>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-10 lg:py-10 warm-gradient">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold mb-12">Related Projects</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
        onNext={() => setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
      />
    </main>
  );
};

export default ProjectDetail;
