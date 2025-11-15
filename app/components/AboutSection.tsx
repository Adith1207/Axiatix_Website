"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, Building2 } from "lucide-react";
import Counter from "./Counter";

// Generate floating particles ONLY on client to avoid hydration mismatch
function useFloatingParticles(count: number) {
  const [particles, setParticles] = useState<
    { top: number; left: number; delay: number }[]
  >([]);

  useEffect(() => {
    const arr = Array.from({ length: count }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));

    setParticles(arr);
  }, [count]);

  return particles;
}

export default function AboutSection() {
  const particles1 = useFloatingParticles(8);
  const particles2 = useFloatingParticles(8);

  return (
    <section className="relative w-full overflow-hidden pt-0 pb-24">
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

      {/* FLOATING BACKGROUND SHAPES */}
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

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center z-10">
        {/* IMAGE WITH GLOW */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-5 bg-primary/20 blur-2xl rounded-2xl"></div>

          <img
            src="/about/about.jpg"
            alt="Axiatix Team"
            className="rounded-xl shadow-2xl object-cover w-full h-[340px] relative z-10"
          />
        </motion.div>

        {/* TEXT + CTA BUTTON */}
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
        className="
          max-w-6xl mx-auto mt-24 
          grid grid-cols-1 md:grid-cols-3 gap-8 text-center 
          relative z-10
        "
      >
        {[
          { label: "Years Experience", value: 10, Icon: Briefcase },
          { label: "Happy Clients", value: 120, Icon: Users },
          { label: "Projects Delivered", value: 200, Icon: Building2 },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="
              relative p-8 rounded-xl shadow-2xl overflow-hidden 
              bg-gradient-to-br from-[#a42a2a] to-[#7d1d1d]
              border border-black/30 group
              hover:scale-[1.03] hover:shadow-red-500/30
              transition-all duration-300
            "
          >
            {/* FLOATING PARTICLES */}
            <div className="absolute inset-0 pointer-events-none">
              {particles1.map((p, i) => (
                <motion.span
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                    delay: p.delay,
                  }}
                  style={{ top: `${p.top}%`, left: `${p.left}%` }}
                ></motion.span>
              ))}
            </div>

            {/* SHINE */}
            <div
              className="
                absolute inset-0 
                bg-gradient-to-r from-transparent via-white/20 to-transparent 
                opacity-0 group-hover:opacity-20
                transition-all duration-500
                pointer-events-none
                animate-[shineSweep_2s_ease-in-out_infinite]
              "
            />

            {/* ICON */}
            <item.Icon
              className="mx-auto mb-4 text-[#f5e6d3] opacity-90"
              size={36}
            />

            {/* GLOW BEHIND NUMBER */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 bg-primary/20 blur-3xl rounded-full"></div>
            </div>

            {/* COUNTER */}
            <h3 className="text-5xl font-extrabold text-[#f5e6d3] relative z-10 drop-shadow-xl">
              <Counter to={item.value} duration={800} />+
            </h3>

            <p className="text-[#f5e6d3]/90 font-medium mt-3 relative z-10">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
