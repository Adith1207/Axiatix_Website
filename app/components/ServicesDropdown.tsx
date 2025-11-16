"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Cloud,
  Server,
  Headphones,
  Shield,
  Cpu,
  BarChart,
  ChevronDown,
  Globe2Icon,
  OrbitIcon,
  Icon,
} from "lucide-react";
import { title } from "process";

const services = [
  { title: "Multi Cloud Services", icon: Cloud, href: "/services/multi-cloud" },
  {
    title: "Datacenter & Disaster Recovery",
    icon: Server,
    href: "/services/datacenter",
  },
  { title: "Managed Services", icon: Cpu, href: "/services/managed" },
  {
    title: "Security & Cybersecurity",
    icon: Shield,
    href: "/services/security",
  },
  { title: "24/7 Support", icon: Headphones, href: "/services/support" },
  { title: "Cloud Cost Optimization", icon: BarChart, href: "/services/cost" },
  {
    title: "Unified Endpoint Management",
    icon: Globe2Icon,
    href: "services/uem",
  },
  { title: "Generative AI", icon: OrbitIcon, href: "services/genAI" },
];

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* NAV BUTTON */}
      <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition select-none">
        Services
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={18} strokeWidth={2} />
        </motion.span>
      </button>

      {/* DROPDOWN PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              absolute mt-3 w-[360px] sm:w-[480px]
              z-[999] rounded-3xl overflow-hidden
              backdrop-blur-2xl bg-white/15
              border border-white/30 shadow-[0_8px_35px_rgba(0,0,0,0.15)]
            "
            style={{ left: "0" }}
          >
            {/* GLASS HIGHLIGHT */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#a42a2a] via-white/70 to-[#a42a2a]" />
              <div className="absolute -top-10 right-0 w-[180px] h-[180px] bg-white/30 blur-3xl rounded-full opacity-40" />
            </div>

            {/* GRID CONTENT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 relative z-10">
              {services.map(({ title, icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="
                    group relative flex items-center gap-3 p-3 rounded-xl cursor-pointer
                    transition-all duration-300 overflow-hidden
                    backdrop-blur-xl bg-white/20 border border-white/30
                    shadow-[0_4px_10px_rgba(0,0,0,0.08)]
                  "
                >
                  {/* RED HOVER GRADIENT */}
                  <span
                    className="
                      absolute inset-0 opacity-0 group-hover:opacity-100
                      bg-gradient-to-br from-[#a42a2a] via-[#8f1f1f] to-[#6e1515]
                      transition-all duration-300
                    "
                  />

                  {/* DIAGONAL SHINE SWIPE */}
                  <span
                    className="
                      absolute top-0 left-[-120%] w-[200%] h-full
                      bg-white/25 skew-x-[30deg]
                      group-hover:animate-shine pointer-events-none
                    "
                  />

                  {/* ICON */}
                  <div
                    className="
                      w-10 h-10 flex items-center justify-center rounded-xl
                      bg-white/30 transition z-10
                      group-hover:bg-white/20
                    "
                  >
                    <Icon
                      size={18}
                      className="
                        text-[#a42a2a] z-10 transition
                        group-hover:text-white group-hover:scale-110
                      "
                    />
                  </div>

                  {/* TEXT */}
                  <span
                    className="
                      text-gray-800 font-medium z-10
                      group-hover:text-white transition
                    "
                  >
                    {title}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SHINE KEYFRAMES */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-150%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(150%); opacity: 0; }
        }
        .animate-shine { animation: shine 0.9s forwards; }
      `}</style>
    </div>
  );
}
