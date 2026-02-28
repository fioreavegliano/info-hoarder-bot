import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import StatsSection from "@/components/StatsSection";
import HowToBuySection from "@/components/HowToBuySection";
import BrandsSection from "@/components/BrandsSection";
import ServicesSection from "@/components/ServicesSection";
import FAQsSection from "@/components/FAQsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <StatsSection />
      <HowToBuySection />
      <BrandsSection />
      <ServicesSection />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default Index;
