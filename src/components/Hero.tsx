import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gemeliaLogo from "@/assets/gemelia-logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-12 flex justify-center">
          <img 
            src={gemeliaLogo} 
            alt="Gemelia Logo" 
            className="h-24 md:h-32 animate-float"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Innovación Tecnológica<br />para tu Negocio
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Desarrollamos chatbots inteligentes, páginas web profesionales y automatizaciones 
          que impulsan el crecimiento de tu empresa
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
            Solicitar Consulta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
