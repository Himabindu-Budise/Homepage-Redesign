import { Separator } from "./ui/separator";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const footerSections = [
  {
    title: "Solutions",
    links: [
      { name: "Mobile Experience", href: "#" },
      { name: "Digital Platforms", href: "#" },
      { name: "Customer Communication", href: "#" },
      { name: "Analytics & Insights", href: "#" }
    ]
  },
  {
    title: "Technology",
    links: [
      { name: "AI & Machine Learning", href: "#" },
      { name: "Cloud Architecture", href: "#" },
      { name: "Security & Compliance", href: "#" },
      { name: "Real-time Processing", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News & Updates", href: "#" },
      { name: "Case Studies", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Contact Support", href: "#" },
      { name: "System Status", href: "#" }
    ]
  }
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" }
];

const contactInfo = [
  { icon: Mail, text: "hello@qualtechedge.com" },
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: MapPin, text: "San Francisco, CA" }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-accent/5 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-medium text-sm">QT</span>
              </div>
              <span className="font-medium text-xl">QualTechEdge</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming customer experiences through cutting-edge technology 
              and innovative solutions. Partner with us to deliver exceptional 
              results that drive growth and build lasting relationships.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <contact.icon className="w-4 h-4 text-primary" />
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="animate-slide-up"
              style={{ animationDelay: `${sectionIndex * 100}ms` }}
            >
              <h3 className="font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in">
          <p className="text-sm text-muted-foreground">
            © 2024 QualTechEdge. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}