"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * PartnersRibbon
 * - read logos listed in `logos` array (files should be in /public/partners/)
 * - duplicates the sequence to create an infinite seamless loop
 * - configurable speed via `speed` (seconds for one full loop)
 *
 * Usage: <PartnersRibbon />
 */

export default function PartnersRibbon({
  speed = 20, // seconds for one full loop (lower = faster)
  cardPadding = 24, // px inner padding for cards, adjust for size
}: {
  speed?: number;
  cardPadding?: number;
}) {
  // Put filenames (and alt text) here. Files must be in /public/partners/
  const logos = useMemo(
    () => [
      { name: "IBM Cloud", file: "/partners/ibm.png" },
      { name: "Adani Connex", file: "/partners/adani.png" },
      { name: "Techno Digital", file: "/partners/techno.png" },
      { name: "Yotta", file: "/partners/yotta.png" },
      { name: "Sophos", file: "/partners/sophos.png" },
      { name: "Scalefusion", file: "/partners/scalefusion.png" },
      { name: "Oracle", file: "/partners/oracle.png" },
      { name: "SOTI", file: "/partners/soti.png" },
      { name: "Another Partner", file: "/partners/partner9.png" },
      { name: "Partner Ten", file: "/partners/partner10.png" },
      { name: "Partner Eleven", file: "/partners/partner11.png" },
    ],
    []
  );

  // duplicate for seamless scroll
  const double = [...logos, ...logos];

  // compute animation style using inline style so we can set dynamic duration
  const animationStyle = {
    animation: `marquee ${speed}s linear infinite`,
  };

  return (
    <section className="relative py-14 bg-gradient-to-r from-white via-[#fdf2f2] to-[#fae6e6]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Our <span className="text-primary">Technology Partners</span>
        </h2>

        {/* container */}
        <div className="relative overflow-hidden rounded-xl">
          {/* left & right fading overlays */}
          <div className="partners-overlay-left" aria-hidden />
          <div className="partners-overlay-right" aria-hidden />

          {/* marquee track */}
          <div
            className="partners-marquee"
            style={{
              display: "flex",
              gap: 24,
              width: "max-content",
              alignItems: "center",
              ...animationStyle,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState =
                "paused";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState =
                "running";
            }}
            onTouchStart={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState =
                "paused";
            }}
            onTouchEnd={(e) => {
              (e.currentTarget as HTMLElement).style.animationPlayState =
                "running";
            }}
          >
            {double.map((p, idx) => (
              <div
                key={idx}
                className="partner-card flex items-center justify-center p-4 md:p-6"
                style={{
                  minWidth: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={p.file}
                    alt={p.name}
                    width={180}
                    height={60}
                    className="partner-logo object-contain"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
