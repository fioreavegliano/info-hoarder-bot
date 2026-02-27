import { motion } from "framer-motion";

const brands = [
  {
    name: "Safan Darley",
    lead: "Innovación en el desarrollo de plegadoras y cizallas de guillotina",
    description:
      "SafanDarley es el primer especialista mundial en desarrollo y fabricación de prensas plegadoras y cizallas tanto para chapa fina como para chapa gruesa. SafanDarley es una prestigiosa organización holandesa que abarca todas las disciplinas, desde I + D e ingeniería hasta fabricación y montaje, de marketing & ventas a centros de tecnología y formación, y de asistencia remota a departamento de servicio.",
    image: "/images/rep1.jpg",
    reverse: false,
  },
  {
    name: "Hans Gs",
    lead: "Alta tecnología en Ingeniería y desarrollo, I + D",
    description:
      "Compañía subsidiaria del grupo HANS, Ltd, especializada en fabricación y ventas para equipos completos de fuente de láser de alta potencia, corte por láser, soldadura por láser, recubrimiento de fusión láser, procesamiento térmico por láser y máquina de punzonado láser de alta velocidad. Ofrecen planes de resolución de procesos automáticos.",
    image: "/images/hansgs.jpg",
    reverse: true,
  },
  {
    name: "LAG International",
    lead: "Máxima tecnología de mecanizado a nivel mundial.",
    description:
      "Bajo el logo de LAG se producen actualmente en China las históricas máquinas italianas GASPARINI. Debido a la crisis internacional y al reciente crecimiento de la República Popular China la empresa GASPARINI fue vendida a capitales Chinos continuando la producción de sus máquinas en un área de 20.000 metros cuadrados dentro de la provincia de SHANDONG, con una inversión de más de 30 millones de Euros.",
    image: "/images/lag.jpg",
    reverse: false,
  },
];

const BrandsSection = () => {
  return (
    <>
      {/* Dark banner */}
      <div className="dark-section py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-heading font-bold mb-3">
            We Work with the Best
          </h2>
          <p className="text-lg text-industrial-dark-foreground/70">
            MAQUINARIA CNC LLC is an Official Representative of:
          </p>
        </div>
      </div>

      {/* Brand rows */}
      <div className="gray-section">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`flex flex-col ${brand.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-stretch`}
          >
            <div className="md:w-1/2">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-64 md:h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                {brand.name}
              </h3>
              <div className="section-separator !mx-0 mb-4" />
              <p className="text-lg font-medium text-primary mb-3">{brand.lead}</p>
              <p className="text-muted-foreground leading-relaxed">
                {brand.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default BrandsSection;
