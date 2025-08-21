import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Heart, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500M+",
    label: "Customer Interactions",
    description: "Processed annually"
  },
  {
    icon: Heart,
    value: "98%",
    label: "Satisfaction Rate",
    description: "Customer happiness"
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "ROI Improvement",
    description: "Average client gain"
  },
  {
    icon: Award,
    value: "24/7",
    label: "Support Excellence",
    description: "Always available"
  }
];

const experiences = [
  {
    title: "Personalized Journeys",
    description: "Create unique customer paths that adapt in real-time based on behavior, preferences, and context.",
    gradient: "from-blue-500/10 to-purple-500/10"
  },
  {
    title: "Omnichannel Harmony",
    description: "Seamless experiences across all touchpoints - web, mobile, social, and in-person interactions.",
    gradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    title: "Predictive Insights",
    description: "Anticipate customer needs before they arise, delivering proactive solutions and support.",
    gradient: "from-pink-500/10 to-orange-500/10"
  }
];

export function CustomerExperienceSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(3,2,19,0.03),transparent_50%)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-fade-in">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-medium text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-left">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
              Customer Experience is
              <span className="block text-primary">Our Obsession</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We don't just build technology; we craft experiences that create emotional 
              connections between your brand and your customers. Every interaction is an 
              opportunity to exceed expectations and build lasting relationships.
            </p>
            <Button size="lg" className="group">
              Discover Our Approach
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="space-y-6 animate-slide-right">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className={`border-border/50 bg-gradient-to-r ${experience.gradient} backdrop-blur-sm hover:border-primary/20 transition-all duration-300 group`}>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-3 text-lg group-hover:text-primary transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}