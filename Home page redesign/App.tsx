import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TechnologySection } from "./components/TechnologySection";
import { CustomerExperienceSection } from "./components/CustomerExperienceSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TechnologySection />
        <CustomerExperienceSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}