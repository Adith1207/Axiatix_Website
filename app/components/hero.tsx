"use client";

import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[750px] overflow-hidden bg-black">
      {/* Animated Particle Background */}
      <ParticlesBackground />

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Transforming Businesses with <br />
            Intelligent IT Solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Axiatix empowers enterprises through secure, scalable, and
            innovative technology services.
          </p>

          <button className="bg-primary text-white px-8 py-3 text-lg rounded-md font-semibold shadow-md hover:bg-[#8c2525] transition">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
