import { touchpoints } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { VisualMedia } from "./VisualMedia";

export function Touchpoints() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#070809] py-20 sm:py-28">
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Visual Proof"
          title="Design that works across every touchpoint."
        >
          <p>
            The strongest brands feel consistent everywhere people meet them:
            a feed, a website, a campaign, a printed asset, or a uniform.
          </p>
        </SectionHeading>

        <div className="mt-12 grid gap-4">
          {touchpoints.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="group grid overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.035] shadow-2xl shadow-black/30 md:grid-cols-[0.72fr_1.28fr]">
                <VisualMedia
                  src={item.image}
                  alt={`${item.title} visual`}
                  label={item.title}
                  className="h-56 md:h-full"
                  imageClassName="opacity-82 group-hover:scale-105"
                  sizes="(min-width: 768px) 32vw, 100vw"
                />
                <div className="flex items-center justify-between gap-8 p-6 sm:p-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100/70">
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 font-heading text-4xl font-bold tracking-[-0.055em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-8 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden h-16 w-16 shrink-0 rounded-full border border-cyan-100/20 bg-cyan-100/10 shadow-[0_0_42px_rgba(103,232,249,0.14)] md:block" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
