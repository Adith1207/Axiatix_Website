import Hero from "./components/hero";
import AboutSection from "./components/AboutSection";
import TechnologyPartners from "./components/TechnologyPartners";
//import ServicesSection from "./components/ServicesSection";
//import Partners from "./components/Partners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechnologyPartners />
      <AboutSection />
      {/* Add more as needed */}
    </>
  );
}
