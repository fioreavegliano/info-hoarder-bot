import { motion } from "framer-motion";
import { MessageSquare, Key, GraduationCap, Cog, LifeBuoy } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Consultoría y Asesoramiento",
    description:
      "Nuestra amplia experiencia en el mercado, más un completo relevamiento de los procesos involucrados, permitirán ofrecerle la solución más efectiva para su empresa.",
  },
  {
    icon: Key,
    title: "Venta, importación, instalación",
    description:
      "A partir de una Orden de pedido, Maquinaria CNC se ocupa de la gestión completa en todas las instancias necesarias hasta la puesta en marcha de la unidad.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación",
    description:
      "Están previstas las instancias necesarias para brindar una adecuada capacitación a los operarios finales de cada unidad.",
  },
  {
    icon: Cog,
    title: "Mantenimiento Preventivo",
    description:
      'Checkup periódico con el fin de comprobar la eficiencia de la máquina y garantizar que su rendimiento se mantenga constante en el tiempo en términos de productividad, fiabilidad y seguridad.',
  },
  {
    icon: LifeBuoy,
    title: "Soporte Técnico Especializado",
    description:
      "Ponemos a su disposición personal altamente capacitado para atender los requerimientos de su maquinaria ante probables anomalías de funcionamiento.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Servicios
          </h2>
          <div className="section-separator mb-4" />
          <p className="text-muted-foreground text-lg">
            Configurados para la Eficiencia de su Empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block row-span-2 rounded overflow-hidden"
          >
            <img
              src="/images/serv1.jpg"
              alt="Servicios de maquinaria CNC"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Service cards */}
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <service.icon size={22} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
