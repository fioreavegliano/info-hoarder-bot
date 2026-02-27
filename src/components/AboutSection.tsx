import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Nosotros
          </h2>
          <div className="section-separator mb-8" />

          <div className="text-left space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Somos una empresa argentina dedicada al servicio técnico y venta de
              máquinas especializadas en corte y deformación de la chapa en frío.
            </p>
            <p>
              Con <strong className="text-foreground">más de 20 años de experiencia</strong>{" "}
              acumulada hemos acompañado, y lo seguiremos haciendo, el crecimiento de
              pequeñas, medianas, y grandes empresas, acercándoles innovación con
              tecnología de vanguardia y eficiencia en la producción.
            </p>
            <p>
              Trabajamos líneas de primer nivel, con personal altamente capacitado y de
              gran expertise en el funcionamiento de todas las maquinarias que
              implementamos. Nuestro compromiso es establecer un vínculo personalizado
              con el cliente a largo plazo, que aporte seguridad, confianza y
              productividad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
