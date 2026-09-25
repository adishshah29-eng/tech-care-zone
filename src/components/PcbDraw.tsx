"use client";

import { useEffect, useRef } from "react";

export function PcbDraw({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          node.classList.add("is-drawn");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`pcb-wrap ${className}`} aria-hidden>
      {children}
    </div>
  );
}
