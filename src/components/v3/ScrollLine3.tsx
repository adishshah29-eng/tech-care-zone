"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ensureGsapRegistered } from "@/lib/gsapV3";

const STEP = 40;

function buildZigzagPath(height: number) {
  const segments = Math.max(2, Math.ceil(height / STEP));
  let d = `M 24 0`;
  for (let i = 1; i <= segments; i++) {
    const y = Math.min(i * STEP, height);
    const x = i % 2 === 0 ? 24 : 6;
    d += ` L ${x} ${y}`;
  }
  return d;
}

export function ScrollLine3() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const dotRef = useRef<SVGCircleElement | null>(null);
  const [height, setHeight] = useState(0);

  // Measure the whole document (this line tracks the entire page's scroll
  // progress), not a passed-in ref: avoids relying on ref-attachment timing
  // across component boundaries, which React's dev-mode mount/unmount/
  // remount simulation makes unreliable to coordinate manually.
  useLayoutEffect(() => {
    const update = () => setHeight(document.documentElement.scrollHeight);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useLayoutEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path || !dot || height === 0 || window.innerWidth < 1024) return;

    const { ScrollTrigger } = ensureGsapRegistered();
    const length = path.getTotalLength();
    if (length === 0) return;

    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const start = path.getPointAtLength(0);
    dot.setAttribute("cx", String(start.x));
    dot.setAttribute("cy", String(start.y));

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const drawn = length * self.progress;
        path.style.strokeDashoffset = `${length - drawn}`;
        const pt = path.getPointAtLength(drawn);
        dot.setAttribute("cx", String(pt.x));
        dot.setAttribute("cy", String(pt.y));
      },
    });

    return () => st.kill();
  }, [height]);

  if (height === 0) return null;

  return (
    <svg
      className="pointer-events-none absolute inset-y-0 left-2 hidden w-8 lg:block"
      width={32}
      height={height}
      viewBox={`0 0 32 ${height}`}
      aria-hidden
    >
      <path
        ref={pathRef}
        d={buildZigzagPath(height)}
        fill="none"
        stroke="var(--v3-ink)"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle ref={dotRef} r="7" fill="var(--v3-red)" stroke="var(--v3-ink)" strokeWidth="2.5" />
    </svg>
  );
}
