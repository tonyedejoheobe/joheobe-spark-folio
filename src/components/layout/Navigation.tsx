import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) { // 80 is header height
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent'
      } ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">JT</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">Joheobe Tony Ede</span>
            <span className="text-xl font-bold text-foreground sm:hidden">JTE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card border border-border hover:bg-accent transition-colors duration-200 shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card border border-border hover:bg-accent transition-colors duration-200 shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-card border border-border hover:bg-accent transition-colors duration-200 shadow-sm"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-2 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;