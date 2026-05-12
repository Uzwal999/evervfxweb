import { aboutHighlights } from "@/lib/data";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="relative overflow-hidden bg-[#040405] py-20 sm:py-28">
      <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:px-10">
        <SectionHeading title="A creative studio built for brands that want to look serious online.">
          <p>
            everVFX started with design and grew into a creative partner for
            businesses that need stronger visuals, consistent content, and a
            more professional digital presence. We work across social media,
            branding, web, and print to help brands look sharper, clearer, and
            more trustworthy.
          </p>
        </SectionHeading>

        <Reveal>
          <div className="rounded-3xl border border-white/[0.08] bg-black/45 p-6">
            <Logo className="w-56 max-w-full" />
            <p className="mt-8 font-heading text-4xl font-bold leading-none tracking-[-0.06em] text-white">
              Visual presence for businesses ready to be taken seriously.
            </p>
          </div>

          <div className="mt-4 grid gap-4">
            {aboutHighlights.map((highlight, index) => (
              <div
                key={highlight}
                className="flex items-center justify-between gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5"
              >
                <p className="text-base font-semibold leading-7 text-zinc-200">
                  {highlight}
                </p>
                <span className="font-heading text-3xl font-bold tracking-[-0.06em] text-cyan-100/40">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
