import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { 
  ArrowRight, 
  Smartphone, 
  Monitor, 
  MessageSquare, 
  BarChart,
  Settings,
  Headphones
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Experience Optimization",
    description: "Create seamless mobile experiences that drive engagement and conversions across all devices.",
    features: ["Responsive Design", "App Development", "Progressive Web Apps", "Mobile Analytics"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Monitor,
    title: "Digital Platform Solutions",
    description: "Build robust digital platforms that scale with your business and exceed customer expectations.",
    features: ["Custom Development", "Platform Integration", "API Management", "Cloud Solutions"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description: "Enable meaningful conversations with your customers through intelligent communication systems.",
    features: ["Chatbot Integration", "Live Chat", "Multi-channel Support", "Voice Solutions"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Turn customer data into actionable insights that drive better business decisions.",
    features: ["Real-time Analytics", "Customer Journey Mapping", "Predictive Modeling", "Custom Dashboards"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Settings,
    title: "Process Automation",
    description: "Streamline operations and improve efficiency with intelligent automation solutions.",
    features: ["Workflow Automation", "AI Integration", "Process Optimization", "Custom Tools"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Headphones,
    title: "24/7 Support & Maintenance",
    description: "Ensure your systems run smoothly with our comprehensive support and maintenance services.",
    features: ["Proactive Monitoring", "Regular Updates", "Performance Optimization", "Emergency Support"],
    color: "from-teal-500 to-green-500"
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
            Solutions That Drive
            <span className="block text-primary">Customer Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From strategy to implementation, we provide end-to-end solutions that transform 
            how you connect with your customers and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:bg-card/80 transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-medium text-lg group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up delay-600">
          <Button size="lg" className="group">
            View All Solutions
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}