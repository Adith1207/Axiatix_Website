"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ====== INDUSTRY DATA ======
const industries = [
  {
    title: "BFSI",
    desc: "Secure, compliant and scalable solutions empowering banking, finance and insurance institutions.",
    img: "/industries/bfsi.jpeg",
  },
  {
    title: "Healthcare",
    desc: "Digital healthcare platforms that prioritize privacy, interoperability and patient-centric innovation.",
    img: "/industries/healthcare.jpeg",
  },
  {
    title: "Retail & E-Commerce",
    desc: "Future-ready retail systems with personalization, analytics, omni-channel and automated workflows.",
    img: "/industries/retail.jpeg",
  },
  {
    title: "IT & Telecom",
    desc: "Next-gen digital infrastructure, cloud innovation and network-driven transformation.",
    img: "/industries/it.jpeg",
  },
  {
    title: "Manufacturing",
    desc: "Industry 4.0 aligned digital modernization, automation, IoT integration and smart production workflows.",
    img: "/industries/manufacturing.jpeg",
  },
  {
    title: "Education",
    desc: "Empowering institutions with smart learning ecosystems, LMS platforms and AI-enabled student analytics.",
    img: "/industries/education.jpeg",
  },
  {
    title: "Government & Public Sector",
    desc: "Secure modernization, governance-driven platforms and public digital infrastructure solutions.",
    img: "/industries/public.jpeg",
  },
  {
    title: "Energy & Utilities",
    desc: "Digital transformation for energy, grid intelligence, smart metering and sustainable resource operations.",
    img: "/industries/energy.jpeg",
  },
  {
    title: "Media & Entertainment",
    desc: "Automated creative delivery, OTT-ready backend systems and real-time content workflow solutions.",
    img: "/industries/media.jpeg",
  },
];

export default function OurFocusPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#f8eaea] via-[#fdf5f5] to-[#f8eaea] text-gray-900 pt-36 md:pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* ====== PAGE TITLE ====== */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-6"
        >
          Our <span className="text-[#a42a2a]">Focus</span> Sectors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-14"
        >
          We drive transformation across mission-critical domains where
          security, scalability, and innovation are non-negotiable.
        </motion.p>

        {/* ====== INDUSTRY CARDS ====== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35 }}
              className="
                relative group rounded-2xl overflow-hidden cursor-pointer
                border border-[#a42a2a]/15 bg-white/40 backdrop-blur-xl
                shadow-[0_8px_20px_rgba(164,42,42,0.07)]
              "
            >
              {/* Image */}
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={350}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Red Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br from-[#a42a2a] to-[#7d1d1d]
                  opacity-0 group-hover:opacity-90
                  transition-opacity duration-600
                "
              />

              {/* Text Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/25 to-transparent">
                <h3 className="text-lg font-extrabold mb-2 text-white drop-shadow-md">
                  {item.title}
                </h3>
                <p
                  className="
                    text-sm leading-relaxed text-gray-200
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
