// Line-art scenes for the "Devices we repair" panel, one per listed device.
// Drawn in the v2 palette so each hover shows the right kind of device.

export type ArtKind = "phone" | "tablet" | "macbook" | "imac" | "laptop";

export type ArtSpec = {
  kind: ArtKind;
  /** Small visual differences between models. */
  variant?: "island" | "notch" | "pro" | "air" | "mini";
  /** Large text on the device screen (brand wordmark). */
  mark?: string;
};

export const deviceArt: Record<string, ArtSpec> = {
  "iPhone 15 Series": { kind: "phone", variant: "island" },
  "iPhone 14 Series": { kind: "phone", variant: "notch" },
  "iPhone 13 & Older": { kind: "phone", variant: "notch" },
  "iPad Pro": { kind: "tablet", variant: "pro" },
  "iPad Air / Mini": { kind: "tablet", variant: "mini" },
  "MacBook Pro M1/M2/M3": { kind: "macbook", variant: "pro" },
  "MacBook Air": { kind: "macbook", variant: "air" },
  'iMac 24" / 27"': { kind: "imac" },
  Lenovo: { kind: "laptop", mark: "Lenovo" },
  Dell: { kind: "laptop", mark: "DELL" },
  HP: { kind: "laptop", mark: "hp" },
  Acer: { kind: "laptop", mark: "acer" },
  Asus: { kind: "laptop", mark: "ASUS" },
};

const AMBER = "var(--v2-amber)";
const LINE = "var(--v2-ink-soft)";
const SCREEN = "var(--v2-bg)";

function Callouts({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <g stroke={AMBER} strokeWidth="1.5" fill="none">
      <circle cx={x1} cy={y1} r="9" />
      <circle cx={x1} cy={y1} r="2.5" fill={AMBER} />
      <path d={`M${x1 + 9} ${y1} H${x1 + 40}`} strokeDasharray="3 3" />
      <circle cx={x2} cy={y2} r="9" />
      <circle cx={x2} cy={y2} r="2.5" fill={AMBER} />
      <path d={`M${x2 - 9} ${y2} H${x2 - 40}`} strokeDasharray="3 3" />
    </g>
  );
}

function Phone({ variant }: { variant?: ArtSpec["variant"] }) {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2">
      <rect x="150" y="38" width="100" height="224" rx="18" />
      <rect x="157" y="45" width="86" height="210" rx="12" fill={SCREEN} />
      {variant === "island" ? (
        <rect x="185" y="52" width="30" height="9" rx="4.5" fill={LINE} stroke="none" />
      ) : (
        <path d="M180 45 v4 a5 5 0 0 0 5 5 h30 a5 5 0 0 0 5 -5 v-4" fill={LINE} stroke="none" />
      )}
      <path d="M170 110 h60 M170 128 h44 M170 146 h52" stroke={LINE} opacity=".35" />
      <path d="M152 100 v14 M152 124 v14" stroke={LINE} />
      <Callouts x1={110} y1={90} x2={290} y2={215} />
    </g>
  );
}

function Tablet({ variant }: { variant?: ArtSpec["variant"] }) {
  const pro = variant === "pro";
  const w = pro ? 250 : 220;
  const h = pro ? 182 : 160;
  const x = 200 - w / 2;
  const y = 150 - h / 2;
  const b = pro ? 7 : 12;
  return (
    <g fill="none" stroke={LINE} strokeWidth="2">
      <rect x={x} y={y} width={w} height={h} rx={pro ? 14 : 16} />
      <rect x={x + b} y={y + b} width={w - b * 2} height={h - b * 2} rx="8" fill={SCREEN} />
      <circle cx={x + w / 2} cy={y + b / 2 + 0.5} r="1.8" fill={LINE} stroke="none" />
      <path d={`M${x + 30} ${y + 55} h90 M${x + 30} ${y + 75} h60`} opacity=".35" />
      <Callouts x1={x - 36} y1={y + 40} x2={x + w + 36} y2={y + h - 40} />
    </g>
  );
}

function MacBook({ variant }: { variant?: ArtSpec["variant"] }) {
  const pro = variant === "pro";
  return (
    <g fill="none" stroke={LINE} strokeWidth="2">
      <rect x="95" y="62" width="210" height="140" rx="8" />
      <rect x="102" y="69" width="196" height="126" rx="4" fill={SCREEN} />
      {pro && <path d="M185 69 h30 v7 a3 3 0 0 1 -3 3 h-24 a3 3 0 0 1 -3 -3z" fill={LINE} stroke="none" />}
      <path d="M118 112 h80 M118 130 h56" opacity=".35" />
      {pro ? (
        <path d="M70 202 h260 l-8 14 a6 6 0 0 1 -5 3 h-234 a6 6 0 0 1 -5 -3z" />
      ) : (
        <path d="M70 202 h260 l-4 10 a6 6 0 0 1 -5 3 h-242 a6 6 0 0 1 -5 -3z" />
      )}
      <path d="M178 202 h44 v4 h-44z" fill={LINE} stroke="none" opacity=".6" />
      <Callouts x1={70} y1={100} x2={330} y2={165} />
    </g>
  );
}

function IMac() {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2">
      <rect x="85" y="40" width="230" height="150" rx="10" />
      <rect x="93" y="48" width="214" height="118" rx="3" fill={SCREEN} />
      <path d="M85 172 h230" />
      <path d="M180 190 l-10 54 h60 l-10 -54" />
      <path d="M150 244 h100" />
      <path d="M110 80 h90 M110 98 h60" opacity=".35" />
      <Callouts x1={55} y1={90} x2={345} y2={150} />
    </g>
  );
}

function Laptop({ mark }: { mark?: string }) {
  return (
    <g fill="none" stroke={LINE} strokeWidth="2">
      <rect x="98" y="66" width="204" height="134" rx="6" />
      <rect x="105" y="73" width="190" height="120" rx="3" fill={SCREEN} />
      <path d="M72 200 h256 l-10 18 h-236z" />
      <path d="M92 207 h216" opacity=".35" />
      {mark && (
        <text
          x="200"
          y="142"
          textAnchor="middle"
          fill={AMBER}
          stroke="none"
          fontSize="30"
          fontWeight="600"
          fontFamily="var(--font-display), system-ui, sans-serif"
        >
          {mark}
        </text>
      )}
      <Callouts x1={66} y1={105} x2={334} y2={170} />
    </g>
  );
}

export function DeviceArt2({ spec }: { spec: ArtSpec }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-hidden="true">
      {spec.kind === "phone" && <Phone variant={spec.variant} />}
      {spec.kind === "tablet" && <Tablet variant={spec.variant} />}
      {spec.kind === "macbook" && <MacBook variant={spec.variant} />}
      {spec.kind === "imac" && <IMac />}
      {spec.kind === "laptop" && <Laptop mark={spec.mark} />}
    </svg>
  );
}
