import Image from "next/image";

export function Logo({
  variant = "dark",
  full = false,
  className = "h-9 w-auto",
}: {
  variant?: "dark" | "light";
  full?: boolean;
  className?: string;
}) {
  const suffix = variant === "light" ? "-light" : "";
  const src = `/brand/logo-${full ? "full" : "mark"}${suffix}.png`;
  const ratio = full ? 1026 / 613 : 1025 / 442;
  return (
    <Image
      src={src}
      alt="Tech Care Zone"
      width={Math.round(200 * ratio)}
      height={200}
      className={className}
      priority={!full}
    />
  );
}
