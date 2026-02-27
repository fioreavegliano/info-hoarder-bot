import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    title: "Eficiencia y Calidad",
    subtitle: "Somos Especialistas en Maquinaria para corte y deformación de chapa en frio.\nProbada trayectoria certifica nuestra experiencia.",
  },
  {
    title: "Instalación y Mantenimiento",
    subtitle: "Recursos Humanos altamente capacitados\npara asistirlo en todos los procesos de producción desde el inicio.",
  },
  {
    title: "Llave en mano",
    subtitle: "Entregas de soluciones automatizadas en corte y deformación de chapa",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 tracking-tight"
        >
          {slides[0].title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-primary-foreground/90 whitespace-pre-line leading-relaxed"
        >
          {slides[0].subtitle}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
      >
        <ChevronDown size={48} className="animate-bounce" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
