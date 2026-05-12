import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { VisualMedia } from "./VisualMedia";

export function CaseStudies() {
  return (
    <section className="relative bg-black py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Case Studies"
          title="Client work with clearer direction and stronger presence."
        >
          <p>
            Each project focuses on how the brand shows up repeatedly across
            social media, campaigns, websites, and physical brand materials.
          </p>
        </SectionHeading>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.client} delay={index * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.035] shadow-2xl shadow-black/40 transition hover:-translate-y-1 hover:border-cyan-100/25">
                <div className="relative h-72 overflow-hidden">
                  <VisualMedia
                    src={study.image}
                    alt={`${study.client} work preview`}
                    label={study.client}
                    className="absolute inset-0"
                    imageClassName="opacity-86 group-hover:scale-105 group-hover:opacity-100"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.7))]" />
                  <p className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cyan-100 backdrop-blur">
                    {study.category}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-heading text-3xl font-bold leading-tight tracking-[-0.05em] text-white">
                    {study.client}
                  </h3>
                  <p className="mt-5 flex-1 text-base leading-8 text-zinc-400">
                    {study.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-semibold text-zinc-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/12 px-4 py-3 text-sm font-bold text-white transition hover:border-cyan-100/35 hover:bg-cyan-100/10"
                  >
                    View Project
                    <ArrowRight size={16} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
