import { MapPin } from "lucide-react";
import gemeliaLogo from "@/assets/gemelia-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={gemeliaLogo} alt="Gemelia" className="h-10" />
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Monterrey, Nuevo León, México</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © 2025 Gemelia. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
