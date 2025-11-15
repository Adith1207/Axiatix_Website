"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "IBM Cloud", logo: "/partners/ibm.png" },
  { name: "Adani Connex", logo: "/partners/adani.png" },
  { name: "Techno Digital", logo: "/partners/techno.png" },
  { name: "Yotta", logo: "/partners/yotta.png" },
  { name: "Sophos", logo: "/partners/sophos.png" },
];

export default function TechnologyPartners() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-14">
        Our <span className="text-primary">Technology Partners</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">

        {partners.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            whileHover={{ scale: 1.08 }}
            className="
              bg-white 
              rounded-xl 
              p-6 
              shadow-md 
              border border-gray-200 
              transition-all duration-300 
              group relative
            "
          >
            {/* Hover red glow */}
            <div className="
              absolute inset-0 rounded-xl border-2 border-transparent 
              group-hover:border-primary 
              transition-all duration-300
              group-hover:shadow-[0_0_20px_rgba(164,42,42,0.4)]
            "></div>

            <div className="relative z-10 w-full h-16 flex items-center justify-center">
              <Image
                src={p.logo}
                alt={p.name}
                width={160}
                height={80}
                className="object-contain opacity-90 group-hover:opacity-100 transition"
              />
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
