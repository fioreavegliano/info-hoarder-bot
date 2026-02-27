import { motion } from "framer-motion";

const products = [
  "/images/prods/prod1.png",
  "/images/prods/prod2.png",
  "/images/prods/prod3.png",
  "/images/prods/prod4.png",
  "/images/prods/prod5.png",
];

const ProductsSection = () => {
  return (
    <section id="productos" className="py-20 gray-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
            Productos
          </h2>
          <div className="section-separator mb-4" />
          <p className="text-lg text-muted-foreground">
            Amplias líneas de productos con la{" "}
            <strong className="text-foreground">EFICIENCIA</strong> como premisa
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {products.map((img, i) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="overflow-hidden group"
          >
            <img
              src={img}
              alt={`Producto ${i + 1}`}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
