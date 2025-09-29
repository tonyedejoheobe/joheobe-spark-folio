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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All form fields are required before sending email.",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with form data
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:edejoheobe@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message and reset form
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);

    toast({
      title: "Email client opened",
      description: "Your default email client should now open with the message.",
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <AnimatedDiv animationClass="animate-slide-in-left" delay={200} className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 lg:mb-6">
                Get in Touch
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-6 lg:mb-8">
                Whether you're looking for customer support expertise, frontend development skills, 
                or someone who can bridge the gap between technical solutions and user experience, 
                let's start a conversation.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3 lg:space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`card-elevated group hover:border-brand-primary/20 block ${
                    info.href === '#' ? 'cursor-default' : 'hover:shadow-glow transition-all duration-300'
                  }`}
                >
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs lg:text-sm font-semibold text-muted-foreground mb-1">
                        {info.label}
                      </h4>
                      <p className="text-sm lg:text-base text-foreground group-hover:text-brand-primary transition-colors break-words">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 lg:pt-8">
              <h4 className="text-base lg:text-lg font-semibold text-foreground mb-3 lg:mb-4">
                Connect on Social
              </h4>
              <div className="flex gap-3 lg:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 lg:p-4 rounded-xl bg-card border border-border transition-all duration-300 hover:border-brand-primary hover:shadow-glow hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedDiv>

          {/* Contact Form */}
          <AnimatedDiv animationClass="animate-slide-in-right" delay={400}>
            <div className="card-elevated">
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 lg:mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8 lg:py-12">
                  <CheckCircle className="w-12 h-12 lg:w-16 lg:h-16 text-brand-neon mx-auto mb-3 lg:mb-4" />
                  <h4 className="text-lg lg:text-xl font-semibold text-foreground mb-2">
                    Email Client Opened!
                  </h4>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    Your email client should open with the message ready to send.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs lg:text-sm font-medium text-foreground mb-1 lg:mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs lg:text-sm font-medium text-foreground mb-1 lg:mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs lg:text-sm font-medium text-foreground mb-1 lg:mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs lg:text-sm font-medium text-foreground mb-1 lg:mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 resize-none lg:rows-5"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-hero"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4 lg:w-5 lg:h-5" />
                      <span className="text-sm lg:text-base">Send Email</span>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </AnimatedDiv>
        </div>

        {/* Footer Note */}
        <AnimatedDiv animationClass="animate-slide-up" delay={500} className="text-center mt-12 lg:mt-16">
          <div className="card-glass max-w-2xl mx-auto">
            <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2 lg:mb-3">
              Open to Opportunities
            </h3>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
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