import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { blogPosts } from '@/data/blogs';

const Blog = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/gallery-2.jpg"
            alt="Blog"
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
              INSIGHTS & IDEAS
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Expert insights on architecture, construction, and creating your dream home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          {/* Featured Post */}
          <ScrollReveal>
            <Link to={`/blog/${blogPosts[0].id}`} className="group block mb-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl border-2 border-accent/30 hover:border-accent card-shadow hover:shadow-[0_0_30px_rgba(212,175,55,0.5),0_0_50px_rgba(212,175,55,0.3)] transition-all duration-500">
                <div className="relative rounded-2xl overflow-hidden">
                  <motion.img
                    src={blogPosts[0].featuredImage}
                    alt={blogPosts[0].title}
                    className="w-full h-80 lg:h-96 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-4 lg:p-8">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 rounded-full bg-secondary">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium text-sm">
                      {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium">{blogPosts[0].author}</span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          <div className="section-divider mb-16" />

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <div className="h-full hover:scale-105 transition-all duration-500">
                  <Link to={`/blog/${post.id}`} className="group block h-full">
                    <article className="h-full rounded-2xl overflow-hidden bg-card card-shadow hover:shadow-[0_0_30px_rgba(212,175,55,0.5),0_0_50px_rgba(212,175,55,0.3)] transition-all duration-500">
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card text-xs font-medium">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-accent text-sm font-medium">
                          Read More
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      
      
    </main>
  );
};

export default Blog;