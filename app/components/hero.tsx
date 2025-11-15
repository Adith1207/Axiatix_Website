"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[750px] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg"></div>

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Transforming Businesses with
            <br /> Intelligent IT Solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Axiatix empowers enterprises through secure, scalable, and
            innovative technology services.
          </p>

          <button className="bg-white text-primary px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-light transition">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
