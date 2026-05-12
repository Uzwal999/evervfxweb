"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-40 border-b border-white/[0.08] bg-black/55 backdrop-blur-2xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          aria-label="everVFX home"
          onClick={() => setIsOpen(false)}
        >
          <Logo className="w-36 sm:w-40" priority />
        </a>

        <div className="hidden rounded-full border border-white/[0.08] bg-white/[0.035] px-2 py-2 shadow-2xl shadow-black/30 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-bold text-black shadow-[0_0_32px_rgba(103,232,249,0.12)] transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 md:inline-flex"
        >
          Start Your Rebrand
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-black/95 px-5 py-5 shadow-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 rounded-full bg-white px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-cyan-100"
              onClick={() => setIsOpen(false)}
            >
              Start Your Rebrand
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
