import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('3nxNLYD2UQCJ7vBte');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    from_email2: 'karthi@gmail.com',
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
  };

  console.log('Attempting to send email...', templateParams);

  try {
    const response = await emailjs.send(
      'service_hn2flhk',           // Your Service ID (correct)
      'template_svwug4m',     // ⬅️ PUT YOUR TEMPLATE ID HERE
      templateParams,
      '3nxNLYD2UQCJ7vBte'         // Your Public Key (correct)
    );

    console.log('✅ SUCCESS!', response.status, response.text);

    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);

  } catch (error: any) {
    console.error('❌ FAILED:', error);
    console.error('Error details:', error.text || error.message);
    
    toast({
      title: "Error",
      description: error.text || "Failed to send message. Please try again.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['LKB Builders Office', 'Coimbatore, Tamil Nadu', 'India']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98437 99917']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['logumtp@gmail.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday', '9:00 AM - 6:00 PM', 'Sunday: By Appointment']
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/project-4.jpg"
            alt="Contact Us"
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
              GET IN TOUCH
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Ready to start your dream project? We're here to help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 0.1}>
                <div className="p-4 lg:p-6 rounded-2xl bg-background card-shadow hover:shadow-[0_0_30px_rgba(212,175,55,0.5),0_0_50px_rgba(212,175,55,0.3)] transition-all duration-500 text-center h-full cursor-pointer">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl luxury-gradient flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <info.icon className="text-primary-foreground" size={20} />
                  </div>
                  <h3 className="font-serif text-sm lg:text-lg font-semibold mb-2 lg:mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-xs lg:text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-15 lg:py-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <div className="p-8 lg:p-12 rounded-2xl bg-card card-shadow border-gradient">
                <h2 className="font-serif text-3xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="new-project">New Project Inquiry</option>
                        <option value="renovation">Renovation Project</option>
                        <option value="consultation">Design Consultation</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full py-4 rounded-xl luxury-gradient text-primary-foreground font-medium flex items-center justify-center gap-2 disabled:opacity-70"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="h-full min-h-[500px] rounded-2xl overflow-hidden card-shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125388.61651993355!2d76.9558321!3d11.0168445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LKB Builders Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 lg:py-10 warm-gradient">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent font-medium tracking-wider text-sm mb-4 block">
                FREQUENTLY ASKED
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold">
                Common Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                q: 'How long does a typical luxury home project take?',
                a: 'A typical luxury home project takes 10-15 months from groundbreaking to completion, depending on the size and complexity of the design.'
              },
              {
                q: 'Do you provide design services or work with architects?',
                a: 'We have an in-house team of architects and designers, but we also collaborate with external architects if you have a preferred partner.'
              },
              {
                q: 'What areas do you serve?',
                a: 'We primarily operate in Bangalore and surrounding areas, but we consider projects across Karnataka for exceptional opportunities.'
              },
              {
                q: 'How do I get a cost estimate for my project?',
                a: 'Contact us for an initial consultation. We\'ll discuss your requirements and provide a detailed, transparent cost estimate.'
              },
              {
                q: 'What warranties do you provide?',
                a: 'We offer comprehensive warranties on structural work and materials, along with post-completion support to ensure your complete satisfaction.'
              },
              {
                q: 'Can I customize my home design completely?',
                a: 'Absolutely! We specialize in bespoke luxury homes tailored to your vision, lifestyle, and preferences down to the finest detail.'
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-card card-shadow h-full">
                  <h3 className="font-serif text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
