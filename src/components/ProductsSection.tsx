import { motion } from "framer-motion";

const products = [
  { name: "Electronic Press Brakes", image: "/images/prods/electronic-press.jpg", link: "https://www.maquinariacnc.com/electronic-press-brakes" },
  { name: "Hydraulic Press Brakes", image: "/images/prods/hydraulic-press.jpg", link: "https://www.maquinariacnc.com/hydraulic-press-brakes" },
  { name: "Shears", image: "/images/prods/shears.jpg", link: "https://www.maquinariacnc.com/shears" },
  { name: "Used Machines", image: "/images/prods/used-machines.jpg", link: "https://www.maquinariacnc.com/used-machines" },
  { name: "CNC Laser Cutter", image: "/images/prods/laser-cutter.png", link: "https://www.maquinariacnc.com/cnc-laser-cut" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 gray-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Products</h2>
          <p className="text-lg text-muted-foreground">
            Wide product lines with <strong className="text-foreground">EFFICIENCY</strong> as a premise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-heading font-bold text-foreground text-lg mb-3">{product.name}</h3>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground text-sm font-medium px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
                >
                  I'm interested
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
