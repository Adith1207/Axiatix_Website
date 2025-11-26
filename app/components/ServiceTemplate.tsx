"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Feature = {
  title: string;
  description: string;
};

interface ServiceTemplateProps {
  name: string;
  tagline: string; // short one-liner under title
  intro: string; // 2–3 line intro max
  icon: LucideIcon;
  heroHighlight?: string;
  features: Feature[]; // “What you gain” bullets
  outcome: string; // short outcome line
  ctaText: string; // heading in CTA card
  ctaSubtext: string; // small description in CTA
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
    <div className="min-h-screen bg-gradient-to-br from-white via-[#faf7f8] to-[#e9cccc]">
      {/* HERO */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* soft glows */}
        <div className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-[#a42a2a]/18 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-[#e9cccc]/80 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#a42a2a] shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#a42a2a]" />
              {heroHighlight}
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              {name}
            </h1>

            <p className="mt-3 text-base md:text-lg text-gray-800">{tagline}</p>

            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-xl">
              {intro}
            </p>
          </motion.div>

          {/* Icon Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm rounded-3xl border border-white/70 bg-white/85 p-7 shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur-2xl">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a42a2a]/10">
                <Icon className="h-7 w-7 text-[#a42a2a]" />
              </div>
              <p className="text-xs md:text-sm text-gray-700">
                Designed for organizations that expect reliable, secure and
                scalable digital infrastructure without adding complexity.
              </p>

              <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-transparent via-[#a42a2a]/40 to-transparent" />

              <p className="mt-3 text-[0.7rem] text-gray-500">
                Delivered with Axiatix playbooks, best practices and certified
                experts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="pb-10 pt-4">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-6 flex flex-col gap-1 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                What you gain with{" "}
                <span className="text-[#a42a2a]">Axiatix {name}</span>
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Short, outcome-first benefits your customers can relate to.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-5 shadow-md backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.14)] hover:border-[#a42a2a]/60"
              >
                {/* red hover sweep */}
                <span
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-br from-transparent via-[#a42a2a]/10 to-transparent
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />
                <div className="relative z-10">
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div
                  className="
                    relative mt-4 h-[2px] w-0 rounded-full bg-[#a42a2a]
                    transition-all duration-300 group-hover:w-20
                  "
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUTCOME + CTA */}
      <section className="pb-20 pt-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Outcome block */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex-1"
          >
            <div className="rounded-3xl border border-white/70 bg-white/95 p-6 shadow-md backdrop-blur-xl">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                The outcome
              </h3>
              <p className="text-sm md:text-base text-gray-700">{outcome}</p>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex-1"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#a42a2a]/40 bg-gradient-to-r from-[#a42a2a] via-[#8f1f1f] to-[#6e1515] p-6 text-white shadow-xl">
              {/* soft shine */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/20 blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {ctaText}
                </h3>
                <p className="text-sm md:text-base text-white/90 mb-4">
                  {ctaSubtext}
                </p>
                <button
                  className="
                    inline-flex items-center justify-center rounded-full
                    bg-[#ffffff] text-[#a42a2a]
                    px-5 py-2.5 text-sm font-semibold
                    shadow-md transition
                    hover:bg-[#a42a2a] hover:text-white
                    hover:shadow-[0_0_18px_rgba(164,42,42,0.7)]
                    active:scale-[0.98]
                  "
                >
                  Talk to Axiatix experts
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
