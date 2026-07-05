import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const { email, phone, address } = profile.contact;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-cinema-deep">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-display text-xl text-white">{profile.name}</p>
            <p className="mt-2 text-sm text-zinc-500">{profile.title}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              {profile.headline}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-gold/70" />
                <a
                  href={`mailto:${email}`}
                  className="transition-colors hover:text-gold"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-gold/70" />
                <a href={`tel:${phone}`} className="transition-colors hover:text-gold">
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70" />
                <span>{address}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-400">
              {[
                { href: "#about", label: "About" },
                { href: "#work", label: "Work" },
                { href: "#experience", label: "Experience" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-zinc-600 md:flex-row">
          <p>&copy; {year} {profile.name}. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">
            Creative Director · Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
