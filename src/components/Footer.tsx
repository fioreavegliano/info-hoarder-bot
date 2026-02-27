import { Phone, Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="dark-section py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-3">MAQUINARIA CNC LLC</h3>
            <p className="text-industrial-dark-foreground/60 text-sm leading-relaxed">
              We are specialists in machinery for sheet metal cutting and deformation.
            </p>
            <p className="text-industrial-dark-foreground/50 text-xs mt-4 uppercase tracking-wider">
              Technical Service and Automation of Machines in the Metalworking Industry as well as Fiber Laser Cutting Machines or Sheet Metal Bending Machines.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-3">Contacto</h3>
            <ul className="space-y-3 text-sm text-industrial-dark-foreground/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+17273080631" className="hover:text-primary transition-colors">
                  +1 (727) 308-0631
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} className="text-primary flex-shrink-0" />
                <a
                  href="http://maquinariacnc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  maquinariacnc.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-3">Navegación</h3>
            <ul className="space-y-2 text-sm text-industrial-dark-foreground/70">
              {["Home", "Nosotros", "Servicios", "Productos"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-separator mb-6" />
        <p className="text-center text-industrial-dark-foreground/40 text-xs">
          © {new Date().getFullYear()} Maquinaria CNC LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
