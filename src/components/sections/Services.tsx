import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Dumbbell,
  Apple,
  Target,
  Users,
  Calendar,
  Trophy,
  Heart,
  Zap,
} from 'lucide-react';

export default function ServicesListDescriptions() {
  const services = [
    {
      id: 'body-transformation',
      title: 'Complete Body Transformation',
      description: 'Comprehensive 12-week program for total body makeover',
      longDescription:
        "Our signature transformation program combines personalized training, nutrition coaching, and mindset work to deliver life-changing results. You'll receive daily support, weekly check-ins, and a proven system that's helped over 500 clients achieve their dream physique.",
      icon: Trophy,
      benefits: [
        'Custom workout plans updated weekly',
        'Personalized macro-based nutrition plan',
        '24/7 coach support via app',
        'Body composition tracking & analysis',
      ],
      pricing: 'Investment: $2,497 (3 payments available)',
      timeline: '12-week intensive program',
      featured: true,
      badge: 'Most Transformative',
    },
    {
      id: 'strength-coaching',
      title: 'Elite Strength Coaching',
      description: 'Build serious muscle and strength with powerlifting-focused training',
      longDescription:
        'Designed for serious lifters who want to maximize their strength potential. This program focuses on the big three lifts while building functional muscle mass. Perfect for athletes and fitness enthusiasts ready to take their training to the next level.',
      icon: Dumbbell,
      benefits: [
        'Periodized strength programming',
        'Video form analysis and feedback',
        'Competition prep guidance',
        'Advanced recovery protocols',
      ],
      pricing: 'Monthly: $397',
      timeline: 'Ongoing monthly coaching',
    },
    {
      id: 'nutrition-mastery',
      title: 'Nutrition Mastery Program',
      description: 'Master flexible dieting and build a sustainable relationship with food',
      longDescription:
        'Learn the science of nutrition without restrictive dieting. Our evidence-based approach teaches you how to eat for your goals while enjoying the foods you love. Includes meal planning, supplement guidance, and metabolic optimization strategies.',
      icon: Apple,
      benefits: [
        'Flexible dieting education',
        'Custom meal planning system',
        'Supplement optimization',
        'Metabolic health assessment',
      ],
      pricing: 'One-time: $997',
      timeline: '8-week self-paced course',
    },
    {
      id: 'accountability-coaching',
      title: 'Accountability & Mindset Coaching',
      description: 'Overcome mental barriers and build unshakeable discipline',
      longDescription:
        'Transform your mindset and develop the mental toughness needed for lasting change. This program addresses the psychological aspects of fitness, helping you overcome self-sabotage, build confidence, and maintain motivation long-term.',
      icon: Target,
      benefits: [
        'Weekly mindset coaching calls',
        'Habit tracking and optimization',
        'Stress management techniques',
        'Goal setting and achievement strategies',
      ],
      pricing: 'Monthly: $297',
      timeline: '3-month minimum commitment',
      badge: 'Life-Changing',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary text-primary">
            <Zap className="size-4 mr-2" />
            Transformation Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Programs That Deliver
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose from our proven coaching programs designed to transform your body, mindset, and
            lifestyle. Each program is backed by science and delivered with the personal touch that
            sets Peak Performance apart.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.id}>
                <div
                  className={`
                  group relative overflow-hidden rounded-2xl
                  ${
                    service.featured
                      ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8'
                      : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}
                >
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${
                          service.featured
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }
                      `}
                      >
                        <Icon className="size-7" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                        {service.badge && (
                          <Badge variant={service.featured ? 'default' : 'secondary'}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-primary text-primary" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">{service.description}</p>

                      {service.longDescription && (
                        <p className="text-muted-foreground">{service.longDescription}</p>
                      )}

                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold text-primary">
                              {service.pricing.replace('Investment: ', '')}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <Calendar className="size-4 text-muted-foreground" />
                            <span className="text-sm font-semibold">{service.timeline}</span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          variant={service.featured ? 'default' : 'outline'}
                          className="group/btn"
                          size="lg"
                        >
                          Start Free Trial
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between items */}
                {index < services.length - 1 && <Separator className="my-8" />}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 text-center border border-primary/20">
          <div className="flex justify-center mb-4">
            <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Heart className="size-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Ready to Transform Your Life?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join over 500 successful transformations. Book your free strategy session and discover
            which program is perfect for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Free Strategy Session
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline">
              Class Schedule
              <Users className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
