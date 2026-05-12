import { Mail } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Logo } from "./Logo";

export function Footer() {
  const footerLinks = navLinks.filter((link) => link.href !== "#home");

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-black py-14">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.42),transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="font-heading text-[18vw] font-bold leading-none tracking-[-0.08em] text-white/[0.045] sm:text-[12vw]">
          everVFX
        </div>

        <div className="relative -mt-8 grid gap-10 lg:grid-cols-[1fr_auto_auto] lg:items-start">
          <div className="max-w-md">
            <a href="#home" aria-label="everVFX home" className="inline-flex">
              <Logo className="w-44" />
            </a>
            <p className="mt-6 text-base leading-7 text-zinc-400">
              Creative digital presence for brands that want to look premium
              online.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100/70">
              Links
            </p>
            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100/70">
              Socials
            </p>
            <div className="mt-5 grid gap-3">
              <a
                href="#contact"
                className="text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                Instagram
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@evervfx.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                <Mail size={15} aria-hidden />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 everVFX. All rights reserved.</p>
          <p>Social. Brand. Web. Print.</p>
        </div>
      </div>
    </footer>
  );
}
