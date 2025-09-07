'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dumbbell,
  Target,
  Users,
  Calendar,
  TrendingUp,
  Heart,
  Trophy,
  Clock,
  Zap,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Dumbbell,
      title: 'Personalized Training Programs',
      description:
        'Custom workout plans designed specifically for your fitness level, goals, and lifestyle preferences.',
      badge: 'Training',
    },
    {
      icon: Target,
      title: 'Body Transformation Coaching',
      description:
        'Comprehensive coaching that transforms your physique through proven methods and consistent guidance.',
      badge: 'Transformation',
    },
    {
      icon: Heart,
      title: 'Nutrition Optimization',
      description:
        'Science-based meal planning and nutrition strategies to fuel your workouts and accelerate results.',
      badge: 'Nutrition',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description:
        'Train on your schedule with morning, evening, and weekend sessions available to fit your lifestyle.',
      badge: 'Convenience',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking System',
      description:
        'Advanced metrics tracking including body composition, strength gains, and performance improvements.',
      badge: 'Analytics',
    },
    {
      icon: Users,
      title: 'Group Training Sessions',
      description:
        'High-energy group workouts that build community while pushing you to achieve peak performance.',
      badge: 'Community',
    },
    {
      icon: Trophy,
      title: 'Competition Preparation',
      description:
        'Elite-level coaching for physique competitions, powerlifting meets, and athletic performance goals.',
      badge: 'Elite',
    },
    {
      icon: Clock,
      title: '24/7 Coach Access',
      description:
        'Direct access to your coach for questions, motivation, and real-time adjustments to your program.',
      badge: 'Support',
    },
    {
      icon: Zap,
      title: 'High-Intensity Protocols',
      description:
        'Cutting-edge HIIT and metabolic training methods for maximum fat loss and conditioning results.',
      badge: 'Intensity',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Training Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Body with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Peak Performance Coaching
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive fitness coaching services designed to help you achieve your ultimate body
            transformation and peak physical performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to start your transformation journey?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Class Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
