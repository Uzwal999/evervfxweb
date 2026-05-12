"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { heroWall } from "@/lib/data";
import { VisualMedia } from "./VisualMedia";

const wallPositions = [
  "lg:left-0 lg:top-16 lg:h-[360px] lg:w-[50%]",
  "lg:right-0 lg:top-0 lg:h-[270px] lg:w-[50%]",
  "lg:right-[17%] lg:top-[292px] lg:h-[245px] lg:w-[34%]",
  "lg:left-[8%] lg:bottom-0 lg:h-[235px] lg:w-[32%]",
  "lg:right-0 lg:bottom-10 lg:h-[210px] lg:w-[32%]",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/[0.08] pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(103,232,249,0.16),transparent_30rem),radial-gradient(circle_at_82%_44%,rgba(37,99,235,0.14),transparent_28rem),linear-gradient(135deg,#030305_0%,#090a0c_48%,#030305_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(165,243,252,0.55),transparent)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:min-h-[700px] lg:grid-cols-[0.94fr_1.06fr] lg:px-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-zinc-300 shadow-2xl shadow-black/30 backdrop-blur">
            <BadgeCheck size={16} className="text-cyan-200" aria-hidden />
            Founder-led visual identity studio
          </div>

          <h1 className="font-heading text-balance text-5xl font-bold leading-[0.94] tracking-[-0.065em] text-white sm:text-6xl lg:text-[4.8rem] xl:text-[5.2rem]">
            Brands built to look premium, trusted, and impossible to ignore.
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-zinc-300 sm:text-xl">
            everVFX helps businesses build stronger digital and visual
            identities through social media management, branding, websites,
            content design, and print-ready creative systems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black shadow-[0_0_44px_rgba(103,232,249,0.16)] transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Start Your Rebrand
              <ArrowRight size={17} aria-hidden />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.025] px-7 py-4 text-sm font-bold text-white transition hover:border-cyan-100/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-6">
            {["UK", "US", "AUS+"].map((market) => (
              <div key={market}>
                <p className="font-heading text-2xl font-bold tracking-[-0.04em] text-white">
                  {market}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Client work
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          aria-label="everVFX creative work wall"
        >
          <div className="absolute -inset-8 -z-10 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:block lg:h-[620px]">
            {heroWall.map((item, index) => (
              <motion.article
                key={item.title}
                className={`group relative min-h-52 overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.04] shadow-2xl shadow-black/45 lg:absolute lg:min-h-0 ${wallPositions[index]}`}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <VisualMedia
                  src={item.image}
                  alt={item.label}
                  label={item.title}
                  className="absolute inset-0"
                  imageClassName="object-left opacity-100 brightness-125 contrast-125 saturate-125 group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.54))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur">
                    <Sparkles size={12} aria-hidden />
                    {item.type}
                  </div>
                  <h2 className="font-heading text-2xl font-bold tracking-[-0.04em] text-white">
                    {item.title}
                  </h2>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
