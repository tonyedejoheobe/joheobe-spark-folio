import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, ExternalLink, X } from 'lucide-react';
import AnimatedDiv from '@/components/ui/AnimatedDiv';
import ExpandableText from '@/components/ui/ExpandableText';
import certificateImg from '@/assets/certificate-software-engineering.jpeg';

const EducationSection: React.FC = () => {
  const [isCertOpen, setIsCertOpen] = useState(false);

  const education = {
    degree: "Bachelor of Science in Software Engineering & Digital Entrepreneurship",
    institution: "Ave Maria University, Piyanko",
    location: "Nasarawa State, Nigeria",
    period: "2021 – 2025",
    classification: "Second Class Honours (Upper Division)",
    description: "An interdisciplinary program blending core software engineering principles with digital entrepreneurship, equipping graduates to design, build, and bring modern software products to market.",
    highlights: [
      "Software Development Lifecycle",
      "Object-Oriented Programming",
      "Database Design & Management",
      "Web Technologies & Frameworks",
      "Software Testing & Quality Assurance",
      "Digital Product & Entrepreneurship"
    ]
  };

  const certifications = [
    {
      title: "Customer Support Excellence",
      provider: "Industry Experience",
      year: "2024",
      description: "Practical expertise gained through hands-on customer support roles"
    },
    {
      title: "Frontend Development",
      provider: "Self-Directed Learning",
      year: "2023-2024",
      description: "Modern React ecosystem, TypeScript, and responsive design principles"
    },
    {
      title: "Technical Documentation",
      provider: "Professional Practice",
      year: "2022-2024",
      description: "Creating comprehensive technical documentation and knowledge bases"
    }
  ];

  return (
    <section className="py-20 px-6 bg-surface/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <AnimatedDiv animationClass="animate-slide-up" className="text-center mb-16">
          <h2 className="heading-lg mb-4">Education & Learning</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining formal education in software engineering with continuous 
            professional development and hands-on industry experience
          </p>
        </AnimatedDiv>

        {/* Main Education */}
        <AnimatedDiv animationClass="animate-slide-up" delay={200} className="card-elevated mb-12">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {education.degree}
                  </h3>
                  <h4 className="text-xl font-semibold text-brand-primary">
                    {education.institution}
                  </h4>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-primary" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-primary" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                <Award className="w-4 h-4 text-brand-primary" />
                <span className="text-sm font-medium text-brand-primary">{education.classification}</span>
              </div>

              <ExpandableText 
                text={education.description}
                maxLength={120}
                className="mb-6"
              />

              <div className="mb-6">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-neon" />
                  Key Areas of Study
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {education.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-neon rounded-full"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate */}
              <div className="border-t border-border pt-6">
                <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-secondary" />
                  Official Statement of Result
                </h5>
                <button
                  type="button"
                  onClick={() => setIsCertOpen(true)}
                  className="group relative block w-full max-w-md overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all duration-300 hover:border-brand-primary hover:shadow-glow"
                >
                  <img
                    src={certificateAsset.url}
                    alt="Bachelor of Science in Software Engineering & Digital Entrepreneurship — Statement of Result, Ave Maria University"
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/90 text-foreground text-sm font-medium border border-border">
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </span>
                  </div>
                </button>
                <p className="text-xs text-muted-foreground mt-2">
                  Click to view in full size
                </p>
              </div>
            </div>
          </div>
        </AnimatedDiv>

        {/* Certificate Lightbox */}
        {isCertOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsCertOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate preview"
          >
            <button
              type="button"
              onClick={() => setIsCertOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-card border border-border text-foreground hover:bg-accent transition-colors shadow-lg"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={certificateAsset.url}
              alt="Certificate — full view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Professional Development */}
        <AnimatedDiv animationClass="animate-slide-up" delay={300} className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-brand-secondary" />
            Professional Development & Certifications
          </h3>
        </AnimatedDiv>

        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <AnimatedDiv
              key={index}
              animationClass="animate-slide-up"
              delay={400 + index * 100}
              className="card-glass group hover:border-brand-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-brand-secondary to-brand-neon rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                      {cert.title}
                    </h4>
                    <span className="text-sm text-brand-primary font-medium">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-brand-secondary font-medium mb-2">
                    {cert.provider}
                  </p>
                  <ExpandableText 
                    text={cert.description}
                    maxLength={100}
                  />
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        {/* Continuous Learning */}
        <AnimatedDiv animationClass="animate-slide-up" delay={500} className="text-center mt-16">
          <div className="card-elevated max-w-2xl mx-auto">
            <Users className="w-16 h-16 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Committed to Continuous Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and I'm dedicated to staying current with industry trends, 
              best practices, and emerging technologies. Always learning, always growing, always improving.
            </p>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default EducationSection;