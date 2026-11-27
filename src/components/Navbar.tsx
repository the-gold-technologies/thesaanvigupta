"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { serviceHref, services, waLink } from "@/lib/site";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Vastu Coaching", href: "/vastu-coaching" },
  { label: "Media", href: "/media" },
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
      {/* ── Main bar ── */}
      <nav
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "border-bronze/20 bg-cream/95 shadow-[0_12px_30px_-20px_rgba(43,31,24,0.5)] backdrop-blur-xl"
            : "border-bronze/10 bg-cream/[0.97] backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Aacharya Saanvi Gupta — Home"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={56}
              height={54}
              className="h-12 w-12 object-contain transition group-hover:scale-105 sm:h-14 sm:w-14"
              preload
            />
            <span className="leading-tight">
              <span className="block font-display text-base tracking-wide text-bronze-deep sm:text-lg">
                Saanvi Gupta
              </span>
              <span className="block text-[9px] uppercase tracking-[0.32em] text-bronze sm:text-[10px]">
                Aacharya · Astro · Vastu
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const active = l.dropdown
                ? pathname.startsWith("/services")
                : pathname === l.href;
              const cls = `relative flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition hover:text-bronze ${
                active ? "text-bronze" : "text-midnight/80"
              }`;
              const underline = active && (
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-bronze" />
              );
              return l.dropdown ? (
                <li key={l.label} className="group relative">
                  <Link href={l.href} className={cls}>
                    {l.label}{" "}
                    <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                    {underline}
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-2xl border border-bronze/15 bg-cream p-2 shadow-[0_30px_60px_-25px_rgba(43,31,24,0.45)]">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={serviceHref(s)}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-cocoa transition hover:bg-parchment hover:text-bronze-deep"
                        >
                          <span className="glyph grid h-8 w-8 place-items-center rounded-full border border-bronze/30 text-bronze">
                            {s.glyph}
                          </span>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={l.label}>
                  <Link href={l.href} className={cls}>
                    {l.label}
                    {underline}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-midnight hidden rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex"
            >
              Book Consultation
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-bronze/30 text-bronze-deep lg:hidden"
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
              className="overflow-hidden border-t border-bronze/15 bg-cream lg:hidden"
            >
              <div className="max-h-[calc(100dvh-80px)] space-y-1 overflow-y-auto px-4 py-4">
                {links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="block rounded-xl px-4 py-3 font-medium text-midnight hover:bg-parchment hover:text-bronze-deep"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="grid grid-cols-1 gap-1 border-t border-bronze/15 pt-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={serviceHref(s)}
                      className="flex items-center gap-3 rounded-xl px-4 py-2 text-sm text-cocoa/75 hover:text-bronze-deep"
                    >
                      <span className="glyph text-bronze">{s.glyph}</span>{" "}
                      {s.title}
                    </Link>
                  ))}
                </div>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-midnight mt-3 block rounded-full px-5 py-3 text-center font-semibold"
                >
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
