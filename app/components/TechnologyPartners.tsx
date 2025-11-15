"use client";

import Image from "next/image";
import { useMemo } from "react";

export default function PartnersRibbon({ speed = 18 }: { speed?: number }) {
  const logos = useMemo(
    () => [
      { name: "AWS", file: "/assets/Amazon.png" },
      { name: "Adani Connex", file: "/assets/adani.png" },
      { name: "Google Cloud", file: "/assets/Google-Cloud.png" },
      { name: "Scalefusion", file: "/assets/efficientIP.png" },
      { name: "Oracle", file: "/assets/CrowdStrike.png" },
      { name: "SOTI", file: "/assets/rediff.png" },
      { name: "Partner 9", file: "/assets/vultr.jpeg" },
      { name: "Partner 10", file: "/assets/tata.png" },
      { name: "Partner 11", file: "/assets/microsoft.png" },
    ],
    []
  );

  const double = [...logos, ...logos];

  const animationStyle = {
    animation: `marquee ${speed}s linear infinite`,
  };

  return (
    <section className="relative py-16 bg-gradient-to-r from-white via-[#fdf2f2] to-[#fae6e6]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
          Our <span className="text-primary">Technology Partners</span>
        </h2>

        <div className="relative overflow-hidden">
          <div className="partners-overlay-left" />
          <div className="partners-overlay-right" />

          {/* marquee */}
          <div
            className="partners-marquee"
            style={{
              display: "flex",
              gap: 60, // more spacing for premium look
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
          >
            {double.map((p, idx) => (
              <div
                key={idx}
                className="
                  relative
                  flex items-center justify-center
                  w-[200px] h-[90px]
                  transition-transform 
                  duration-300 
                  hover:scale-110 
                  hover:rotate-1
                "
              >
                {/* shimmer effect wrapper */}
                <div className="relative w-full h-full flex items-center justify-center logo-shine">
                  <Image
                    src={p.file}
                    alt={p.name}
                    width={200}
                    height={90}
                    className="
                      object-contain
                      transition-all
                      duration-300
                      hover:drop-shadow-[0_0_20px_rgba(164,42,42,0.65)]
                      hover:brightness-110 
                      hover:saturate-125
                    "
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
