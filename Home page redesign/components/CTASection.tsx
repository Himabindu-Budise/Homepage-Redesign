import { Button } from "./ui/button";
import { ArrowRight, Calendar, MessageCircle, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(3,2,19,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(3,2,19,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
            Ready to Transform Your
            <span className="block text-primary">Customer Experience?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Join the companies that have already revolutionized their customer relationships. 
            Let's discuss how we can help you achieve exceptional results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up delay-200">
            <Button size="lg" className="group text-lg px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up delay-400">
            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium mb-2">Book a Meeting</h3>
              <p className="text-sm text-muted-foreground">
                Schedule a personalized demo and strategy session
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground">
                Get instant answers to your questions
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                Send us your requirements and we'll respond within 24 hours
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-8 animate-fade-in delay-600">
            No commitment required • Free consultation • Immediate response
          </p>
        </div>
      </div>
    </section>
  );
}