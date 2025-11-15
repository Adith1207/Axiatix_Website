"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine); // FIXED: use loadSlim instead of loadFull
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fullScreen: false,
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 70,
            density: { enable: true, area: 1000 },
          },
          color: { value: "#ffffff" },
          links: {
            enable: true,
            distance: 140,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce",
            },
          },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
