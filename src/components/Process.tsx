import { processSteps } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-white/[0.08] bg-[#050506] py-20 sm:py-28"
    >
      <div className="absolute inset-x-0 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Process"
          title="How we build your digital presence"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="group relative h-full rounded-3xl border border-white/[0.09] bg-black/70 p-7 shadow-2xl shadow-black/35 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-100/25">
                <div className="absolute right-6 top-6 font-heading text-6xl font-bold tracking-[-0.08em] text-white/[0.06] transition group-hover:text-cyan-100/20">
                  0{index + 1}
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100/70">
                  Step {index + 1}
                </p>
                <h3 className="mt-16 font-heading text-3xl font-bold tracking-[-0.055em] text-white">
                  {step.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-zinc-400">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
