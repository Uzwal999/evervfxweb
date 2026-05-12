import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { clients } from "@/lib/data";
import { Reveal } from "./Reveal";

function publicAssetExists(src: string) {
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

export function WorkedWith() {
  const marqueeClients = [...clients, ...clients];

  return (
    <section
      id="work"
      className="relative overflow-hidden border-b border-white/[0.08] bg-black py-14 sm:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.38),transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/80">
              Worked With
            </p>
            <h2 className="mt-5 font-heading text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl">
              Selected work across hospitality, recruitment, education, finance,
              and community-led brands.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            A focused mix of visual systems, content campaigns, brand assets,
            and print-ready creative built for businesses that need to look more
            credible online.
          </p>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.035] py-4 shadow-2xl shadow-black/35">
          <div className="flex w-max gap-4 animate-marquee">
            {marqueeClients.map((client, index) => {
              const hasLogo = publicAssetExists(client.logo);

              return (
                <div
                  key={`${client.name}-${index}`}
                  className="flex h-24 w-64 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-black/35 px-6"
                >
                  {hasLogo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={180}
                      height={64}
                      className="max-h-12 w-auto object-contain"
                    />
                  ) : (
                    <div className="text-center">
                      <p className="font-heading text-xl font-bold tracking-[-0.04em] text-white">
                        {client.name}
                      </p>
                      <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan-100/60">
                        {client.sector}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
