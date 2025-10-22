import { Card } from "@/components/ui/card";
import { Bot, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Automatiza la atención al cliente con chatbots personalizados que entienden y responden como humanos",
  },
  {
    icon: Globe,
    title: "Desarrollo Web & UX Design",
    description: "Creamos páginas y sistemas web profesionales con diseño UX que convierten visitantes en clientes",
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    description: "Optimiza procesos y ahorra tiempo con automatizaciones inteligentes adaptadas a tu negocio",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6" id="servicios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones tecnológicas completas para llevar tu negocio al siguiente nivel
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
