import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">About us</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are a company dedicated to the technical service and sale of machines specialized in cold sheet cutting and deformation.
              </p>
              <p>
                With more than <strong className="text-foreground">20 years of accumulated experience</strong>, we have accompanied, and continue to do so, the growth of small, medium, and large companies, bringing them innovation with cutting-edge technology and efficiency in production.
              </p>
            </div>
            <a
              href="https://www.maquinariacnc.com/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Know more
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/about.jpg"
              alt="About Maquinaria CNC"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
