import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container py-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight"
          >
            <span className="text-primary">We help you improve</span> the performance of your machinery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
          >
            Our company is specialized in helping the Metallurgical Market to achieve solutions in machine performance through automation and programming methodologies.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            See products
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
