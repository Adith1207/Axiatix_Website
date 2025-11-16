import Hero from "./components/hero";
import AboutSection from "./components/AboutSection";
import TechnologyPartners from "./components/TechnologyPartners";
import ServicesSection from "./components/Services";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
//import Partners from "./components/Partners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechnologyPartners />
      <AboutSection />
      <ServicesSection />
      <WhatSetsUsApart />
      {/* Add more as needed */}
    </>
  );
}
