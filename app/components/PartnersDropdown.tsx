"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const partnerGroups = {
  Cloud: [
    "Amazon Web Services (AWS)",
    "Google Cloud",
    "Microsoft Azure",
    "Vultr Cloud",
  ],
  "Data Centers": ["AdaniConneX", "Tata Communications"],
  UEM: ["SOTI"],
  Security: ["CrowdStrike", "EfficientIP"],
};

export default function PartnersDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* NAV BUTTON */}
      <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition select-none">
        Partners
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={18} strokeWidth={2} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              absolute mt-3 w-[720px] max-w-[95vw]
              z-[999] rounded-3xl p-6 overflow-hidden
              backdrop-blur-2xl bg-white/15
              border border-white/30 shadow-[0_8px_35px_rgba(0,0,0,0.15)]
            "
            style={{ left: "-250px" }}
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-10 right-0 w-[200px] h-[200px] bg-white/20 blur-3xl rounded-full opacity-40" />
            </div>

            {/* 4-Column Layout */}
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {Object.entries(partnerGroups).map(
                ([category, items], colIndex) => (
                  <div key={colIndex} className="space-y-3 min-w-[150px]">
                    {/* Category Title */}
                    <h3 className="text-[15px] tracking-wide font-semibold text-[#a42a2a] uppercase">
                      {category}
                    </h3>

                    {/* Items */}
                    <div className="space-y-3">
                      {items.map((partner, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05, translateY: -2 }}
                          transition={{ duration: 0.25 }}
                          className="
                          group relative px-4 py-2 rounded-lg cursor-pointer
                          backdrop-blur-xl bg-white/20 border border-white/25
                          transition-all duration-300 overflow-hidden
                          shadow-[0_4px_10px_rgba(0,0,0,0.08)]
                        "
                        >
                          {/* Red Gradient Hover */}
                          <span
                            className="
                            absolute inset-0 opacity-0 group-hover:opacity-100
                            bg-gradient-to-br from-[#a42a2a] via-[#8f1f1f] to-[#6e1515]
                            transition-all duration-300
                          "
                          />

                          {/* Shine */}
                          <span
                            className="
                            absolute top-0 left-[-120%] w-[200%] h-full
                            bg-white/25 skew-x-[30deg] opacity-0
                            group-hover:opacity-60 group-hover:animate-shine
                            pointer-events-none
                          "
                          />

                          <span
                            className="
                            text-[15px] text-gray-800 font-medium relative z-10
                            group-hover:text-white transition
                          "
                          >
                            {partner}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-150%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(150%); opacity: 0; }
        }
        .animate-shine { animation: shine 0.9s forwards ease-out; }
      `}</style>
    </div>
  );
}
