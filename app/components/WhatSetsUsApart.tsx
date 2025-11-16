"use client";

import { motion } from "framer-motion";
import { ShieldCheck, LifeBuoy, CloudCog, BarChart3 } from "lucide-react";

const items = [
  {
    id: "01",
    title: "Certified Expertise",
    desc: "Skilled in cloud, databases, and cybersecurity.",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "Security & Compliance",
    desc: "Data localization and regulatory adherence.",
    icon: ShieldCheck,
  },
  {
    id: "03",
    title: "24/7 Support",
    desc: "Non-stop assistance and quick resolutions.",
    icon: LifeBuoy,
  },
  {
    id: "04",
    title: "Scalable Flexibility",
    desc: "Scale up or down as needed.",
    icon: CloudCog,
  },
  {
    id: "05",
    title: "Resilience & Recovery",
    desc: "Strong BCP and DR strategies.",
    icon: BarChart3,
  },
];

export default function WhatSetsUsApart() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#f7eaea] to-[#f1d6d6] select-none">
      <div className="relative max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14">
          What <span className="text-[#a42a2a]">Sets Us Apart</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="
                  relative w-full p-7 rounded-xl overflow-hidden
                  bg-white cursor-pointer border border-gray-200
                  shadow-md group transition-all duration-500 text-left
                "
              >
                {/* HOVER RED GRADIENT BACKGROUND */}
                <div
                  className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-br from-[#a42a2a] via-[#8f1f1f] to-[#6e1515]
                  transition-all duration-500
                "
                />

                {/* CONCENTRIC ARC ELEMENTS */}
                <div
                  className="
                  absolute right-0 top-0 w-[180px] h-[180px] 
                  rounded-full bg-[#ffffff]/10 opacity-0 group-hover:opacity-100
                  translate-x-[35%] -translate-y-[35%]
                  transition-all duration-500
                "
                ></div>

                <div
                  className="
                  absolute right-0 top-0 w-[260px] h-[260px] 
                  rounded-full bg-[#ffffff]/10 opacity-0 group-hover:opacity-100
                  translate-x-[45%] -translate-y-[45%]
                  transition-all duration-700
                "
                ></div>

                <div
                  className="
                  absolute right-0 top-0 w-[340px] h-[340px] 
                  rounded-full bg-[#ffffff]/10 opacity-0 group-hover:opacity-100
                  translate-x-[55%] -translate-y-[55%]
                  transition-all duration-1000
                "
                ></div>

                {/* RIGHT SIDE NUMBER */}
                <span
                  className="
                  absolute top-6 right-6 text-3xl font-extrabold
                  text-transparent group-hover:text-white
                  transition-all duration-500
                "
                >
                  {item.id}
                </span>

                {/* ICON */}
                <div
                  className="
                  w-14 h-14 rounded-full flex items-center justify-center mb-4 relative z-10
                  bg-[#a42a2a]/10 group-hover:bg-white/20 transition-all duration-500
                "
                >
                  <Icon
                    size={26}
                    className="text-[#a42a2a] group-hover:text-white transition-all duration-500"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                  text-lg font-bold text-gray-900 mb-1 relative z-10
                  group-hover:text-white transition-all duration-500
                "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                  text-sm text-gray-600 relative z-10
                  group-hover:text-white/90 transition-all duration-500
                "
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
