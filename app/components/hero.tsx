"use client";

import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative w-full h-[650px] md:h-[750px] overflow-hidden bg-[#121212]">
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Charcoal overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r 
          from-[#121212]/95 
          via-[#1a1a1a]/80 
          to-[#242424]/60"
      ></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
            Transforming Businesses with <br />
            Intelligent IT Solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-300">
            Axiatix empowers enterprises through secure, scalable, and
            innovative technology services.
          </p>

          <button className="bg-primary text-white px-8 py-3 text-lg rounded-md font-semibold shadow-lg hover:bg-[#8c2525] transition">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
