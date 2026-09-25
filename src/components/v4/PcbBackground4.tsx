"use client";

import { useEffect, useRef } from "react";
import { ensureGsapRegistered } from "@/lib/gsapV3";
import { traces, ics, passives, toPath } from "./pcbData";

const clamp = (v: number) => Math.min(1, Math.max(0, v));

export function PcbBackground4() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const { gsap, ScrollTrigger } = ensureGsapRegistered();

    const live = Array.from(svg.querySelectorAll<SVGPathElement>("[data-live]"));
    const lens = live.map((p) => p.getTotalLength());
    live.forEach((p, i) => {
      p.style.strokeDasharray = `${lens[i]}`;
      p.style.strokeDashoffset = `${lens[i]}`;
    });
    const parts = Array.from(svg.querySelectorAll<SVGElement>("[data-at]"));
    const led = svg.querySelector<SVGElement>("#pcb-led-on");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let target = reduce ? 1 : 0;
    let current = target;

    const render = (p: number) => {
      live.forEach((el, i) => {
        const from = Number(el.dataset.from);
        const to = Number(el.dataset.to);
        el.style.strokeDashoffset = `${lens[i] * (1 - clamp((p - from) / (to - from)))}`;
      });
      parts.forEach((el) => {
        el.style.opacity = `${clamp((p - Number(el.dataset.at)) / 0.05)}`;
      });
      if (led) led.style.opacity = `${clamp((p - 0.97) / 0.03)}`;

      const n = Math.round(p * 100);
      const pct = document.getElementById("pcb-progress");
      const status = document.getElementById("pcb-status");
      if (pct) pct.textContent = `${n}%`;
      if (status) status.textContent = p >= 0.985 ? "BOARD COMPLETE - POWER ON" : `ROUTING ${n}%`;
    };

    render(current);

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        target = reduce ? 1 : self.progress;
      },
    });

    const tick = () => {
      if (Math.abs(target - current) < 0.0004) return;
      current += (target - current) * 0.12;
      render(current);
    };
    gsap.ticker.add(tick);

    return () => {
      st.kill();
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="v4-pcb"
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {/* unrouted airwires */}
      <g fill="none" stroke="#5a95cc" strokeOpacity="0.13" strokeWidth="1.5" strokeDasharray="3 7">
        {traces.map((tr) => (
          <path key={`g-${tr.id}`} d={toPath(tr.pts)} />
        ))}
      </g>

      {/* routed copper: soft halo + core */}
      <g fill="none" strokeLinejoin="round" strokeLinecap="round">
        {traces.map((tr) => (
          <g key={tr.id}>
            <path d={toPath(tr.pts)} stroke="#5a95cc" strokeOpacity="0.16" strokeWidth="9" data-live data-from={tr.from} data-to={tr.to} />
            <path d={toPath(tr.pts)} stroke="#5a95cc" strokeWidth="3" data-live data-from={tr.from} data-to={tr.to} />
          </g>
        ))}
      </g>

      {/* vias at trace ends */}
      <g fill="#0a1233" stroke="#e6bc5f" strokeWidth="2.5">
        {traces.map((tr) => {
          const end = tr.pts[tr.pts.length - 1];
          return <circle key={`v-${tr.id}`} cx={end[0]} cy={end[1]} r="4.5" data-at={tr.to - 0.02} style={{ opacity: 0 }} />;
        })}
      </g>

      {/* passives on the long links */}
      {passives.map((p) => (
        <g key={p.id} data-at={p.at} style={{ opacity: 0 }}>
          <rect x={p.x} y={p.y} width={p.w} height={p.h} fill="#0a1233" stroke="#e6bc5f" strokeWidth="2" />
          <text x={p.x + p.w / 2} y={p.y - 8} fontSize="11" textAnchor="middle" fill="#eaf0fa" fillOpacity="0.55" fontFamily="var(--v4-font-mono)">
            {p.id}
          </text>
        </g>
      ))}

      {/* ICs */}
      {ics.map((ic) => {
        const [x, y, w, h] = ic.body;
        return (
          <g key={ic.id} data-at={ic.at} style={{ opacity: 0 }}>
            {ic.pins.map(([px, py, o], i) => (
              <rect
                key={i}
                x={o === "v" ? px - 3 : px < x + w / 2 ? px : px - 8}
                y={o === "v" ? (py < y + h / 2 ? py : py - 8) : py - 3}
                width={o === "v" ? 6 : 8}
                height={o === "v" ? 8 : 6}
                fill="#e6bc5f"
              />
            ))}
            <rect x={x} y={y} width={w} height={h} rx="5" fill="#0d1a44" stroke="#5a95cc" strokeWidth="2" />
            <circle cx={x + 11} cy={y + 11} r="3" fill="#5a95cc" fillOpacity="0.7" />
            <text x={x + w / 2} y={y + h / 2 - 2} fontSize="15" fontWeight="700" textAnchor="middle" fill="#eaf0fa" fillOpacity="0.85" fontFamily="var(--v4-font-mono)">
              {ic.label}
            </text>
            <text x={x + w / 2} y={y + h / 2 + 16} fontSize="9" textAnchor="middle" fill="#eaf0fa" fillOpacity="0.45" fontFamily="var(--v4-font-mono)">
              {`TCZ-0${ic.id.slice(1)}`}
            </text>
          </g>
        );
      })}

      {/* mounting hole */}
      <g fill="none" stroke="#e6bc5f" strokeWidth="2.5">
        <circle cx="1390" cy="70" r="16" />
        <circle cx="1390" cy="70" r="7" strokeOpacity="0.5" />
      </g>

      {/* power LED: lights when the board is complete */}
      <g>
        <circle cx="1390" cy="930" r="9" fill="#0d1a44" stroke="#5a95cc" strokeWidth="2.5" />
        <text x="1390" y="960" fontSize="11" textAnchor="middle" fill="#eaf0fa" fillOpacity="0.5" fontFamily="var(--v4-font-mono)">
          PWR
        </text>
        <g id="pcb-led-on" style={{ opacity: 0 }}>
          <circle cx="1390" cy="930" r="26" fill="#8fd8ff" fillOpacity="0.22" />
          <circle cx="1390" cy="930" r="9" fill="#bfeaff" stroke="#e6bc5f" strokeWidth="2.5" />
        </g>
      </g>
    </svg>
  );
}
