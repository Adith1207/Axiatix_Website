"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Counter from "./Counter";

export default function AboutSection() {
  return (
    <section className="relative w-full pt-0 pb-24 overflow-hidden">
      {/* TOP WAVE DIVIDER */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f7eaea"
            d="M0,0 C480,80 960,40 1440,100 L1440,120 L0,120 Z"
          ></path>
        </svg>
      </div>

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7eaea] to-[#f1d6d6]"></div>

      {/* FLOATING BLUR SHAPES */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-white/20 blur-2xl top-20 left-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-32 h-32 rounded-full bg-primary/10 blur-xl bottom-20 right-32"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* FLOATING HEXAGON OUTLINE */}
      <motion.div
        className="absolute top-1/3 left-10 opacity-40"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <svg width="140" height="140" viewBox="0 0 200 200">
          <polygon
            points="100,10 180,55 180,145 100,190 20,145 20,55"
            fill="none"
            stroke="#a42a2a"
            strokeWidth="3"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center z-10">
        {/* IMAGE WITH GLOW */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* GLOW BEHIND IMAGE */}
          <div className="absolute -inset-5 bg-primary/20 blur-2xl rounded-2xl"></div>

          <img
            src="/about/about.jpg"
            alt="Axiatix Team"
            className="rounded-xl shadow-2xl object-cover w-full h-[340px] relative z-10"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About <span className="text-primary">Axiatix</span>
          </h2>

          <p className="text-gray-800 leading-relaxed text-lg">
            We empower enterprises with secure, scalable, and forward-thinking
            technology solutions built for long-term growth.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With expertise in cloud, cybersecurity, AI automation, and managed
            IT services, Axiatix helps organizations modernize and accelerate
            their digital transformation journey.
          </p>

          {/* CTA BUTTON */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/about">
              <button
                className="
                  px-6 py-3 
                  rounded-md 
                  font-semibold 
                  text-primary 
                  bg-white 
                  border-2 border-primary 
                  hover:bg-primary hover:text-white 
                  transition-all duration-200 
                  flex items-center gap-2
                "
              >
                Learn More
                <ArrowRight size={18} />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* STATS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10"
      >
        {/* STAT BOX */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="
            p-6 
            rounded-xl 
            bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] 
            shadow-xl 
            border border-black/20 
            relative overflow-hidden
            "
        >
          {/* glossy top highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none"></div>

          <h3 className="text-4xl font-extrabold text-primary flex justify-center items-center gap-1 drop-shadow-lg">
            <Counter to={10} duration={800} />+
          </h3>
          <p className="text-gray-300 font-medium mt-2">Years Experience</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            p-6 
            rounded-xl 
            bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] 
            shadow-xl 
            border border-black/20 
            relative overflow-hidden
            "
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none"></div>

          <h3 className="text-4xl font-extrabold text-primary flex justify-center items-center gap-1 drop-shadow-lg">
            <Counter to={120} duration={900} />+
          </h3>
          <p className="text-gray-300 font-medium mt-2">Happy Clients</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="
            p-6 
            rounded-xl 
            bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] 
            shadow-xl 
            border border-black/20 
            relative overflow-hidden
            "
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none"></div>

          <h3 className="text-4xl font-extrabold text-primary flex justify-center items-center gap-1 drop-shadow-lg">
            <Counter to={200} duration={900} />+
          </h3>
          <p className="text-gray-300 font-medium mt-2">Projects Delivered</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
