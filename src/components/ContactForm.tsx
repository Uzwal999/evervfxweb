"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const inputClass =
  "w-full rounded-md border border-white/10 bg-black/35 px-4 py-3.5 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-100/60 focus:ring-2 focus:ring-cyan-100/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-[#050505] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <SectionHeading title="Let’s build your brand properly.">
          <p>
            Tell everVFX what you want to improve, where your brand is showing
            up now, and what kind of creative support would move the business
            forward.
          </p>
        </SectionHeading>

        <form
          className="rounded-lg border border-white/10 bg-white/[0.045] p-5 sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            event.currentTarget.reset();
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-zinc-300">
              <span>Name</span>
              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                className={inputClass}
                placeholder="Your name"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-zinc-300">
              <span>Business Name</span>
              <input
                required
                name="business"
                type="text"
                autoComplete="organization"
                className={inputClass}
                placeholder="Your business"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-zinc-300">
              <span>Email</span>
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className={inputClass}
                placeholder="you@example.com"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-zinc-300">
              <span>Service Needed</span>
              <select required name="service" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Social Media Management</option>
                <option>Branding & Rebranding</option>
                <option>Web Design</option>
                <option>Content Design</option>
                <option>Print & Merchandise Design</option>
                <option>Brand Audit</option>
              </select>
            </label>

            <label className="space-y-2 text-sm font-medium text-zinc-300 sm:col-span-2">
              <span>Message</span>
              <textarea
                required
                name="message"
                rows={6}
                className={inputClass}
                placeholder="Tell us what you want to improve."
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Send Message
              <ArrowRight size={17} aria-hidden />
            </button>

            <p
              className="min-h-6 text-sm font-medium text-cyan-100"
              aria-live="polite"
            >
              {submitted ? "Thanks. everVFX will get back to you soon." : ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
