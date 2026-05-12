import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <Reveal className={`flex max-w-4xl flex-col gap-5 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-5">
        <h2 className="font-heading text-balance text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {children ? (
          <div className="text-pretty text-base leading-8 text-zinc-400 sm:text-lg">
            {children}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}
