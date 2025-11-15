"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[550px] md:h-[650px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/hero/hero-bg.jpg"
        alt="Technology background"
        className="w-full h-full object-cover opacity-90"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6">

        {/* LEFT SIDE TEXT */}
        <div className="text-white max-w-xl space-y-5 z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transforming Businesses  
            with Intelligent IT Solutions
          </h1>

          <p className="text-lg md:text-xl text-white/90">
            Axiatix empowers enterprises through secure, scalable,  
            and cutting-edge technology services.
          </p>

          <button className="mt-4 bg-white text-primary px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-light transition">
            Explore Our Services
          </button>
        </div>

        {/* RIGHT SIDE HEXAGON IMAGES */}
        <div className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2">
          <div className="grid grid-cols-3 gap-4">
            <img src="/hero/hex1.png" className="hex-img w-36" />
            <img src="/hero/hex2.png" className="hex-img w-36" />
            <img src="/hero/hex3.png" className="hex-img w-36" />
            <img src="/hero/hex4.png" className="hex-img w-36" />
            <img src="/hero/hex5.png" className="hex-img w-36" />
            <img src="/hero/hex6.png" className="hex-img w-36" />
          </div>
        </div>

      </div>
    </section>
  );
}
