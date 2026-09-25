import { PcbDraw } from "./PcbDraw";

const TRACE = "var(--logo-blue)";
const INK = "var(--navy)";

type Pt = number[];
const d = (pts: Pt[]) => "M" + pts.map((p) => p.join(" ")).join(" L");

function Trace({ pts, delay = 0 }: { pts: Pt[]; delay?: number }) {
  return (
    <path
      d={d(pts)}
      pathLength={1}
      className="pcb-draw"
      style={{ ["--d" as string]: `${delay}s` }}
      fill="none"
      stroke={TRACE}
      strokeWidth="2.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  );
}

function Via({ x, y }: { x: number; y: number }) {
  return <circle className="pcb-part" cx={x} cy={y} r="4.5" fill="var(--paper)" stroke={INK} strokeWidth="2" />;
}

function Chip({
  x,
  y,
  w,
  h,
  pins,
  label,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  pins: number;
  label?: string;
}) {
  const gap = (n: number, len: number) => Array.from({ length: n }, (_, i) => ((i + 1) * len) / (n + 1));
  return (
    <g className="pcb-part">
      {gap(pins, w).flatMap((px, i) => [
        <rect key={`t${i}`} x={x + px - 3} y={y - 8} width="6" height="8" fill={INK} />,
        <rect key={`b${i}`} x={x + px - 3} y={y + h} width="6" height="8" fill={INK} />,
      ])}
      {gap(pins, h).flatMap((py, i) => [
        <rect key={`l${i}`} x={x - 8} y={y + py - 3} width="8" height="6" fill={INK} />,
        <rect key={`r${i}`} x={x + w} y={y + py - 3} width="8" height="6" fill={INK} />,
      ])}
      <rect x={x} y={y} width={w} height={h} rx="4" fill="var(--paper-raised)" stroke={INK} strokeWidth="2" />
      <circle cx={x + 9} cy={y + 9} r="2.5" fill={INK} />
      {label && (
        <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill={INK} fontFamily="var(--font-spec)">
          {label}
        </text>
      )}
    </g>
  );
}

/** Chip with traces fanning out; sits to the right of a section heading. */
function ChipFan() {
  return (
    <svg viewBox="0 0 340 150" className="h-auto w-full" fill="none">
      <Trace delay={0.0} pts={[[268, 55], [300, 55], [316, 39], [340, 39]]} />
      <Trace delay={0.1} pts={[[268, 70], [340, 70]]} />
      <Trace delay={0.2} pts={[[268, 85], [300, 85], [316, 101], [340, 101]]} />
      <Trace delay={0.3} pts={[[268, 100], [292, 100], [308, 116], [308, 150]]} />
      <Trace delay={0.15} pts={[[192, 55], [160, 55], [144, 39], [100, 39], [100, 0]]} />
      <Trace delay={0.25} pts={[[192, 70], [120, 70], [104, 86], [50, 86]]} />
      <Trace delay={0.35} pts={[[192, 85], [150, 85], [134, 101], [134, 150]]} />
      <Trace delay={0.45} pts={[[215, 37], [215, 0]]} />
      <Trace delay={0.5} pts={[[245, 113], [245, 135], [232, 148], [232, 150]]} />
      <Via x={338} y={39} />
      <Via x={338} y={101} />
      <Via x={100} y={4} />
      <Via x={50} y={86} />
      <Via x={134} y={146} />
      <Chip x={200} y={45} w={60} h={60} pins={4} label="U1" />
    </svg>
  );
}

/** Three-lane routed bus with a jog and a resistor. */
function BusLanes() {
  return (
    <svg viewBox="0 0 340 110" className="h-auto w-full" fill="none">
      {[0, 1, 2].map((k) => {
        const y = 20 + k * 14;
        return (
          <Trace
            key={k}
            delay={k * 0.15}
            pts={[[0, y], [110 + k * 12, y], [136 + k * 12, y + 26], [340, y + 26]]}
          />
        );
      })}
      <g className="pcb-part">
        <rect x="200" y="74" width="34" height="12" fill="var(--paper-raised)" stroke={INK} strokeWidth="2" />
      </g>
      {[0, 1, 2].map((k) => (
        <g key={k}>
          <Via x={4} y={20 + k * 14} />
          <Via x={336} y={46 + k * 14} />
        </g>
      ))}
    </svg>
  );
}

/** Branching test-point network. */
function Nodes() {
  return (
    <svg viewBox="0 0 340 110" className="h-auto w-full" fill="none">
      <Trace pts={[[10, 80], [120, 80], [150, 50], [250, 50], [270, 30], [336, 30]]} />
      <Trace delay={0.25} pts={[[120, 80], [150, 108], [300, 108]]} />
      <Trace delay={0.4} pts={[[250, 50], [286, 86], [336, 86]]} />
      {[[10, 80], [336, 30], [300, 108], [336, 86], [150, 50]].map(([x, y], i) => (
        <g key={i} className="pcb-part">
          <circle cx={x} cy={y} r="6" fill="var(--paper)" stroke={INK} strokeWidth="2" />
          <circle cx={x} cy={y} r="2" fill={INK} />
        </g>
      ))}
    </svg>
  );
}

const variants = { chip: ChipFan, bus: BusLanes, nodes: Nodes } as const;
export type PcbVariant = keyof typeof variants;

export function PcbSide({ variant, className = "" }: { variant: PcbVariant; className?: string }) {
  const Art = variants[variant];
  return (
    <PcbDraw className={className}>
      <Art />
    </PcbDraw>
  );
}

/** Full-width routed bus that separates sections. */
export function TraceDivider({ chip = false }: { chip?: boolean }) {
  return (
    <PcbDraw className="pointer-events-none w-full overflow-hidden opacity-75">
      <svg viewBox="0 0 1200 56" preserveAspectRatio="xMidYMid slice" className="h-14 w-full" fill="none">
        {[0, 1, 2].map((k) => (
          <Trace
            key={k}
            delay={k * 0.2}
            pts={[
              [0, 14 + k * 10],
              [340 + k * 10, 14 + k * 10],
              [352 + k * 10, 26 + k * 10],
              [800 + k * 10, 26 + k * 10],
              [812 + k * 10, 14 + k * 10],
              [1200, 14 + k * 10],
            ]}
          />
        ))}
        <g className="pcb-part">
          <rect x="560" y="30" width="40" height="12" fill="var(--paper-raised)" stroke={INK} strokeWidth="2" />
        </g>
        {[0, 1, 2].map((k) => (
          <g key={k}>
            <Via x={40} y={14 + k * 10} />
            <Via x={1160} y={14 + k * 10} />
          </g>
        ))}
        {chip && <Chip x={1040} y={8} w={44} h={40} pins={2} />}
      </svg>
    </PcbDraw>
  );
}

/** Large, faint board behind the hero. */
export function PcbHeroBackdrop() {
  return (
    <PcbDraw className="pointer-events-none absolute inset-0 -z-0 hidden overflow-hidden opacity-[0.55] lg:block">
      <svg viewBox="0 0 1200 700" preserveAspectRatio="xMaxYMid slice" className="h-full w-full" fill="none">
        <Trace delay={0.0} pts={[[1000, 200], [1000, 260], [1040, 300], [1040, 700]]} />
        <Trace delay={0.1} pts={[[1015, 200], [1015, 250], [1060, 295], [1060, 700]]} />
        <Trace delay={0.2} pts={[[1030, 200], [1030, 240], [1080, 290], [1080, 700]]} />
        <Trace delay={0.3} pts={[[920, 150], [840, 150], [815, 125], [720, 125]]} />
        <Trace delay={0.4} pts={[[920, 165], [850, 165], [825, 190], [740, 190]]} />
        <Trace delay={0.5} pts={[[1100, 150], [1150, 150], [1180, 180], [1200, 180]]} />
        <Trace delay={0.6} pts={[[1100, 165], [1160, 165], [1180, 145], [1200, 145]]} />
        <Trace delay={0.7} pts={[[700, 700], [700, 650], [730, 620], [830, 620], [860, 590], [920, 590]]} />
        <Trace delay={0.8} pts={[[720, 700], [720, 670], [745, 645], [800, 645], [825, 670], [920, 670]]} />
        <Via x={720} y={125} />
        <Via x={740} y={190} />
        <Via x={920} y={590} />
        <Via x={920} y={670} />
        <Via x={1198} y={180} />
        <Chip x={920} y={120} w={80} h={80} pins={3} label="U2" />
        <Chip x={640} y={640} w={40} h={40} pins={2} />
      </svg>
    </PcbDraw>
  );
}

/** Long trace under the footer-side of the page. */
export function FooterTrace() {
  return <TraceDivider chip />;
}
