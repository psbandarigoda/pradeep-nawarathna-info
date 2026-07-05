"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 md:mb-16"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
        {label}
      </p>
      <h2 className="font-display text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
