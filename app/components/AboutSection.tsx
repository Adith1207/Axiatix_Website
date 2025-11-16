"use client";

import { useEffect, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, Building2 } from "lucide-react";
import Counter from "./Counter";

// Types
type Particle = { top: number; left: number; delay: number };

type StatItem = {
  label: string;
  value: number;
  Icon: ComponentType<{ className?: string; size?: number }>;
};

// Generate floating background particles
function useFloatingParticles(count: number) {
  const [particles, setParticles] = useState<Particle[]>([]);

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

// Sparkle particle generator for hover effect
const Sparkles = ({ active }: { active: boolean }) => {
  const [sparkles, setSparkles] = useState<
    { id: number; x: number; y: number; size: number }[]
  >([]);

  useEffect(() => {
    if (!active) {
      setSparkles([]);
      return;
    }

    const createSparkle = () => ({
      id: Date.now() + Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 4,
    });

    const interval = setInterval(() => {
      setSparkles((prev) => [...prev.slice(-10), createSparkle()]);
    }, 120);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <>
      {sparkles.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            top: `${s.y}%`,
            left: `${s.x}%`,
            width: s.size,
            height: s.size,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      ))}
    </>
  );
};

type StatCardProps = {
  item: StatItem;
  index: number;
};

function StatCard({ item, index }: StatCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={item.label}
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="
        relative p-8 rounded-xl shadow-xl group cursor-pointer 
        bg-gradient-to-br from-[#a42a2a] to-[#7d1d1d]
        border border-black/30 
        transition-all duration-500
        overflow-hidden
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        scale: 1.06,
        rotateX: 2,
        rotateY: -2,
        boxShadow: "0px 0px 25px rgba(255, 60, 60, 0.7)",
      }}
    >
      {/* Sparkles on hover */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles active={hovered} />
      </div>

      <item.Icon
        className="mx-auto mb-4 text-[#f5e6d3] relative z-10"
        size={36}
      />

      <h3 className="text-5xl font-extrabold text-[#f5e6d3] relative z-10">
        <Counter to={item.value} />+
      </h3>

      <p className="text-[#f5e6d3]/90 font-medium mt-3 relative z-10">
        {item.label}
      </p>
    </motion.div>
  );
}

export default function AboutSection() {
  const particles1 = useFloatingParticles(8);

  const stats: StatItem[] = [
    { label: "Years Experience", value: 10, Icon: Briefcase },
    { label: "Happy Clients", value: 120, Icon: Users },
    { label: "Projects Delivered", value: 200, Icon: Building2 },
  ];

  return (
    <section className="relative w-full overflow-hidden pt-0 pb-24">
      {/* TOP WAVE */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f7eaea"
            d="M0,0 C480,80 960,40 1440,100 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7eaea] to-[#f1d6d6]" />

      {/* FLOATING SHAPES */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-white/10 top-20 left-20 opacity-20"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-primary/10 bottom-20 right-32 opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 left-10 opacity-40"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <svg width="140" height="140" viewBox="0 0 200 200">
          <polygon
            points="100,10 180,55 180,145 100,190 20,145 20,55"
            fill="none"
            stroke="#a42a2a"
            strokeWidth="3"
            opacity="0.35"
          />
        </svg>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center z-10">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-5 bg-primary/10 rounded-2xl opacity-30" />
          <img
            src="/assets/about1.jpeg"
            alt="Axiatix Team"
            className="rounded-xl shadow-xl object-cover w-full h-[340px] relative z-10"
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

          <p className="text-gray-800 text-lg leading-relaxed">
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
                  px-6 py-3 rounded-md font-semibold text-primary 
                  bg-white border-2 border-primary 
                  hover:bg-primary hover:text-white transition-all duration-200 
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
        className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center z-10"
      >
        {stats.map((item, index) => (
          <StatCard key={item.label} item={item} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
