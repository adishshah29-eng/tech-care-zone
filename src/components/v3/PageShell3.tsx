import { ScrollLine3 } from "./ScrollLine3";

export function PageShell3({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <ScrollLine3 />
      {children}
    </div>
  );
}
