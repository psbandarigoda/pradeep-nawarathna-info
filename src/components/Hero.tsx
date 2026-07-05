"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="spotlight spotlight-hero pointer-events-none absolute inset-0" />
      <div className="spotlight spotlight-secondary pointer-events-none absolute inset-0" />
      <div className="grain pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-gold" />
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
                {profile.title}
              </p>
            </div>

            <h1 className="font-display text-4xl font-light leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-6 font-display text-2xl font-light leading-snug text-zinc-200 sm:text-3xl lg:text-3xl xl:text-4xl">
              {profile.headline}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-zinc-500 md:text-base">
              {profile.subheadline}
            </p>

            <p className="mt-8 text-base leading-relaxed text-zinc-400 md:text-lg">
              {profile.heroCopy}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#work" className="btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn-secondary">
                Discuss a Project
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md lg:justify-self-end"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gold/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-gold/20 shadow-[0_0_60px_-12px_rgba(201,169,98,0.35)]">
              <div className="relative aspect-square">
                <Image
                  src={profile.image}
                  alt={`${profile.name} - ${profile.title}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cinema/40 via-transparent to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/10" />
            </div>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-zinc-600 lg:text-right">
              Creative Director · Sri Lanka
            </p>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-gold md:flex"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cinema to-transparent" />
    </section>
  );
}
