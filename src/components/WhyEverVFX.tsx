import { Check, Globe2, Sparkles, Users } from "lucide-react";
import { whyPoints } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhyEverVFX() {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-16 lg:px-10">
        <SectionHeading
          eyebrow="Why everVFX"
          title="Not just designs. A complete visual presence."
        >
          <p>
            The work is built around how your business is seen repeatedly:
            posts, campaigns, websites, printed materials, and the creative
            direction that keeps everything connected.
          </p>
        </SectionHeading>

        <div className="grid min-w-0 gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <Sparkles className="text-cyan-100" size={24} aria-hidden />
              <p className="mt-6 text-xl font-semibold text-white">
                Premium execution
              </p>
              <p className="mt-3 text-base leading-7 text-zinc-400">
                Every visual is shaped to make the brand feel sharper, more
                trusted, and more intentional.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <Globe2 className="text-cyan-100" size={24} aria-hidden />
              <p className="mt-6 text-xl font-semibold text-white">
                International perspective
              </p>
              <p className="mt-3 text-base leading-7 text-zinc-400">
                Experience across the UK, U.S., Australia, and community-led
                brands with different audiences.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16} className="sm:col-span-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-7">
              <Users className="text-cyan-100" size={24} aria-hidden />
              <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {whyPoints.map((point) => (
                  <div key={point} className="flex min-w-0 gap-3">
                    <Check
                      className="mt-1 shrink-0 text-cyan-100"
                      size={18}
                      aria-hidden
                    />
                    <p className="text-base leading-7 text-zinc-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
