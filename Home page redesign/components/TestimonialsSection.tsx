import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CTO",
    company: "TechFlow Solutions",
    initials: "SC",
    quote: "QualTechEdge transformed our customer experience completely. Our satisfaction scores increased by 40% within six months of implementation.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    title: "Head of Digital",
    company: "Global Retail Corp",
    initials: "MR",
    quote: "The level of technological sophistication combined with their customer-first approach is unmatched. They truly understand modern business challenges.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    title: "VP Customer Success",
    company: "InnovatePro",
    initials: "ET",
    quote: "Working with QualTechEdge has been game-changing. Their solutions are not just advanced, but practical and results-driven.",
    rating: 5
  },
  {
    name: "David Park",
    title: "CEO",
    company: "StartupScale",
    initials: "DP",
    quote: "They helped us scale from a small startup to serving millions of customers without missing a beat. Exceptional technology and support.",
    rating: 5
  },
  {
    name: "Lisa Kumar",
    title: "Digital Director",
    company: "Enterprise Plus",
    initials: "LK",
    quote: "The ROI we've seen from their solutions is incredible. Customer engagement is up 250% and operational costs are down significantly.",
    rating: 5
  },
  {
    name: "James Wilson",
    title: "Chief Innovation Officer",
    company: "FutureTech Industries",
    initials: "JW",
    quote: "QualTechEdge doesn't just deliver technology; they deliver transformation. Our entire business model evolved for the better.",
    rating: 5
  }
];

const companyLogos = [
  "TechFlow",
  "GlobalRetail",
  "InnovatePro",
  "StartupScale",
  "Enterprise+",
  "FutureTech",
  "DataCorp",
  "CloudFirst"
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(3,2,19,0.02),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
            Trusted by Industry
            <span className="block text-primary">Leaders Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their customer experiences 
            and achieved exceptional results with our solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:bg-card/80 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10" />
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Trusted by leading companies worldwide
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {companyLogos.map((logo, index) => (
              <div
                key={logo}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}