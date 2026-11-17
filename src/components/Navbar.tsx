"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { services, waLink } from "@/lib/site";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Numerology", href: "/#numerology" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`transition-all duration-500 ${
          scrolled ? "border-b border-gold/15 bg-night/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="group flex items-center gap-3" aria-label="Aacharya Saanvi Gupta — Home">
            <span className="relative grid h-12 w-12 place-items-center rounded-full bg-ivory/95 p-1 ring-1 ring-gold/50 transition group-hover:ring-gold">
              <Image src="/images/logo.png" alt="" width={44} height={44} className="h-10 w-10 object-contain" priority />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base tracking-wide text-ivory sm:text-lg">Saanvi Gupta</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-gold">Aacharya · Astro · Vastu</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) =>
              l.dropdown ? (
                <li key={l.label} className="group relative">
                  <Link
                    href={l.href}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm transition hover:text-gold ${
                      pathname.startsWith("/services") ? "text-gold" : "text-ivory/85"
                    }`}
                  >
                    {l.label} <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="glass rounded-2xl p-2 shadow-2xl">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ivory/90 transition hover:bg-gold/10 hover:text-gold"
                        >
                          <span className="glyph grid h-8 w-8 place-items-center rounded-full border border-gold/30 text-gold">{s.glyph}</span>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className={`rounded-full px-4 py-2 text-sm transition hover:text-gold ${
                      pathname === l.href ? "text-gold" : "text-ivory/85"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex"
            >
              Book Consultation
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-gold/10 bg-night/95 backdrop-blur-xl lg:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {links.map((l) => (
                  <Link key={l.label} href={l.href} className="block rounded-xl px-4 py-3 text-ivory/90 hover:bg-gold/10 hover:text-gold">
                    {l.label}
                  </Link>
                ))}
                <div className="grid grid-cols-1 gap-1 border-t border-gold/10 pt-2">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-xl px-4 py-2 text-sm text-muted hover:text-gold">
                      <span className="glyph text-gold">{s.glyph}</span> {s.title}
                    </Link>
                  ))}
                </div>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold mt-3 block rounded-full px-5 py-3 text-center font-semibold">
                  Book Consultation on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
