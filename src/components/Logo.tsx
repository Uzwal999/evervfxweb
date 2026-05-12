import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "w-36", priority = false }: LogoProps) {
  return (
    <Image
      src="/logos/evervfx-logo.png"
      alt="everVFX logo"
      width={424}
      height={106}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      className={`h-auto ${className}`}
    />
  );
}
