import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = {
    degree: "Bachelor of Software Engineering",
    institution: "Ave Maria University",
    location: "Nigeria",
    period: "2019 – 2023",
    description: "Comprehensive program covering software development principles, computer science fundamentals, and practical application development skills.",
    highlights: [
      "Software Development Lifecycle",
      "Object-Oriented Programming",
      "Database Design & Management",
      "Web Technologies & Frameworks",
      "Software Testing & Quality Assurance",
      "Project Management & Team Collaboration"
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
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-lg mb-4">Education & Learning</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining formal education in software engineering with continuous 
            professional development and hands-on industry experience
          </p>
        </div>

        {/* Main Education */}
        <div className="card-elevated mb-12 animate-slide-up">
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

              <p className="text-muted-foreground leading-relaxed mb-6">
                {education.description}
              </p>

              <div>
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
            </div>
          </div>
        </div>

        {/* Professional Development */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-brand-secondary" />
            Professional Development & Certifications
          </h3>
        </div>

        <div className="grid gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {certifications.map((cert, index) => (
            <div 
              key={index}
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
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
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
        </div>
      </div>
    </section>
  );
};

export default EducationSection;