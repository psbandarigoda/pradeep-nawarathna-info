"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "border-b border-white/5 bg-cinema/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a
          href="#home"
          className="font-display text-lg tracking-wide text-white transition-colors hover:text-gold md:text-xl"
          onClick={() => setMobileOpen(false)}
        >
          {profile.name.split(" ")[0]}
          <span className="text-gold">.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-gold transition-all hover:border-gold hover:bg-gold/20 lg:inline-block"
        >
          Contact Pradeep
        </a>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 text-zinc-300 transition-colors hover:text-gold lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-cinema/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col px-5 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block border-b border-white/5 py-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:text-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                className="block rounded-full border border-gold/40 bg-gold/10 py-3 text-center text-xs font-medium uppercase tracking-[0.15em] text-gold"
                onClick={() => setMobileOpen(false)}
              >
                Contact Pradeep
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
