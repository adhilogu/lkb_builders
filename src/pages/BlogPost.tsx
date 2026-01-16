import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { getBlogById, blogPosts } from '@/data/blogs';
import ScrollReveal from '@/components/ScrollReveal';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = getBlogById(id || '');

  if (!post) {
    return (
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="btn-luxury px-6 py-3 rounded-full text-primary-foreground font-medium inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            <span className="relative z-10">Back to Blog</span>
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.featuredImage}
            alt={post.title}
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
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80 mb-4">
              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </div>
            </div>

            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-medium">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="text-primary-foreground font-medium">{post.author}</div>
                <div className="text-primary-foreground/60 text-sm">LKB Builders Team</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Share */}
            <ScrollReveal>
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Share2 size={18} />
                    <span>Share this article:</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Facebook size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Author Bio */}
            <ScrollReveal>
              <div className="mt-12 p-8 rounded-2xl bg-card card-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif text-xl shrink-0">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-serif text-lg font-semibold mb-1">{post.author}</div>
                    <div className="text-muted-foreground text-sm mb-3">LKB Builders Team</div>
                    <p className="text-muted-foreground text-sm">
                      Expert in residential construction with years of experience in delivering 
                      exceptional homes that combine innovative design with superior craftsmanship.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 warm-gradient">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold mb-12 text-center">Related Articles</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <ScrollReveal key={relatedPost.id} delay={index * 0.1}>
                  <Link to={`/blog/${relatedPost.id}`} className="group block">
                    <article className="rounded-2xl overflow-hidden bg-card card-shadow hover:luxury-shadow transition-all duration-500">
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <span className="px-2 py-1 rounded bg-secondary">{relatedPost.category}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold group-hover:text-accent transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogPost;
