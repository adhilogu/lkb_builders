import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Users,
  Home,
  Wrench,
  CheckCircle,
  Star,
  Building2,
  Hammer,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import IntroAnimation from '@/components/IntroAnimation';
import ScrollReveal from '@/components/ScrollReveal';
import StatCounter from '@/components/StatCounter';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const { scrollY } = useScroll();
 
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);
  const heroY = useTransform(scrollY, [0, 400], [0, 100]);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
  };

  const services = [
    {
      icon: Building2,
      title: 'Luxury Villas',
      description: 'Bespoke villa construction with premium finishes and modern architecture.',
    },
    {
      icon: Home,
      title: 'Modern Homes',
      description: 'Contemporary residential projects designed for the modern lifestyle.',
    },
    {
      icon: Hammer,
      title: 'Renovations',
      description: 'Transform existing spaces with our expert renovation services.',
    },
    {
      icon: Sparkles,
      title: 'Interior Design',
      description: 'Complete interior solutions that blend functionality with elegance.',
    },
  ];

  const values = [
    { icon: Award, title: 'Excellence', description: 'Uncompromising quality in every detail' },
    { icon: Users, title: 'Collaboration', description: 'Working closely with clients' },
    { icon: Wrench, title: 'Craftsmanship', description: 'Skilled artisans and premium materials' },
    { icon: CheckCircle, title: 'Integrity', description: 'Transparent and honest approach' },
  ];

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
     
      <main className={showIntro ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ scale: heroScale, y: heroY }}
          >
            <img
              src="/hero-home.jpg"
              alt="Luxury Modern Home"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-overlay" />
          </motion.div>

          <motion.div
            className="relative z-10 h-full flex items-center"
            style={{ opacity: heroOpacity }}
          >
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-accent border border-accent/30 rounded-full">
                    DESIGN • BUILD • ELEVATE
                  </span>
                </motion.div>

                <motion.h1
                  className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Building Dreams
                  <br />
                  <span className="text-gold-gradient">Into Reality</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-primary-foreground/80 mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  We craft exceptional homes with uncompromising quality,
                  innovative design, and meticulous attention to every detail.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  <Link
                    to="/projects"
                    className="btn-luxury px-8 py-4 rounded-full text-primary-foreground font-medium inline-flex items-center justify-center gap-2 group"
                  >
                    <span className="relative z-10">Explore Projects</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors inline-flex items-center justify-center"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center p-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <motion.div className="w-1 h-2 bg-accent rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section - WHITE */}
        <section className="py-20 bg-card border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter end={50} suffix="+" label="Projects Completed" />
              <StatCounter end={10} suffix="+" label="Years Experience" />
              <StatCounter end={50} suffix="+" label="Expert Craftsmen" />
              <StatCounter end={100} suffix="%" label="Client Satisfaction" />
            </div>
          </div>
        </section>

        {/* About Section - WHITE (WHO WE ARE) */}
        <section className="py-20 lg:py-15">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="relative z-10 rounded-2xl overflow-hidden card-shadow">
                    <img
                      src="/project-1.jpg"
                      alt="LKB Builders Work"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-2xl overflow-hidden border-4 border-background card-shadow hidden lg:block">
                    <img
                      src="/construction-1.jpg"
                      alt="Construction in Progress"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 gold-gradient rounded-full blur-2xl opacity-50" />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div>
                  <span className="text-accent font-medium tracking-wider text-sm mb-4 block">
                    WHO WE ARE
                  </span>
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                    Crafting <span className="text-gradient">Exceptional</span> Homes Since 2010
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    At LKB Builders, we understand that a home is more than just a structure—it's where
                    life's most precious moments unfold. For over 15 years, we've been transforming
                    architectural visions into stunning realities.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Our commitment to excellence, combined with skilled craftsmanship and attention
                    to detail, has made us one of the most trusted names in luxury home construction.
                    Every project we undertake is a testament to our dedication to quality and
                    client satisfaction.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-accent font-medium group"
                  >
                    Learn More About Us
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Section - BROWN (WHAT WE DO) */}
        <section className="py-20 lg:py-15 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-accent font-medium tracking-wider text-sm mb-4 block">
                  WHAT WE DO
                </span>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="text-accent">Services</span>
                </h2>
                <p className="text-primary-foreground/70 text-lg">
                  From concept to completion, we provide comprehensive construction services
                  tailored to your unique vision.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 0.1}>
                  <div className="group p-8 rounded-2xl bg-primary-foreground/5 hover:luxury-gradient card-shadow hover:glow-shadow transition-all duration-500 border border-primary-foreground/10 h-full cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 transition-all duration-500">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary-foreground ">{service.title}</h3>
                    <p className="text-primary-foreground/80">{service.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects - WHITE (OUR PORTFOLIO) */}
        <section className="py-10 lg:py-15">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div>
                  <span className="text-accent font-medium tracking-wider text-sm mb-4 block">
                    OUR PORTFOLIO
                  </span>
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold">
                    Featured <span className="text-gradient">Projects</span>
                  </h2>
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-accent font-medium group"
                >
                  View All Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="h-full hover:scale-105 transition-all duration-500">
                  <div className="h-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5),0_0_50px_rgba(212,175,55,0.3)] transition-all duration-500 rounded-2xl">
                    <ProjectCard project={project} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - BROWN (OUR PHILOSOPHY) */}
        <section className="py-10 lg:py-10 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <span className="text-accent font-medium tracking-wider text-sm mb-4 block">
                    OUR PHILOSOPHY
                  </span>
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                    Values That <span className="text-accent">Define</span> Us
                  </h2>
                  <p className="text-primary-foreground/70 text-lg mb-8">
                    Our core values guide every decision we make, ensuring that each project
                    we undertake reflects our unwavering commitment to excellence.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {values.map((value, index) => (
                      <motion.div
                        key={value.title}
                        className="flex gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                          <value.icon className="text-accent" size={22} />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{value.title}</h4>
                          <p className="text-primary-foreground/60 text-sm">{value.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="rounded-2xl overflow-hidden h-48">
                        <img src="/project-2.jpg" alt="Project" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="rounded-2xl overflow-hidden h-64">
                        <img src="/gallery-1.jpg" alt="Interior" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="rounded-2xl overflow-hidden h-64">
                        <img src="/project-3.jpg" alt="Kitchen" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="rounded-2xl overflow-hidden h-48">
                        <img src="/gallery-2.jpg" alt="Office" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      
        {/* CTA Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/project-4.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Build Your <span className="text-accent">Dream Home</span>?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and bring it to life with our expertise in luxury construction.
              </p>
              <Link
                to="/contact"
                className="btn-luxury px-10 py-4 rounded-full text-primary-foreground font-medium inline-flex items-center gap-2 group"
              >
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;