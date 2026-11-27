"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => setShow(true), 900);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore if localStorage is disabled in private mode
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookie_consent", "accepted");
    } catch {
      // Ignore
    }
    setShow(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem("cookie_consent", "rejected");
    } catch {
      // Ignore
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-20 left-4 right-4 z-[55] mx-auto max-w-md overflow-hidden rounded-3xl border border-bronze/20 bg-cream/98 p-5 text-cocoa shadow-[0_25px_60px_-15px_rgba(43,31,24,0.3)] backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:mx-0 sm:p-6"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie Consent"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleReject}
            aria-label="Close cookie banner"
            className="absolute right-3.5 top-3.5 grid h-7 w-7 place-items-center rounded-full text-cocoa/50 transition hover:bg-black/5 hover:text-cocoa cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-bronze/25 bg-parchment text-bronze-deep shadow-inner">
              <Cookie className="h-5 w-5" />
            </span>
            <div className="pr-5">
              <h3 className="font-display text-base font-semibold text-midnight tracking-wide">
                Cookie Preferences
              </h3>
              <p className="mt-1.5 text-xs font-normal leading-relaxed text-cocoa/75">
                We use cookies to ensure you get the best experience, improve
                our website, and provide tailored consultations. See our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-bronze underline decoration-bronze/40 underline-offset-2 transition hover:text-bronze-deep cursor-pointer"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Action buttons: Accept & Reject */}
          <div className="mt-4 flex items-center gap-2.5 sm:justify-end">
            <button
              type="button"
              onClick={handleReject}
              className="flex-1 rounded-full border border-bronze/30 bg-white/70 px-4 py-2 text-center text-xs font-semibold text-cocoa transition hover:bg-white hover:border-bronze hover:shadow-sm cursor-pointer sm:flex-none sm:px-5"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="btn-midnight flex-1 rounded-full px-4 py-2 text-center text-xs font-semibold cursor-pointer sm:flex-none sm:px-5"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
