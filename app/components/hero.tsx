"use client";

import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl space-y-6"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-2xl"
          >
            Transforming Businesses with <br />
            Intelligent IT Solutions
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="text-lg md:text-xl text-gray-300"
          >
            Axiatix empowers enterprises through secure, scalable, and
            innovative technology services.
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.6,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(190, 45, 45, 0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 text-lg rounded-md font-semibold shadow-lg hover:bg-[#8c2525] transition"
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
