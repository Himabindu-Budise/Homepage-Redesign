import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(3,2,19,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(3,2,19,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-border rounded-full px-4 py-2 mb-6 animate-slide-up delay-200">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Pioneering Customer Experience Technology</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight animate-slide-up delay-400">
            Exceptional Customer Experiences
            <span className="block text-primary">Through Technology</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-600">
            We're not just another tech company. We're your strategic partner in delivering 
            exceptional customer experiences that drive growth, build loyalty, and set you apart 
            from the competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-800">
            <Button size="lg" className="group">
              Start Your Transformation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Our Solutions
            </Button>
          </div>
        </div>

        {/* Floating tech elements */}
        <div className="absolute top-1/4 left-8 w-3 h-3 bg-primary rounded-full animate-bounce delay-0"></div>
        <div className="absolute top-1/3 right-12 w-2 h-2 bg-accent-foreground rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 border border-primary rounded-full animate-spin duration-6000"></div>
      </div>
    </section>
  );
}