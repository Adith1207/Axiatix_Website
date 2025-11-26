"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Multi Cloud Services",
    image: "/Services/multiCloud.jpeg",
    link: "/services/multi-cloud",
  },
  {
    title: "Datacenter & Disaster Recovery",
    image: "/Services/data_center.jpeg",
    link: "/services/disaster",
  },
  {
    title: "Managed Services",
    image: "/Services/manageServices.jpeg",
    link: "/services/managed_services",
  },
  {
    title: "Cloud Infrastructure Management",
    image: "/Services/cloudInfra.jpeg",
    link: "/services/support", 
  },
  {
    title: "Security & Cybersecurity",
    image: "/Services/cyber.jpeg",
    link: "/services/security",
  },
  {
    title: "Cloud Cost Optimization",
    image: "/Services/cloud_cost.webp",
    link: "/services/cloud_cost",
  },
  {
    title: "Unified Endpoint Management",
    image: "/Services/uem.webp",
    link: "/services/unified_endpoint",
  },
  {
    title: "Generative AI",
    image: "/Services/AI.jpeg",
    link: "/services/genAI",
  },
];

export default function Services() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-white via-[#faf7f8] to-[#f6f3f4]">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-[#a42a2a]">Services</span>
        </h2>
        <p className="text-gray-600 mt-2">Enterprise-grade. Future-driven.</p>
      </div>

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="
              group rounded-2xl shadow-lg overflow-hidden cursor-pointer relative
              bg-[#ffffff10] backdrop-blur-xl border border-white/20
              transition-all duration-700
            "
          >
            <Link href={service.link}>
              <div className="relative h-44 md:h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full h-full object-cover rounded-t-2xl 
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* Image Shine Sweep */}
                <span
                  className="
                    absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent
                    opacity-0 group-hover:opacity-100
                    translate-x-[-100%] group-hover:translate-x-[100%]
                    transition-all duration-[1200ms]
                  "
                ></span>
              </div>

              {/* Content */}
              <div className="bg-white px-5 py-5 text-center relative z-10">
                <h4 className="text-[1.05rem] font-bold text-gray-900 leading-tight">
                  {service.title}
                </h4>

                {/* Bottom Red Accent Line */}
                <div
                  className="w-0 group-hover:w-full h-[3px] mt-3 mx-auto 
                  rounded-full bg-[#a42a2a] transition-all duration-500"
                ></div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
