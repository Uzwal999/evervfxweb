import {
  Image,
  Megaphone,
  Monitor,
  Palette,
  Printer,
  Search,
} from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = [Megaphone, Palette, Monitor, Image, Printer, Search];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-white/[0.08] bg-[linear-gradient(180deg,#070707_0%,#0b0d0f_100%)] py-20 sm:py-28"
    >
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Services"
          title="Everything your brand needs to look consistent, premium, and clear."
        >
          <p>
            A complete creative system across social media, identity, websites,
            content, print, and audit work.
          </p>
        </SectionHeading>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.04] p-[1px] shadow-2xl shadow-black/35 transition hover:-translate-y-1 hover:border-cyan-100/25">
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_0%,rgba(103,232,249,0.32),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.16),transparent_42%)]" />
                  <div className="relative h-full rounded-[1.45rem] bg-black/72 p-7 backdrop-blur">
                    <div className="flex items-start justify-between gap-6">
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan-100 shadow-[0_0_34px_rgba(103,232,249,0.12)] transition group-hover:border-cyan-100/30 group-hover:bg-cyan-100/10">
                        <Icon size={27} aria-hidden />
                      </span>
                      <span className="font-heading text-4xl font-bold tracking-[-0.06em] text-white/10 transition group-hover:text-cyan-100/30">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-9 font-heading text-2xl font-bold tracking-[-0.045em] text-white">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
