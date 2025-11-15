"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fullScreen: false,

        background: { color: "transparent" },

        fpsLimit: 60,
        detectRetina: true,

        particles: {
          number: {
            value: 120, // MORE PARTICLES
            density: { enable: true, area: 800 }, // MORE DENSE
          },

          // Modern blue particle colors
          color: { value: ["#8ecbff", "#4ea1ff"] },

          // Only circles (cleaner corporate look)
          shape: {
            type: ["circle"],
          },

          // Particle glow effect
          glow: {
            enable: true,
            color: "#4ea1ff",
            blur: 15, // STRONGER GLOW
          },

          // Connecting network lines
          links: {
            enable: true,
            distance: 180, // BIGGER SPREAD
            color: "#8ecbff",
            opacity: 0.4,
            width: 2, // THICKER LINES
          },

          // Movement settings (smooth + elegant)
          move: {
            enable: true,
            speed: 0.8,
            outModes: { default: "bounce" },
          },

          // Node visibility
          opacity: {
            value: 0.9, // STRONGER
          },

          // Node size
          size: {
            value: { min: 2, max: 5 }, // BIGGER DOTS
          },
        },

        // MOUSE INTERACTIVITY
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" }, // smooth grab effect
            resize: true,
          },

          modes: {
            grab: {
              distance: 180,
              links: { opacity: 0.5 }, // more visible when hovered
            },
            repulse: {
              distance: 110,
              duration: 0.4,
            },
          },
        },
      }}
    />
  );
}
