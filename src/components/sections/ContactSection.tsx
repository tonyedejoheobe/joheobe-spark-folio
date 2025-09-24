import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AnimatedDiv from '@/components/ui/AnimatedDiv';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const sendToWhatsApp = () => {
    const whatsappNumber = "2348060608712";
    const message = `*New Contact Form Message*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All form fields are required before sending to WhatsApp.",
        variant: "destructive",
      });
      return;
    }
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: "Your message is being prepared in WhatsApp.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+234-80-6060-8712",
      href: "tel:+2348060608712"
    },
    {
      icon: Mail,
      label: "Email",
      value: "edejoheobe@gmail.com",
      href: "mailto:edejoheobe@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jikwoyi, Abuja, Nigeria",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/joheobe",
      color: "hover:text-brand-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/joheobe-tony-ede",
      color: "hover:text-brand-secondary"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "https://codegeek-newportfolio.netlify.app",
      color: "hover:text-brand-neon"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <AnimatedDiv animationClass="animate-slide-up" className="text-center mb-16">
          <h2 className="heading-lg mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project or discuss how I can contribute 
            to your team? I'd love to hear from you.
          </p>
        </AnimatedDiv>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <AnimatedDiv animationClass="animate-slide-in-left" delay={200} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for customer support expertise, frontend development skills, 
                or someone who can bridge the gap between technical solutions and user experience, 
                let's start a conversation.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`card-elevated group hover:border-brand-primary/20 block ${
                    info.href === '#' ? 'cursor-default' : 'hover:shadow-glow transition-all duration-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1">
                        {info.label}
                      </h4>
                      <p className="text-foreground group-hover:text-brand-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Connect on Social
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl bg-card border border-border transition-all duration-300 hover:border-brand-primary hover:shadow-glow hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedDiv>

          {/* Contact Form */}
          <AnimatedDiv animationClass="animate-slide-in-right" delay={400}>
            <div className="card-elevated">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-brand-neon mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 btn-hero disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={sendToWhatsApp}
                      className="btn-neon"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Send to WhatsApp
                      </div>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedDiv>
        </div>

        {/* Footer Note */}
        <AnimatedDiv animationClass="animate-slide-up" delay={500} className="text-center mt-16">
          <div className="card-glass max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Open to Opportunities
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new opportunities, interesting projects, 
              or collaborations. Whether it's a full-time position, freelance work, or just a 
              chat about technology and customer experience, feel free to reach out.
            </p>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default ContactSection;