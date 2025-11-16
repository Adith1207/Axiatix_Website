"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function IncrementCounter({
  from = 0,
  to,
  duration = 2000, // All counters finish in same time
  className = "",
}) {
  const [value, setValue] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      let progress = Math.min(elapsed / duration, 1);

      // Fast → Slow curve
      if (progress < 0.7) {
        progress = progress * 1.2;
      } else {
        progress = 0.7 + (progress - 0.7) * 0.3;
      }

      const newValue = Math.floor(from + (to - from) * progress);
      setValue(newValue);

      if (elapsed < duration) requestAnimationFrame(animate);
      else setValue(to);
    };

    requestAnimationFrame(animate);
  }, [inView, from, to, duration]); // must remain constant

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
    </span>
  );
}
