import { Card, CardContent } from "./ui/card";
import { 
  Brain, 
  Database, 
  Shield, 
  Zap, 
  Cloud, 
  BarChart3,
  Cpu,
  Globe
} from "lucide-react";

const technologies = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Advanced algorithms that learn and adapt to deliver personalized customer experiences at scale."
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that drive customer satisfaction and business growth."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security ensuring your customer data is protected and compliant."
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast response times that keep your customers engaged and satisfied."
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable, reliable infrastructure that grows with your business needs."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Deep insights into customer behavior and system performance optimization."
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Distributed processing for reduced latency and enhanced user experiences."
  },
  {
    icon: Globe,
    title: "Global Integration",
    description: "Seamless connectivity across platforms, regions, and customer touchpoints."
  }
];

export function TechnologySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Technology That Powers
            <span className="block text-primary">Exceptional Experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge technology stack is designed to deliver unparalleled customer experiences 
            while maintaining the highest standards of performance, security, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:bg-card/80 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <tech.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent"></div>
          <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent"></div>
        </div>
      </div>
    </section>
  );
}