import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Training Programs',
      links: [
        { name: 'Body Transformation', href: '/transformation' },
        { name: 'Strength Training', href: '/strength' },
        { name: 'HIIT Workouts', href: '/hiit' },
        { name: 'Nutrition Coaching', href: '/nutrition' },
        { name: 'Online Training', href: '/online' },
        { name: 'Group Sessions', href: '/group' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Success Stories', href: '/success-stories' },
        { name: 'Workout Library', href: '/workouts' },
        { name: 'Meal Plans', href: '/meal-plans' },
        { name: 'Progress Tracking', href: '/tracking' },
        { name: 'Exercise Videos', href: '/videos' },
        { name: 'Fitness Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Training FAQ', href: '/faq' },
        { name: 'Coaching Community', href: '/community' },
        { name: 'Form Check', href: '/form-check' },
        { name: 'Injury Prevention', href: '/injury-prevention' },
        { name: 'Equipment Guide', href: '/equipment' },
        { name: 'Supplement Advice', href: '/supplements' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Coach Sarah', href: '/about' },
        { name: 'Certifications', href: '/certifications' },
        { name: 'Training Philosophy', href: '/philosophy' },
        { name: 'Client Reviews', href: '/reviews' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/peakperformancecoaching' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/peakperformancecoaching' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/peakperformancecoaching' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/peakperformance' },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/peak-performance-coaching',
    },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">PP</span>
                </div>
                <span className="font-bold text-xl">Peak Performance Coaching</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transform your body and mindset with personalized fitness coaching. Join hundreds of
                clients who've achieved their peak performance through our proven training methods.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">coach@peakperformancecoaching.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) FIT-PEAK</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Elite Fitness Center, Downtown</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Weekly Fitness Tips</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email for workout tips"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get exclusive workout routines and nutrition tips. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Peak Performance Coaching. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Heart className="size-3 text-primary fill-current" /> for fitness
                transformation
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow the journey:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/class-schedule"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Class Schedule
            </Link>
            <Link
              href="/trainer-certification"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Trainer Certifications
            </Link>
            <Link
              href="/health-disclaimer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Health Disclaimer
            </Link>
            <Link
              href="/transformation-gallery"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Transformation Gallery
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
