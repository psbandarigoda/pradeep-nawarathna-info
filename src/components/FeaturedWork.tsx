"use client";

import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { portfolioItems } from "@/data/portfolio";

export default function FeaturedWork() {
  return (
    <section id="work" className="section-padding relative">
      <div className="spotlight spotlight-work pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Featured Work"
          title="Stories brought to screen"
          description="Commercials, music videos, brand films, and behind-the-scenes - directed, written, and shaped from first idea to final frame."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
