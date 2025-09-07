
'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Transformations', href: '/transformations' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-background border-b border-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-primary">
              Peak Performance Coaching
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-primary hover:text-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Class Schedule
            </button>
            <button className="bg-primary text-background hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-muted">
              {navigationItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2 space-y-2">
                <button className="w-full text-left text-primary hover:text-primary/80 px-3 py-2 rounded-md text-base font-medium transition-colors">
                  Class Schedule
                </button>
                <button className="w-full bg-primary text-background hover:bg-primary/90 px-3 py-2 rounded-md text-base font-medium transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
