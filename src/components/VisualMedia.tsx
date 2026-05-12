"use client";

import Image from "next/image";
import { useState } from "react";

type VisualMediaProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function VisualMedia({
  src,
  alt,
  label,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(min-width: 1024px) 42vw, 100vw",
}: VisualMediaProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`bg-zinc-950 ${className}`}>
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(103,232,249,0.32),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_38%,rgba(0,0,0,0.36))]" />
        <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:34px_34px]" />

        {!failed ? (
          <Image
            src={src}
            alt={alt}
            width={1400}
            height={1000}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            sizes={sizes}
            className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${imageClassName}`}
            onError={() => setFailed(true)}
          />
        ) : null}

        {failed ? (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-full rounded-lg border border-white/12 bg-black/45 p-5 shadow-2xl backdrop-blur-md">
              <p className="font-heading text-xl font-bold tracking-[-0.03em] text-white">
                {label}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                Replace image in public/work
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
