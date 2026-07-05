"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

export default function Contact() {
  const { email, phone, address } = profile.contact;

  return (
    <section id="contact" className="section-padding relative">
      <div className="spotlight spotlight-contact pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Contact"
          title="Let's build your next story"
          description="Available for commercials, music videos, branded content, live events, and full creative direction."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <a
              href={`mailto:${email}`}
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-gold/30 hover:bg-white/[0.04] md:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
                <Mail className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Email
                </p>
                <p className="mt-1 text-base text-white transition-colors group-hover:text-gold md:text-lg">
                  {email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${phone}`}
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-gold/30 hover:bg-white/[0.04] md:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
                <Phone className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Phone
                </p>
                <p className="mt-1 text-base text-white transition-colors group-hover:text-gold md:text-lg">
                  {phone}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
                <MapPin className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Address
                </p>
                <p className="mt-1 text-base leading-relaxed text-zinc-300 md:text-lg">
                  {address}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 via-transparent to-transparent p-8 md:p-10"
          >
            <p className="font-display text-2xl font-light leading-snug text-white md:text-3xl">
              Ready to direct something unforgettable?
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
              Whether it's a 30-second spot or a stadium-scale live show, I bring
              the same precision — creative vision locked from first brief to final
              delivery.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`mailto:${email}`} className="btn-primary text-center">
                Contact Pradeep
              </a>
              <a href="#work" className="btn-secondary text-center">
                View Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
