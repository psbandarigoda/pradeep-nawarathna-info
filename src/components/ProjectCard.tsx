"use client";

import { motion } from "framer-motion";
import { ExternalLink, Heart } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";
import { InstagramIcon, YoutubeIcon } from "./PlatformIcons";

function PlatformIcon({ platform }: { platform: PortfolioItem["platform"] }) {
  if (platform === "youtube") {
    return <YoutubeIcon className="h-4 w-4 text-red-400" />;
  }
  return <InstagramIcon className="h-4 w-4 text-pink-400" />;
}

interface ProjectCardProps {
  item: PortfolioItem;
  index: number;
}

export default function ProjectCard({ item, index }: ProjectCardProps) {
  const isLoved = item.loved;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-2xl border bg-cinema-card transition-all duration-500 ${
        isLoved
          ? "border-gold/50 shadow-[0_0_40px_-8px_rgba(201,169,98,0.35)] hover:border-gold/80 hover:shadow-[0_0_60px_-8px_rgba(201,169,98,0.5)]"
          : "border-white/10 hover:border-white/25 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
      }`}
    >
      {isLoved && (
        <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 backdrop-blur-sm">
          <Heart className="h-3 w-3 fill-gold text-gold" />
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-gold">
            Loved Work
          </span>
        </div>
      )}

      {item.platform === "youtube" && item.videoId ? (
        <div className="relative aspect-video overflow-hidden bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title={item.role}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cinema-card/80 via-transparent to-transparent opacity-60" />
        </div>
      ) : (
        <div
          className={`relative flex aspect-video items-center justify-center overflow-hidden ${
            isLoved
              ? "bg-gradient-to-br from-gold/10 via-pink-500/5 to-cinema-card"
              : "bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-cinema-card"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,98,0.08),transparent_70%)]" />
          <InstagramIcon
            className={`h-12 w-12 transition-transform duration-500 group-hover:scale-110 ${
              isLoved ? "text-gold/60" : "text-pink-400/50"
            }`}
          />
        </div>
      )}

      <div className="p-5 md:p-6">
        <div className="mb-3 flex items-center gap-2">
          <PlatformIcon platform={item.platform} />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {item.title}
          </span>
        </div>

        <h3 className="font-display text-lg font-light leading-snug text-white md:text-xl">
          {item.role}
        </h3>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
            isLoved
              ? "text-gold hover:gap-3"
              : "text-zinc-400 hover:text-white hover:gap-3"
          }`}
        >
          View Project
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {isLoved && (
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-gold/30" />
        </div>
      )}
    </motion.article>
  );
}
