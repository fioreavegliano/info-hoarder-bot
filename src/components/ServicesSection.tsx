import { motion } from "framer-motion";
import { MessageSquare, Key, GraduationCap, Cog, LifeBuoy } from "lucide-react";

const services = [
  { icon: MessageSquare, title: "Consulting and Advice" },
  { icon: Key, title: "Sale, import, installation" },
  { icon: GraduationCap, title: "Training" },
  { icon: Cog, title: "Preventive Maintenance" },
  { icon: LifeBuoy, title: "Specialized Technical Support" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 gray-section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-heading font-bold text-primary mb-8">Services</h2>
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-background hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <service.icon size={18} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{service.title}</h3>
                </motion.div>
              ))}
            </div>
            <a
              href="https://www.maquinariacnc.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Read more
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/services.jpg"
              alt="Our services"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
