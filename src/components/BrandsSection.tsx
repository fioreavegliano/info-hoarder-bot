import { motion } from "framer-motion";

const brands = [
  {
    name: "Safan Darley",
    lead: "Innovation in the development of folding machines and guillotine shears.",
    points: [
      { title: "World specialist", desc: "In development and manufacture of press brakes and shears for both thin and thick plate." },
      { title: "Prestigious Dutch organization", desc: "Covers all disciplines, from R&D and engineering to manufacturing and assembly, from marketing & sales to technology and many more." },
    ],
    image: "/images/safan-darley.png",
    reverse: false,
  },
  {
    name: "Hans GS",
    lead: "High technology in Engineering and development, R&D.",
    points: [
      { title: "Specialized in manufacturing and sales.", desc: "For complete equipment of high power laser source, laser cutting, laser welding." },
      { title: "Other specialties.", desc: "Laser fusion coating, laser thermal processing and high speed laser punching machine." },
    ],
    image: "/images/hansgs-new.jpg",
    reverse: true,
  },
  {
    name: "LAG International",
    lead: "Maximum machining technology worldwide.",
    points: [
      { title: "The LAG's products represent a synthesis.", desc: "Between the Italian Technology Innovation, attention to details & design and the great Chinese Production Capacity." },
      { title: "The best components in the world.", desc: "Bending, shearing and fasteners Insertion machines with the best ratio between quality and price in the market." },
    ],
    image: "/images/lag-new.jpg",
    reverse: false,
  },
];

const BrandsSection = () => {
  return (
    <>
      <div className="dark-section py-12">
        <div className="container text-center">
          <h2 className="text-4xl font-heading font-bold mb-2">We are official representatives of:</h2>
        </div>
      </div>

      <div className="bg-background">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${brand.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-stretch border-b border-border`}
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
              <h3 className="text-3xl font-heading font-bold text-primary mb-2">{brand.name}</h3>
              <p className="text-lg text-muted-foreground mb-6">{brand.lead}</p>
              <div className="space-y-4">
                {brand.points.map((point) => (
                  <div key={point.title}>
                    <h4 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider mb-1">{point.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default BrandsSection;
