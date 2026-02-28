import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Fill in the form.", desc: "Fill in the data required in the form by clicking the button below." },
  { num: "02", title: "Talk to our team.", desc: "We carry out an advice and a personalized quote." },
  { num: "03", title: "Choose a product.", desc: "We have a variety of products for you to choose from." },
  { num: "04", title: "We start to work.", desc: "We start delivering our specialized services." },
];

const HowToBuySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-12">
          How do I make my purchase?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-4xl font-heading font-bold text-primary mb-3">{step.num}</div>
              <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block bg-primary text-primary-foreground font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
