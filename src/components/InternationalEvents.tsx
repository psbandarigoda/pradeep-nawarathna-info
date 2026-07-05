"use client";

import { motion } from "framer-motion";
import { Mic2, Music } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { internationalEvents } from "@/data/experience";

export default function InternationalEvents() {
  return (
    <section id="events" className="section-padding relative overflow-hidden">
      <div className="spotlight spotlight-events pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="International Events"
          title="Major live shows, managed end to end"
          description="International artist concerts in Sri Lanka - from production planning to show-day execution."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {internationalEvents.map((event, index) => (
            <motion.div
              key={event.artist}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_40px_-12px_rgba(201,169,98,0.25)] md:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
                {index === 0 ? (
                  <Mic2 className="h-5 w-5 text-gold" />
                ) : (
                  <Music className="h-5 w-5 text-gold" />
                )}
              </div>

              <h3 className="font-display text-2xl font-light text-white">
                {event.artist}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {event.description}
              </p>

              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-all duration-500 group-hover:bg-gold/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
