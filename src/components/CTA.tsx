import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/[0.08] bg-black py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(103,232,249,0.18),transparent_30rem),linear-gradient(135deg,#050505,#101419_54%,#050505)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="rounded-[2rem] border border-white/[0.1] bg-white/[0.045] p-7 shadow-2xl shadow-black/45 backdrop-blur sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/80">
                Brand Audit
              </p>
              <h2 className="mt-5 font-heading text-balance text-5xl font-bold leading-[0.92] tracking-[-0.065em] text-white sm:text-7xl">
                Ready to make your brand look premium?
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Send us your current socials or website and we&apos;ll show you
                where your digital presence can improve.
              </p>
              <p className="mt-5 text-sm font-medium text-zinc-500">
                Built for growing businesses, local brands, and international
                clients.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black shadow-[0_0_44px_rgba(103,232,249,0.18)] transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Request a Brand Audit
              <ArrowRight size={17} aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
