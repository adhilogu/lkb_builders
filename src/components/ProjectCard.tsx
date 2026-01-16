import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link to={`/projects/${project.id}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl card-shadow bg-card">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            
            {/* Status Badge */}
            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'ongoing' 
                ? 'bg-accent text-accent-foreground' 
                : 'bg-primary text-primary-foreground'
            }`}>
              {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <MapPin size={14} />
              <span>{project.location}</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
              {project.shortDescription}
            </p>
            <div className="flex items-center text-accent font-medium text-sm group-hover:gap-3 gap-2 transition-all">
              View Details
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
