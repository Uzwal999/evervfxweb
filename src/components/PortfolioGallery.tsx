import { visualWork } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { VisualMedia } from "./VisualMedia";

const layout = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-6",
  "md:col-span-6",
];

export function PortfolioGallery() {
  return (
    <section className="relative overflow-hidden bg-[#050506] py-20 sm:py-28">
      <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Selected Visual Work"
          title="Image-led creative systems made to hold attention."
        >
          <p>
            Social graphics, recruitment campaigns, education visuals,
            financial content, riding club identity, and print work presented as
            a flexible portfolio wall.
          </p>
        </SectionHeading>

        <div className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-12">
          {visualWork.map((item, index) => (
            <Reveal
              key={item.client}
              delay={index * 0.06}
              className={layout[index]}
            >
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.035] shadow-2xl shadow-black/40">
                <VisualMedia
                  src={item.image}
                  alt={`${item.client} ${item.category}`}
                  label={item.client}
                  className={`absolute inset-0 bg-gradient-to-br ${item.accent}`}
                  imageClassName="opacity-82 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.82))]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-cyan-100 backdrop-blur">
                    {item.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-3xl font-bold tracking-[-0.05em] text-white">
                    {item.client}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-zinc-300">
                    {item.category}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
