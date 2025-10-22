import { Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
          <Users className="h-12 w-12 text-primary" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          La Ventaja Gemelia
        </h2>
        
        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
          Somos hermanos gemelos apasionados por la tecnología. Nuestra conexión única 
          nos permite trabajar en perfecta sincronía, duplicando la eficiencia y 
          creatividad en cada proyecto.
        </p>
        
        <p className="text-lg text-muted-foreground">
          Basados en <span className="text-primary font-semibold">Monterrey, Nuevo León</span>, 
          ayudamos a empresas a transformar sus operaciones con tecnología de vanguardia.
        </p>
      </div>
    </section>
  );
};

export default About;
