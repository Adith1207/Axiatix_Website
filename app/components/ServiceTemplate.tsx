"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Feature = {
  title: string;
  description: string;
};

interface ServiceTemplateProps {
  name: string;
  tagline: string;
  intro: string;
  icon: LucideIcon;
  heroHighlight?: string;
  features: Feature[];
  outcome: string;
  ctaText: string;
  ctaSubtext: string;
}

export default function ServiceTemplate({
  name,
  tagline,
  intro,
  icon: Icon,
  heroHighlight = "Enterprise-Grade. Future-Driven.",
  features,
  outcome,
  ctaText,
  ctaSubtext,
}: ServiceTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f7eded] to-[#e9cccc]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-36 md:pt-40 pb-24">
        {/* BACKGROUND GLOWS */}
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[480px] w-[480px] bg-[#a42a2a]/25 blur-[140px] rounded-full" />
        <div className="pointer-events-none absolute top-0 right-0 h-[380px] w-[380px] bg-[#e9cccc]/70 blur-[120px] rounded-full" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <div
              className="
                mb-5 inline-flex items-center gap-2 rounded-full
                bg-[#a42a2a] px-5 py-2
                text-[0.75rem] md:text-sm font-bold uppercase tracking-[0.22em]
                text-white
                transition-all duration-300
                hover:bg-gradient-to-r hover:from-[#8f1f1f] hover:to-[#6e1515]
              "
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-white" />
              {heroHighlight}
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-[#6e1515] tracking-tight leading-tight">
              {name}
            </h1>

            <p className="mt-4 text-lg md:text-xl text-[#7a1c1c] font-medium">
              {tagline}
            </p>

            <p className="mt-4 text-base md:text-lg text-[#8b2b2b] leading-relaxed max-w-xl">
              {intro}
            </p>
          </motion.div>

          {/* RIGHT — CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="relative flex justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.01, y: -3 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                group relative w-full max-w-md overflow-hidden
                rounded-3xl border border-[#a42a2a]/30 bg-white/90 backdrop-blur-xl
                shadow-[0_12px_34px_rgba(164,42,42,0.25)]
                pt-10 pb-10 px-8
              "
            >
              {/* GRADIENT HOVER OVERLAY */}
              <div
                className="
                  absolute inset-0 z-0 opacity-0
                  bg-gradient-to-br from-[#a42a2a] via-[#8f1f1f] to-[#6e1515]
                  transition-opacity duration-300 group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#a42a2a]/10 group-hover:bg-transparent">
                  <Icon className="h-10 w-10 text-[#a42a2a] transition-colors duration-300 group-hover:text-white" />
                </div>

                <p className="text-base md:text-lg text-[#7a1c1c] leading-relaxed group-hover:text-white transition-colors duration-300">
                  Designed for enterprises demanding reliability, resilience and
                  precision — with no room for compromise.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="pb-20 pt-6">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-2xl md:text-3xl font-semibold text-[#6e1515] mb-10 text-center"
          >
            What You Gain with{" "}
            <span className="text-[#a42a2a]">Axiatix {name}</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="
                  group relative overflow-hidden rounded-2xl border border-[#a42a2a]/20
                  bg-white p-6 shadow-md backdrop-blur-xl
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(164,42,42,0.35)]
                "
              >
                <div
                  className="
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-br from-[#a42a2a] via-[#8f1f1f] to-[#6e1515]
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-semibold text-[#6e1515] group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#8b2b2b] group-hover:text-white/90 transition-colors duration-300 mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="relative mt-4 h-[3px] w-0 rounded-full bg-white transition-all duration-300 group-hover:w-24" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* OUTCOME + CTA */}
      <section className="pb-24 pt-6">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {/* OUTCOME CARD */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div
              className="
          group relative overflow-hidden rounded-2xl
          min-h-[220px] w-full max-w-2xl
          border border-[#a42a2a]/60 bg-[#a42a2a] p-6 text-white shadow-lg
          transition-all duration-300 ease-out
          hover:shadow-[0_12px_34px_rgba(164,42,42,0.45)]
          hover:-translate-y-2 hover:scale-[1.02]
        "
            >
              {/* Hover Gradient */}
              <div
                className="
            absolute inset-0 bg-gradient-to-br from-[#8f1f1f] to-[#6e1515]
            opacity-0 transition-opacity duration-300 group-hover:opacity-100
          "
              />

              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  The Outcome
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  {outcome}
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div
              className="
          group relative overflow-hidden rounded-2xl
          min-h-[220px] w-full max-w-2xl
          border border-[#a42a2a]/60 bg-[#a42a2a] p-6 text-white shadow-lg
          transition-all duration-300 ease-out
          hover:shadow-[0_12px_34px_rgba(164,42,42,0.45)]
          hover:-translate-y-2 hover:scale-[1.02]
        "
            >
              {/* Hover Gradient */}
              <div
                className="
            absolute inset-0 bg-gradient-to-br from-[#8f1f1f] to-[#6e1515]
            opacity-0 transition-opacity duration-300 group-hover:opacity-100
          "
              />

              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {ctaText}
                </h3>
                <p className="text-sm md:text-base text-white/90 mb-4 leading-relaxed">
                  {ctaSubtext}
                </p>

                <Link href="/Contact">
                  <button
                    className="
                inline-flex items-center justify-center rounded-full
                bg-white text-[#a42a2a] px-6 py-2 font-semibold text-sm md:text-base
                transition-all duration-300
                hover:bg-[#8f1f1f] hover:text-white
                hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]
                hover:scale-[1.05] active:scale-[0.97]
              "
                  >
                    Talk to Axiatix experts
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
