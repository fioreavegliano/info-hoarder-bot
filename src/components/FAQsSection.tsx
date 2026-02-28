import { motion } from "framer-motion";

const FAQsSection = () => {
  return (
    <section id="faqs" className="py-16 bg-background">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Have any more questions? Check our FAQs
          </h2>
          <a
            href="https://www.maquinariacnc.com/faqs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            See FAQs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQsSection;
