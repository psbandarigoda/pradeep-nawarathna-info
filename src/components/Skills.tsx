"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Skills"
          title="Craft across the full creative pipeline"
        />

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.04 }}
              className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-300 transition-colors hover:border-gold/30 hover:text-gold md:px-6 md:py-3 md:text-base"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
