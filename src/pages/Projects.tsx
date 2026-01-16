import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import { projects, getAllLocations } from '@/data/projects';

const Projects = () => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'ongoing' | 'completed'>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');

  const locations = useMemo(() => getAllLocations(), []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const statusMatch = statusFilter === 'all' || project.status === statusFilter;
      const locationMatch = locationFilter === 'all' || project.location === locationFilter;
      return statusMatch && locationMatch;
    });
  }, [statusFilter, locationFilter]);

  const statusOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'ongoing', label: 'Ongoing' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/project-2.jpg"
            alt="Our Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium tracking-wider text-sm mb-4 block">
              OUR PORTFOLIO
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Explore our portfolio of luxury homes and ongoing developments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
     <section className="py-10 md:py-7 bg-card border-b border-border/50 sticky top-12 z-20 glass-effect flex items-center">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-center md:space-x-6">
            
            {/* First Row: Filter Label + Status Buttons */}
            <div className="flex flex-wrap items-center gap-3 md:gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter size={18} className="md:w-5 md:h-5" />
                <span className="font-medium text-sm md:text-base">Filter By:</span>
              </div>

              {/* Status Filter */}
              <div className="flex flex-wrap gap-2">
                {statusOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setStatusFilter(option.value as typeof statusFilter)}
                    className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                      statusFilter === option.value
                        ? 'luxury-gradient text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Second Row (Mobile Only): Location Filter */}
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-xs md:text-sm">Location:</span>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-secondary text-secondary-foreground text-xs md:text-sm font-medium border-0 focus:ring-2 focus:ring-accent"
              >
                <option value="all">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 lg:py-10">
        <div className="container mx-auto px-8">
          {filteredProjects.length > 0 ? (
            <>
              <div className="mb-8 text-muted-foreground">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredProjects.map((project, index) => (
                  <div key={project.id} className="h-full hover:scale-105 transition-all duration-500">
                    <div className="h-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5),0_0_50px_rgba(212,175,55,0.3)] transition-all duration-500 rounded-2xl">
                      <ProjectCard project={project} index={index} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-serif text-2xl font-semibold mb-4">No projects found</h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your filters to see more projects.
              </p>
              <button
                onClick={() => {
                  setStatusFilter('all');
                  setLocationFilter('all');
                }}
                className="btn-luxury px-6 py-3 rounded-full text-primary-foreground font-medium"
              >
                <span className="relative z-10">Reset Filters</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-10 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-3">
                  Have a Project in Mind?
                </h2>
                <p className="text-primary-foreground/70 max-w-xl">
                  Let's discuss how we can bring your dream home to life with our expertise and dedication.
                </p>
              </div>
              <div className="md:flex-shrink-0">
                <a
                  href="https://wa.me/919843799917?text=Hi%2C%20I%20would%20like%20to%20discuss%20regarding%20my%20new%20dream%20home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors inline-block"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
};

export default Projects;
