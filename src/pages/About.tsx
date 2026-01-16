import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Target, 
  Heart,
  Lightbulb,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import StatCounter from '@/components/StatCounter';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description: 'We never cut corners. Every material is carefully selected, every finish meticulously executed, and every detail thoughtfully considered.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Design',
      description: 'We embrace cutting-edge architectural trends while respecting timeless principles of design that create homes meant to last generations.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Your vision drives our work. We collaborate closely with clients throughout the journey, ensuring every decision reflects their unique lifestyle.'
    },
    {
      icon: Shield,
      title: 'Transparent Process',
      description: 'From initial consultation to final handover, we maintain open communication and complete transparency in all aspects of the project.'
    },
    {
      icon: Target,
      title: 'Precision Execution',
      description: 'Our skilled craftsmen bring decades of combined experience, ensuring every aspect of construction meets our exacting standards.'
    },
    {
      icon: Heart,
      title: 'Lasting Relationships',
      description: 'We believe in building more than homes—we build relationships that extend long after the keys are handed over.'
    }
  ];

  const milestones = [
    { year: '2010', title: 'Founded', description: 'LKB Builders established with a vision of luxury construction' },
    { year: '2013', title: 'First Major Project', description: 'Completed our first landmark villa project' },
    { year: '2016', title: 'Regional Expansion', description: 'Extended operations across Karnataka' },
    { year: '2019', title: 'Award Recognition', description: 'Won Best Residential Builder award' },
    { year: '2022', title: '100+ Projects', description: 'Milestone of 100 completed luxury homes' },
    { year: '2024', title: 'Innovation Leader', description: 'Pioneering sustainable luxury construction' }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-home.jpg"
            alt="About LKB Builders"
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
              ABOUT US
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Crafting Excellence 
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We are more than builders—we are creators of spaces where life's most beautiful moments unfold.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-15">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden card-shadow">
                  <img
                    src="/project-1.jpg"
                    alt="Our Story"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 rounded-xl bg-primary text-primary-foreground card-shadow">
                  <div className="font-serif text-4xl font-bold text-accent">10+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="text-accent font-medium tracking-wider text-sm mb-4 block">
                  OUR STORY
                </span>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                  A Legacy of <span className="text-gradient">Quality</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    LKB Builders was founded in 2010 with a singular vision: to redefine luxury 
                    home construction in India. What started as a small team of passionate 
                    architects and builders has grown into one of the most trusted names in 
                    premium residential construction.
                  </p>
                  <p>
                    Our founder believed that every family deserves a home that reflects their 
                    aspirations—a space that combines aesthetic beauty with practical functionality, 
                    built to stand the test of time. This philosophy continues to guide everything we do.
                  </p>
                  <p>
                    Today, with over 150 completed projects and a team of 50+ skilled professionals, 
                    we continue to push the boundaries of what's possible in residential construction, 
                    embracing innovation while honoring traditional craftsmanship.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 lg:py-5 warm-gradient">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="p-10 rounded-2xl bg-card card-shadow border-gradient h-full">
                <div className="w-16 h-16 rounded-xl luxury-gradient flex items-center justify-center mb-6">
                  <Target className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional homes that exceed expectations through innovative design, 
                  superior craftsmanship, and unwavering commitment to client satisfaction. We aim 
                  to transform the construction experience, making it seamless, transparent, and 
                  genuinely enjoyable for every homeowner.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-10 rounded-2xl bg-card card-shadow border-gradient h-full">
                <div className="w-16 h-16 rounded-xl luxury-gradient flex items-center justify-center mb-6">
                  <Lightbulb className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and admired luxury home builder in India, known for 
                  creating timeless spaces that harmonize modern innovation with enduring quality. 
                  We envision a future where every LKB home sets the benchmark for residential 
                  excellence.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-15 lg:py-10">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent font-medium tracking-wider text-sm mb-4 block">
                WHAT DRIVES US
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                Our Core <span className="text-gradient">Values</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                These principles guide every decision we make and every home we build.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="p-8 rounded-2xl bg-card card-shadow transition-all duration-500 h-full hover:shadow-[0_0_60px_rgba(212,175,55,0.6),0_0_80px_rgba(212,175,55,0.4),0_25px_50px_-12px_hsla(25,40%,22%,0.5)]">
                  <div className="w-14 h-14 rounded-xl luxury-gradient flex items-center justify-center mb-6">
                    <value.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
        <section className="py-20 lg:py-15">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <span className="text-accent font-medium tracking-wider text-sm mb-4 block">
                    WHY LKB BUILDERS
                  </span>
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                    What Sets Us <span className="text-gradient">Apart</span>
                  </h2>
                  <div className="space-y-4 mb-8">
                    {[
                      'Premium materials sourced from trusted global suppliers',
                      'In-house team of architects, engineers, and craftsmen',
                      'Transparent pricing with no hidden costs',
                      'Real-time project tracking and updates',
                      'Comprehensive warranty and after-sales support',
                      'Sustainable and eco-friendly construction practices'
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="text-accent shrink-0" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="btn-luxury px-8 py-3 rounded-full text-primary-foreground font-medium inline-flex items-center gap-2 group"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
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
              </ScrollReveal>
            </div>
          </div>
        </section>

    </main>
  );
};

export default About;
