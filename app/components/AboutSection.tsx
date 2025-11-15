"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-[#f4eaea]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/about/about.jpg"
            alt="Axiatix Team"
            className="rounded-xl shadow-md object-cover w-full h-[320px]"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            About <span className="text-primary">Axiatix</span>
          </h2>

          <p className="text-gray-800 leading-relaxed text-lg">
            At Axiatix, we specialize in delivering innovative and reliable
            enterprise IT solutions that empower organizations to build secure,
            scalable, and future-ready digital ecosystems.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With deep expertise in cloud services, cybersecurity, automation,
            and managed IT operations, we help businesses modernize and
            accelerate growth.
          </p>

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
            Learn More <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
