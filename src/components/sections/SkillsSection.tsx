import React from 'react';
import { Code, Monitor, Users, Settings, Heart, Zap } from 'lucide-react';
import AnimatedDiv from '@/components/ui/AnimatedDiv';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      color: "from-brand-primary to-brand-secondary",
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 75 },
        { name: "Vite", level: 80 },
        { name: "API Integration", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "Frontend Debugging", level: 90 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Monitor,
      color: "from-brand-secondary to-brand-neon",
      skills: [
        { name: "Zendesk", level: 95 },
        { name: "Freshdesk", level: 90 },
        { name: "HubSpot", level: 85 },
        { name: "Jira", level: 90 },
        { name: "Confluence", level: 85 },
        { name: "Slack", level: 95 },
        { name: "Figma", level: 80 },
        { name: "Google Workspace", level: 95 },
        { name: "Microsoft Office", level: 90 },
        { name: "CRM Systems", level: 90 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "from-brand-neon to-brand-primary",
      skills: [
        { name: "Customer Empathy", level: 98 },
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 95 },
        { name: "Time Management", level: 90 },
        { name: "Teamwork", level: 95 },
        { name: "Critical Thinking", level: 90 },
        { name: "Adaptability", level: 90 },
        { name: "Leadership", level: 85 },
        { name: "Conflict Resolution", level: 90 },
        { name: "Documentation", level: 95 }
      ]
    }
  ];

  const achievements = [
    {
      icon: Zap,
      title: "Automation Expert",
      description: "Reduced resolution time by 30% through workflow automation"
    },
    {
      icon: Heart,
      title: "Customer Champion",
      description: "Maintained 95% customer satisfaction rate consistently"
    },
    {
      icon: Settings,
      title: "Process Optimizer",
      description: "Built knowledge base reducing ticket volume by 15%"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <AnimatedDiv animationClass="animate-slide-up" className="text-center mb-16">
          <h2 className="heading-lg mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning customer support excellence, 
            frontend development, and technical problem-solving
          </p>
        </AnimatedDiv>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedDiv
              key={categoryIndex}
              animationClass="animate-slide-up"
              delay={categoryIndex * 200}
              className="card-elevated group hover:border-brand-primary/20"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground group-hover/skill:text-brand-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 20)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedDiv>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedDiv
              key={index}
              animationClass="animate-slide-up"
              delay={600 + index * 100}
              className="card-glass text-center group hover:border-brand-primary/20"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                {achievement.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </AnimatedDiv>
          ))}
        </div>

        {/* Technology Focus */}
        <AnimatedDiv animationClass="animate-slide-up" delay={1000} className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Currently Learning & Exploring
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'React Native'].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary border border-brand-primary/20 rounded-full font-medium hover:border-brand-primary hover:shadow-glow transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default SkillsSection;