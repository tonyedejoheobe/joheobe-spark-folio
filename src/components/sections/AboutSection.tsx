import React from 'react';
import { MapPin, ExternalLink, Award, Users, Code, Headphones } from 'lucide-react';
import AnimatedDiv from '@/components/ui/AnimatedDiv';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Headphones,
      title: "Customer Support Expert",
      description: "95% first-call resolution rate with proven track record in complex issue solving"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive web applications with React, TypeScript, and modern frameworks"
    },
    {
      icon: Users,
      title: "Cross-team Collaboration",
      description: "Bridging technical and customer-facing teams to enhance product functionality"
    },
    {
      icon: Award,
      title: "Process Optimization",
      description: "Automated workflows reducing resolution times by 30% and improving efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <AnimatedDiv animationClass="animate-slide-up">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining technical expertise with customer empathy to deliver exceptional
              solutions and experiences
            </p>
          </div>
        </AnimatedDiv>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <AnimatedDiv animationClass="animate-slide-in-left" delay={200}>
            <div className="space-y-6">
              <h3 className="heading-md text-gradient">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With a strong foundation in Software Engineering and hands-on experience in both
                  customer support and frontend development, I bridge the gap between technical
                  solutions and user experience.
                </p>
                <p>
                  My expertise in problem-solving, customer empathy, and technical documentation
                  has enabled me to not only resolve complex customer issues but also contribute
                  to product improvements through cross-team collaboration.
                </p>
                <p>
                  Based in Jikwoyi, Abuja, Nigeria, I'm passionate about leveraging technology
                  to create meaningful connections between businesses and their customers while
                  building robust, user-friendly web applications.
                </p>
              </div>

              {/* Location & Portfolio Link */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                  <span>Jikwoyi, Abuja, Nigeria</span>
                </div>
                <a
                  href="https://codegeek-oldportfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Previous Portfolio</span>
                </a>
              </div>
            </div>
          </AnimatedDiv>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <AnimatedDiv
                key={index}
                animationClass="animate-slide-in-right"
                delay={200 + index * 100}
              >
                <div className="card-elevated group hover:border-brand-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {[
            { value: "95%", label: "First Call Resolution" },
            { value: "30%", label: "Faster Resolution Time" },
            { value: "2+", label: "Years Experience" },
            { value: "15%", label: "Ticket Reduction" }
          ].map((stat, index) => (
            <AnimatedDiv
              key={index}
              animationClass="animate-slide-up"
              delay={index * 100}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;