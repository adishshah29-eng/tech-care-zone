"use client";

import { useLayoutEffect, useRef } from "react";
import { ensureGsapRegistered } from "@/lib/gsapV3";

export function ScrollReveal3({
  children,
  stagger = false,
  className = "",
}: {
  children: React.ReactNode;
  stagger?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const { gsap } = ensureGsapRegistered();

    const targets = stagger ? Array.from(node.children) : [node];

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: 22 });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: {
          trigger: node,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    }, node);

    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
