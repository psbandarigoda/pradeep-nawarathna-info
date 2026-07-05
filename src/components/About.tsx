"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="spotlight spotlight-about pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading label="About" title="Vision from concept to final frame" />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <div className="relative mx-auto max-w-xs lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-3 rounded-2xl bg-gold/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={profile.image}
                    alt={`${profile.name} — ${profile.title}`}
                    fill
                    sizes="(max-width: 1024px) 320px, 360px"
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cinema/50 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center lg:col-span-5"
          >
            <p className="text-lg leading-relaxed text-zinc-300 md:text-xl md:leading-relaxed">
              {profile.about}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Experience
              </p>
              <p className="font-display text-5xl font-light text-white">15+</p>
              <p className="mt-1 text-sm text-zinc-400">Years in creative production</p>

              <div className="my-6 h-px bg-white/10" />

              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
