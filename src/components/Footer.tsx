import { Phone, Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="dark-section py-16">
      <div className="container">
        {/* Contact info banner */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-heading font-bold mb-2">We are willing to listen to you</h3>
          <a href="mailto:contact@maquinariacnc.com" className="text-primary hover:underline">
            contact@maquinariacnc.com
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Company info */}
          <div>
            <img src="/images/logo.png" alt="Maquinaria CNC LLC" className="h-12 mb-4 brightness-200" />
            <p className="text-industrial-dark-foreground/60 text-sm leading-relaxed">
              7901 4TH ST N, STE 4000
            </p>
            <p className="text-industrial-dark-foreground/60 text-sm">ST. PETERSBURG, FL 33702</p>
            <p className="text-industrial-dark-foreground/60 text-sm mt-2">+1 727 308-0631</p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-industrial-dark-foreground/70">
              {[
                { label: "FAQs", href: "https://www.maquinariacnc.com/faqs" },
                { label: "About us", href: "https://www.maquinariacnc.com/about-us" },
                { label: "Services", href: "https://www.maquinariacnc.com/services" },
                { label: "Contact", href: "https://www.maquinariacnc.com/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-industrial-dark-foreground/70">
              {[
                { label: "Electronic Press Brakes", href: "https://www.maquinariacnc.com/electronic-press-brakes" },
                { label: "Hydraulic Press Brakes", href: "https://www.maquinariacnc.com/hydraulic-press-brakes" },
                { label: "Shears", href: "https://www.maquinariacnc.com/shears" },
                { label: "CNC Laser Cutter", href: "https://www.maquinariacnc.com/cnc-laser-cut" },
                { label: "Used Machines", href: "https://www.maquinariacnc.com/used-machines" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-separator mb-6" />
        <p className="text-center text-industrial-dark-foreground/40 text-xs">
          Copyright © 2021 | Maquinaria CNC LLC - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
