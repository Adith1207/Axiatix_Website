"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ExpCounter({
  from = 0,
  to = 100,
  duration = 1200,
  className = "",
}) {
  const [value, setValue] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true });

  // Exponential easing (smooth professional counter)
  const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = to;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const currentValue = Math.floor(easedProgress * (end - start) + start);
      setValue(currentValue);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
