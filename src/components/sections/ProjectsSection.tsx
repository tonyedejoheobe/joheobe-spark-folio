import React from 'react';
import { ExternalLink, Github, Code, Layers, Zap, Users } from 'lucide-react';
import AnimatedDiv from '@/components/ui/AnimatedDiv';

const ProjectsSection: React.FC = () => {
  const projectCategories = [
    {
      title: "Customer Support Tools",
      description: "Building tools to enhance customer support efficiency",
      icon: Users,
      color: "from-brand-primary to-brand-secondary",
      projects: [
        {
          title: "Support Ticket Analyzer",
          description: "AI-powered tool to categorize and prioritize customer tickets for faster resolution",
          tech: ["React", "TypeScript", "API Integration"],
          status: "Coming Soon"
        },
        {
          title: "Knowledge Base Builder",
          description: "Interactive platform for creating comprehensive support documentation",
          tech: ["Next.js", "Tailwind CSS", "Database"],
          status: "In Planning"
        }
      ]
    },
    {
      title: "Frontend Applications",
      description: "Modern web applications showcasing development skills",
      icon: Code,
      color: "from-brand-secondary to-brand-neon",
      projects: [
        {
          title: "React Dashboard",
          description: "Responsive admin dashboard with real-time data visualization and analytics",
          tech: ["React", "TypeScript", "Charts"],
          status: "In Development"
        },
        {
          title: "E-commerce Platform",
          description: "Full-featured online store with modern UI/UX and payment integration",
          tech: ["Next.js", "Stripe", "API"],
          status: "Planned"
        }
      ]
    },
    {
      title: "Process Automation",
      description: "Tools to streamline workflows and improve efficiency",
      icon: Zap,
      color: "from-brand-neon to-brand-primary",
      projects: [
        {
          title: "Workflow Automator",
          description: "Custom solution for automating repetitive support tasks and notifications",
          tech: ["JavaScript", "API", "Webhooks"],
          status: "Concept"
        },
        {
          title: "Bug Tracker Integration",
          description: "Seamless integration between customer reports and development tracking",
          tech: ["React", "Jira API", "Integration"],
          status: "Research"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development': return 'bg-brand-neon/10 text-brand-neon border-brand-neon/20';
      case 'Coming Soon': return 'bg-brand-primary/10 text-brand-primary border-brand-primary/20';
      case 'In Planning': return 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <AnimatedDiv animationClass="animate-slide-up" className="text-center mb-16">
          <h2 className="heading-lg mb-4">Projects & Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing a blend of customer support solutions and frontend development projects, 
            each designed to solve real-world problems and enhance user experiences
          </p>
        </AnimatedDiv>

        {/* Project Categories */}
        <div className="space-y-12">
          {projectCategories.map((category, categoryIndex) => (
            <AnimatedDiv
              key={categoryIndex}
              animationClass="animate-slide-up"
              delay={categoryIndex * 200}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.projects.map((project, projectIndex) => (
                  <AnimatedDiv
                    key={projectIndex}
                    animationClass="animate-slide-up"
                    delay={(categoryIndex * 200) + (projectIndex * 100)}
                    className="card-elevated group hover:border-brand-primary/20 hover:shadow-neon card-3d"
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                        {project.title}
                      </h4>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Project Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full border border-border hover:border-brand-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Actions */}
                    <div className="flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                      <button className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-brand-primary transition-colors">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-brand-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </button>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </AnimatedDiv>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedDiv animationClass="animate-slide-up" delay={800} className="text-center mt-16">
          <div className="card-glass max-w-2xl mx-auto">
            <Layers className="w-16 h-16 text-brand-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm constantly working on new projects that combine my passion for customer support 
              excellence with modern frontend development. Stay tuned for updates, or let's 
              collaborate on something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero"
              >
                Start a Project
              </button>
              <a 
                href="https://github.com/joheobe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                View GitHub
              </a>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default ProjectsSection;