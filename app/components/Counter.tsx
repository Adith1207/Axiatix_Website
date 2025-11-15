"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Exponential easing
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function Counter({
  from = 0,
  to,
  duration = 1200,
  className = "",
}) {
  const [value, setValue] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = easeOutExpo(progress);

      const newValue = Math.floor(from + (to - from) * eased);

      setValue(newValue);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value ?? 0}
    </span>
  );
}
