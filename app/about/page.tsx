"use client";

import { motion } from "framer-motion";
import { Building2, Globe2, Target, Rocket, MapPin } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-white via-[#f7eaea] to-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[380px] md:h-[450px] w-full overflow-hidden">
        <Image
          src="/assets/about-hero.jpg"
          alt="About Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            About <span className="text-[#a42a2a]">Axiatix</span>
          </motion.h1>
          <motion.p
            className="text-lg mt-4 max-w-2xl text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Driving digital transformation through innovation, security &
            performance.
          </motion.p>
        </div>
      </section>

      {/* ================= COMPANY INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Who We <span className="text-[#a42a2a]">Are</span>
          </h2>
          <p className="mt-5 text-gray-700 leading-relaxed text-lg">
            Axiatix is a forward-thinking technology solutions provider
            specializing in cloud, cybersecurity, automation, managed IT
            services, infrastructure modernization, and enterprise digital
            acceleration. Our goal is to empower organizations to scale
            securely, efficiently, and sustainably with world-class engineering
            and support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/assets/about1.jpeg"
            alt="Team Working"
            width={600}
            height={450}
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="bg-gradient-to-br from-[#a42a2a] to-[#7d1d1d] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Rocket size={28} />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              To become a global technology leader delivering intelligent,
              secure, scalable & automated digital ecosystems for enterprises.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target size={28} />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              To empower organizations with cutting-edge, secure, and customized
              technology solutions that simplify operations, reduce risks, and
              accelerate innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= GLOBAL PRESENCE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Global <span className="text-[#a42a2a]">Presence</span>
        </h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          Our operations span across strategic locations enabling fast delivery,
          compliance, and global innovation reach.
        </p>

        <div className="relative mx-auto mt-10 w-full max-w-4xl h-[350px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/worldmap.jpg"
            alt="Global Map"
            fill
            className="object-cover opacity-[0.92]"
          />

          {/* Location Pins */}
          <motion.div
            className="absolute top-[35%] left-[52%] text-white flex items-center gap-1"
            whileHover={{ scale: 1.15 }}
          >
            <MapPin className="text-[#ffdddd]" size={20} /> Mumbai
          </motion.div>
          <motion.div
            className="absolute top-[38%] left-[49%] text-white flex items-center gap-1"
            whileHover={{ scale: 1.15 }}
          >
            <MapPin className="text-[#ffdddd]" size={20} /> Hyderabad
          </motion.div>
          <motion.div
            className="absolute top-[42%] left-[55%] text-white flex items-center gap-1"
            whileHover={{ scale: 1.15 }}
          >
            <MapPin className="text-[#ffdddd]" size={20} /> Bengaluru
          </motion.div>
        </div>
      </section>
    </main>
  );
}
