import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const plans = [
    {
      name: 'Foundation',
      description: 'Perfect for fitness beginners starting their journey',
      price: '$97',
      period: '/month',
      badge: null,
      features: [
        'Custom workout plan',
        'Basic nutrition guidance',
        'Weekly check-ins',
        'Exercise video library',
        'Progress tracking app',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Transformation',
      description: 'Complete coaching for serious body transformation',
      price: '$197',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Personalized training program',
        'Custom meal plans & recipes',
        'Bi-weekly coaching calls',
        '24/7 WhatsApp support',
        'Supplement recommendations',
        'Body composition analysis',
        'Habit tracking system',
        'Private client community',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Elite Performance',
      description: 'Premium 1-on-1 coaching for maximum results',
      price: '$397',
      period: '/month',
      badge: 'VIP Access',
      features: [
        'Everything in Transformation',
        'Weekly 1-on-1 video calls',
        'Daily accountability check-ins',
        'Advanced performance metrics',
        'Competition prep coaching',
        'Injury prevention protocols',
        'Priority response guarantee',
        'Exclusive masterclass access',
      ],
      cta: 'Apply Now',
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary text-primary">
            Coaching Programs
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Body,
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Your Life
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose your path to peak performance. Every program includes proven strategies that have
            helped 500+ clients achieve their dream physique.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              3 Months
              <Badge variant="secondary" className="ml-2 text-xs bg-primary/10 text-primary">
                Save 15%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit border-accent text-accent">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Transformation' && (
                  <p className="text-center text-sm text-muted-foreground">
                    7-day free trial • Cancel anytime • Results guaranteed
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Not sure which program fits you?</h3>
          <p className="text-muted-foreground mb-6">
            Book a free strategy session where we'll assess your current fitness level, discuss your
            goals, and create a personalized roadmap to your transformation.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Book Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
}
