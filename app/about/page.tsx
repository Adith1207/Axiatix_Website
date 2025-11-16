"use client";

import { motion } from "framer-motion";
import { Target, Rocket, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function AboutPage() {
  // smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-white via-[#f7eaea] to-white">
      {/* ====================== HERO ====================== */}
      <section className="relative w-full overflow-hidden py-20 md:py-28 bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="animate-mesh absolute -top-32 -left-24 w-[140%] h-[140%] rounded-full 
            bg-gradient-to-br from-[#a42a2a] via-[#e06161] to-[#f7dada] opacity-[0.45] blur-[110px]"
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* TEXT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            >
              Crafting Digital Futures With{" "}
              <span className="text-[#a42a2a]">People-Driven Innovation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              At Axiatix, technology isn’t just built — it’s engineered to
              empower real people and real businesses globally.
            </motion.p>
          </div>

          {/* GRAPHIC SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a42a2a] to-[#e38b8b] blur-[70px] opacity-60 animate-pulse"></div>

              {/* rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-[2px] border-[#a42a2a]/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-dashed border-[#a42a2a]/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {[1, 2, 3, 4].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-3 h-3 bg-[#a42a2a] rounded-full"
                  style={{ top: `${20 + i * 18}%`, left: `${25 + i * 14}%` }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2 + i, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== WHO WE ARE ====================== */}
      <section
        id="who-we-are"
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Who We <span className="text-[#a42a2a]">Are</span>
          </h2>
          <p className="mt-5 text-gray-700 leading-relaxed text-lg">
            At Axiatix, our expert team provides tailored solutions in Cyber
            Security, Emerging Tech Consulting, Business Strategy, and HR
            Consulting. We help your organization navigate challenges and seize
            opportunities in today’s fast-paced environment, ensuring you stay
            ahead of the curve. Let us partner with you to enhance your
            resilience and drive growth!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/assets/team.jpeg"
            alt="Team Working"
            width={600}
            height={450}
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Mission & Vision */}

      <section
        id="vision"
        className="bg-gradient-to-br from-[#a42a2a] to-[#7d1d1d] py-20 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Our Vision",
              icon: Rocket,
              desc: "To become a global leader delivering secure, scalable & automated digital ecosystems.",
            },
            {
              title: "Our Mission",
              icon: Target,
              desc: "To empower enterprises with secure, automated & future-ready technological outcomes.",
            },
          ].map(({ title, icon: Icon, desc }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
          relative overflow-hidden rounded-2xl p-8 cursor-pointer group
          border border-white/15 bg-white/10 backdrop-blur-xl
          shadow-[0_8px_30px_rgba(255,255,255,0.05)]
          transition-all duration-500
          hover:shadow-[0_10px_40px_rgba(50,214,196,0.4)]
        "
            >
              {/* Hover Reveal Layer */}
              <div
                className="
            absolute inset-0
            bg-gradient-to-br from-[#32d6c4] via-[#26a9a0] to-[#1c7c73]
            opacity-0 translate-y-full rotate-2
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-700 ease-out
            mix-blend-soft-light
          "
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    size={28}
                    className="text-white/90 group-hover:text-white transition-colors duration-300"
                  />
                  <h3 className="text-2xl font-bold">{title}</h3>
                </div>
                <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================== LOCATION ====================== */}
      <section
        id="location"
        className="w-full py-20 bg-gradient-to-b from-white via-[#faf4f4] to-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Our <span className="text-[#a42a2a]">Location</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Strategically positioned in Chennai’s prime business hub, our HQ
              drives innovation & enterprise-grade delivery.
            </p>

            {/* BRAND HOVER CARD */}
            <div
              className="
          group relative rounded-3xl p-7 overflow-hidden border border-[#a42a2a]/35
          backdrop-blur-xl bg-white/60 shadow-[0_8px_20px_rgba(164,42,42,0.12)]
          transition-all duration-700
          hover:shadow-[0_12px_38px_rgba(164,42,42,0.45)]
          hover:border-transparent
        "
            >
              {/* Ruby Gradient Reveal */}
              <div
                className="
            absolute inset-0
            bg-gradient-to-br from-[#a42a2a] via-[#c03c3c] to-[#7b1f1f]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-700 ease-out
          "
              />

              {/* Gloss Wave Layer */}
              <div
                className="
            pointer-events-none
            absolute inset-0 bg-white/25 blur-xl
            opacity-0 translate-x-[-120%] skew-x-12
            group-hover:opacity-70 group-hover:translate-x-[120%]
            transition-all duration-[900ms] ease-out
          "
              />

              {/* CARD CONTENT */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <MapPin
                    size={28}
                    className="text-[#a42a2a] group-hover:text-white transition-colors duration-500"
                  />
                  <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-white transition-colors duration-500">
                    Head Office
                  </h3>
                </div>

                <p className="text-[17px] text-gray-700 font-medium leading-[1.6] group-hover:text-white transition-colors duration-500">
                  SPRINGS HAVEN 27/1, ARK COLONY, <br />
                  ELDAMS ROAD, ALWARPET, <br />
                  CHENNAI — <span className="font-bold">600018</span>
                </p>

                <div
                  className="
              inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold
              rounded-full bg-[#a42a2a]/10 text-[#a42a2a] border border-[#a42a2a]/25
              group-hover:bg-white/25 group-hover:text-white group-hover:border-white
              transition-all duration-500
            "
                >
                  🇮🇳 India Headquarters
                </div>

                <div className="pt-3 border-t border-[#a42a2a]/15 group-hover:border-white/40 transition-colors duration-500">
                  <p className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-500">
                    Working Hours
                  </p>
                  <p className="text-gray-700 font-medium group-hover:text-gray-100 transition-colors duration-500">
                    Mon — Sat • 10:00 AM to 06:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="
        rounded-2xl overflow-hidden shadow-xl border border-[#a42a2a]/20
        hover:shadow-[0_10px_34px_rgba(164,42,42,0.25)] transition-all duration-500
      "
          >
            <iframe
              width="100%"
              height="380"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.004410092035!2d80.25456477507786!3d13.04531658729579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267bb16a3d241%3A0xf1281870e7d56da!2sAlwarpet%2C%20Chennai!5e0!3m2!1sen!2sin!4v1707899999999"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
