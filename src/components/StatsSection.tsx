import { motion } from "framer-motion";

const stats = [
  { value: "6", label: "Years of experience in different countries" },
  { value: "+31", label: "Satisfied customers" },
  { value: "2", label: "Products of excellence" },
];

const StatsSection = () => {
  return (
    <section className="dark-section py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-industrial-dark-foreground/70 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
