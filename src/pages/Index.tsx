import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Amenities from "@/components/Amenities";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Amenities />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
