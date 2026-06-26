import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import ExpandableText from '@/components/ui/ExpandableText';

const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-animated-gradient"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.2em] uppercase text-brand-primary font-semibold animate-slide-up">
                Welcome
              </p>
              <h1 className="heading-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Joheobe Tony Ede
              </h1>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-gradient animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Technical Support Specialist
                </h2>
                <h3 className="text-xl md:text-2xl font-medium text-muted-foreground animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  & Junior Frontend Developer
                </h3>
              </div>
            </div>

            <div className="animate-slide-up max-w-2xl" style={{ animationDelay: '0.4s' }}>
              <ExpandableText 
                text="Passionate about building responsive web applications, solving complex technical issues, and enhancing customer experiences through innovative solutions and empathetic support."
                maxLength={120}
                className="text-lg"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <button 
                onClick={scrollToProjects}
                className="btn-hero group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-ghost"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a 
                href="mailto:edejoheobe@gmail.com"
                className="p-3 rounded-full bg-surface hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-glow"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a 
                href="https://github.com/joheobe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-glow"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a 
                href="https://linkedin.com/in/joheobe-tony-ede"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* 3D Visual Element */}
          <div className="relative flex items-center justify-center animate-slide-in-right">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Floating code blocks */}
              <div className="absolute top-0 right-0 bg-card border border-border rounded-lg p-3 sm:p-4 shadow-lg animate-float card-3d">
                <pre className="text-xs sm:text-sm text-brand-primary font-mono">
                  <code>{`<Frontend\n  developer />`}</code>
                </pre>
              </div>
              
              <div className="absolute bottom-0 left-0 bg-card border border-border rounded-lg p-3 sm:p-4 shadow-lg animate-float card-3d" style={{ animationDelay: '1s' }}>
                <pre className="text-xs sm:text-sm text-brand-secondary font-mono">
                  <code>{`support: {\n  tickets: 95%\n}`}</code>
                </pre>
              </div>
              
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg p-3 sm:p-4 shadow-lg animate-float card-3d" style={{ animationDelay: '2s' }}>
                <pre className="text-xs sm:text-sm text-brand-neon font-mono">
                  <code>{`React.tsx`}</code>
                </pre>
              </div>

              {/* Central avatar placeholder */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                <span className="text-3xl sm:text-4xl font-bold text-white">JTE</span>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-float">
                <div className="absolute top-4 left-4 w-3 h-3 bg-brand-neon rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-brand-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 right-0 w-4 h-4 bg-brand-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;