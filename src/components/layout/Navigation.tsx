import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Show navbar while scrolling
      setIsNavVisible(true);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Hide navbar after scrolling stops (only on desktop)
      if (currentScrollY > 80) {
        scrollTimeoutRef.current = setTimeout(() => {
          setIsNavVisible(false);
        }, 2000); // Hide after 2 seconds of no scrolling
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
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

          {/* Mobile Menu Button with Sidebar */}
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
            
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-lg bg-card border border-border hover:bg-accent transition-colors duration-200 shadow-sm"
                  aria-label="Toggle menu"
                >
                  <Menu className="w-6 h-6 text-foreground" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-background border-border">
                <div className="flex flex-col h-full">
                  {/* Logo in Sidebar */}
                  <div className="flex items-center space-x-2 mb-8 pt-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-lg">JT</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">Joheobe Tony Ede</span>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-2 flex-1">
                    {navigationLinks.map((link) => (
                      <button
                        key={link.href}
                        onClick={() => scrollToSection(link.href)}
                        className="text-left px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 text-lg"
                      >
                        {link.label}
                      </button>
                    ))}
                  </nav>

                  {/* Theme Toggle in Sidebar */}
                  <div className="border-t border-border pt-4 mt-4">
                    <button
                      onClick={toggleTheme}
                      className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg bg-card border border-border hover:bg-accent transition-colors duration-200"
                      aria-label="Toggle theme"
                    >
                      {theme === 'light' ? (
                        <>
                          <Moon className="w-5 h-5 text-foreground" />
                          <span className="text-foreground">Dark Mode</span>
                        </>
                      ) : (
                        <>
                          <Sun className="w-5 h-5 text-foreground" />
                          <span className="text-foreground">Light Mode</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;