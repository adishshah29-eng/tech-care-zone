const INK = "var(--ink)";
const FAINT = "var(--ink-faint)";
const BRAND = "var(--brand)";
const NAVY = "var(--navy)";
const LOGO = "var(--logo-blue)";

/** Detailed technical illustration: cracked laptop, phone, and its exploded logic board. */
export function HeroBoardArt() {
  return (
    <svg
      viewBox="0 0 520 440"
      className="w-full"
      role="img"
      aria-label="Technical drawing of a laptop with a cracked screen, a phone with a low battery, and the phone's logic board lifted out, with numbered fault callouts"
    >
      <rect x="0" y="0" width="520" height="440" rx="6" fill="var(--paper-raised)" stroke="var(--paper-line-strong)" />

      {/* ---------- laptop ---------- */}
      <g fill="none" stroke={INK} strokeWidth="2">
        <rect x="26" y="150" width="270" height="170" rx="8" />
        <rect x="38" y="162" width="246" height="146" rx="3" fill="var(--paper)" stroke={FAINT} strokeWidth="1.5" />
        <circle cx="161" cy="156" r="2" fill={INK} stroke="none" />
        <path d="M8 320 H314 L318 338 Q318 346 310 346 H12 Q4 346 4 338 Z" fill="var(--paper-raised)" />
        <path d="M132 320 Q161 332 190 320" strokeWidth="1.5" />
      </g>
      {/* display UI */}
      <g fill="none" stroke={FAINT} strokeWidth="1.2">
        <path d="M38 176 H284" />
        <circle cx="48" cy="169" r="2.2" />
        <circle cx="57" cy="169" r="2.2" />
        <rect x="52" y="188" width="86" height="52" rx="2" />
        <rect x="52" y="248" width="86" height="48" rx="2" />
        <rect x="150" y="188" width="122" height="108" rx="2" strokeDasharray="4 3" />
        <path d="M60 198 H126 M60 206 H112 M60 214 H120" />
      </g>
      {/* crack (fault 1) */}
      <path d="M204 176 L214 204 L200 226 L222 252 L210 296" fill="none" stroke={BRAND} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M214 204 L240 214 L250 238 M222 252 L246 268" fill="none" stroke={BRAND} strokeWidth="1.6" strokeLinejoin="round" />

      {/* ---------- phone ---------- */}
      <g fill="none" stroke={INK} strokeWidth="2">
        <rect x="376" y="170" width="98" height="200" rx="18" />
        <rect x="384" y="180" width="82" height="180" rx="11" fill="var(--paper)" stroke={FAINT} strokeWidth="1.5" />
        <rect x="405" y="188" width="40" height="10" rx="5" fill={INK} stroke="none" />
        <path d="M372 210 V228 M372 240 V262 M478 226 V254" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* phone screen: low battery (fault 2) */}
      <g fill="none" strokeWidth="1.8">
        <rect x="407" y="262" width="36" height="18" rx="3" stroke={INK} />
        <path d="M444 267 V275" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <rect x="410" y="265" width="7" height="12" rx="1" fill={BRAND} stroke="none" />
      </g>
      <path d="M396 220 H454 M396 232 H442" stroke={FAINT} strokeWidth="1.2" fill="none" />

      {/* ---------- exploded logic board ---------- */}
      <path d="M382 136 V168 M470 136 V168" stroke={FAINT} strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
      <g>
        <rect x="350" y="52" width="146" height="84" rx="7" fill="var(--paper-raised)" stroke={NAVY} strokeWidth="2.2" />
        {[[360, 62], [486, 62], [360, 126], [486, 126]].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="3.2" fill="none" stroke={NAVY} strokeWidth="1.6" />
        ))}
        <rect x="372" y="66" width="38" height="30" rx="2.5" fill="var(--paper)" stroke={NAVY} strokeWidth="1.8" />
        <circle cx="379" cy="73" r="1.8" fill={NAVY} />
        <rect x="422" y="66" width="26" height="24" rx="2" fill="var(--paper)" stroke={NAVY} strokeWidth="1.6" />
        <rect x="458" y="70" width="14" height="10" rx="1.5" fill="var(--paper)" stroke={NAVY} strokeWidth="1.4" />
        <rect x="376" y="106" width="16" height="9" fill="none" stroke={NAVY} strokeWidth="1.4" />
        <rect x="398" y="106" width="16" height="9" fill="none" stroke={NAVY} strokeWidth="1.4" />
        <g fill="none" stroke={LOGO} strokeWidth="1.6" strokeLinejoin="round">
          <path d="M410 80 H422" />
          <path d="M391 96 V106" />
          <path d="M448 78 H458" />
          <path d="M435 90 V104 L445 114 H484" />
          <path d="M406 111 H428 L436 103" />
        </g>
        <text x="424" y="129" fontSize="7" fill={FAINT} fontFamily="var(--font-spec)" textAnchor="middle" letterSpacing="0.6">
          TCZ-REV.A
        </text>
      </g>

      {/* ---------- callouts ---------- */}
      <g stroke={FAINT} strokeWidth="1.4" strokeDasharray="4 4" fill="none">
        <path d="M156 108 L204 178" />
        <path d="M494 271 H446" />
        <path d="M60 372 V348" />
        <path d="M330 90 H350" />
      </g>
      {[
        { n: 1, x: 150, y: 100 },
        { n: 2, x: 498, y: 271 },
        { n: 3, x: 60, y: 386 },
        { n: 4, x: 320, y: 90 },
      ].map((c) => (
        <g key={c.n}>
          <circle cx={c.x} cy={c.y} r="13" fill={BRAND} />
          <text x={c.x} y={c.y + 4} textAnchor="middle" fontSize="13" fill="var(--paper-raised)" fontFamily="var(--font-spec)">
            {c.n}
          </text>
        </g>
      ))}
      {/* water damage marks (fault 3) */}
      <g fill="none" stroke={LOGO} strokeWidth="1.8" strokeLinecap="round">
        <path d="M44 338 q4 -7 8 0 a4.5 4.5 0 1 1 -8 0 z" />
        <path d="M70 336 q3 -5 6 0 a3.4 3.4 0 1 1 -6 0 z" />
      </g>
    </svg>
  );
}
