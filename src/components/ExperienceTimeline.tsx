"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experienceItems } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="spotlight spotlight-experience pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Experience"
          title="A career built behind and in front of the camera"
        />

        <div className="relative max-w-3xl">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent md:left-[11px]" />

          <ul className="space-y-8">
            {experienceItems.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-gold/60 bg-cinema md:h-6 md:w-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold md:h-2 md:w-2" />
                </span>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-white/10 hover:bg-white/[0.04] md:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-light text-white md:text-xl">
                      {item.title}
                    </h3>
                    {item.period && (
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-gold">
                        {item.period}
                      </span>
                    )}
                  </div>
                  {item.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400 md:text-base">
                      {item.detail}
                    </p>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
