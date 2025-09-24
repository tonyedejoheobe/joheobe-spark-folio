import React from 'react';
import { Calendar, MapPin, TrendingUp, Users, Code, Database } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Technical Support Engineer",
      company: "Daily Dream ENT",
      period: "Jan 2024 – Dec 2024",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Resolved complex customer issues with 95% first-call resolution rate",
        "Automated workflows that reduced resolution time by 30%",
        "Collaborated with development teams to identify and fix product bugs",
        "Enhanced product functionality through cross-team communication",
        "Maintained detailed technical documentation for support processes"
      ],
      technologies: ["Zendesk", "Jira", "Slack", "API Integration", "Bug Tracking"]
    },
    {
      title: "Support Developer",
      company: "Beter Concept",
      period: "Mar 2022 – Dec 2023",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Handled and prioritized customer tickets, reducing response time by 25%",
        "Identified and resolved frontend bugs to improve user experience",
        "Built comprehensive internal knowledge base reducing ticket volume by 15%",
        "Provided technical guidance to junior support team members",
        "Implemented customer feedback loops for continuous product improvement"
      ],
      technologies: ["Frontend Development", "HTML/CSS", "JavaScript", "CRM Systems", "Knowledge Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-lg mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven track record of delivering exceptional customer support while 
            contributing to product development and process optimization
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-neon transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-16 animate-slide-up ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Node */}
              <div className={`absolute top-8 w-6 h-6 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full border-4 border-background shadow-lg ${
                index % 2 === 0 
                  ? 'left-5 md:right-0 md:left-auto md:transform md:translate-x-1/2' 
                  : 'left-5 md:left-0 md:transform md:-translate-x-1/2'
              }`}>
                <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                <div className="card-elevated group hover:border-brand-primary/20">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors">
                        {exp.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm font-medium rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-brand-secondary mb-3">
                      {exp.company}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-brand-primary" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-primary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-brand-neon" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-brand-neon rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-brand-secondary" />
                      Technologies & Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full border border-border hover:border-brand-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="card-glass max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how my experience in customer support and frontend development 
              can contribute to your team's success.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-neon"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;