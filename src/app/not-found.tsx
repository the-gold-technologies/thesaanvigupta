import Link from "next/link";
import ZodiacWheel from "@/components/ZodiacWheel";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[90vh] place-items-center overflow-hidden px-6 pt-28 text-center">
      <ZodiacWheel className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-25" />
      <div className="relative">
        <div className="font-display text-8xl text-gold-gradient">404</div>
        <h1 className="mt-4 font-display text-3xl text-ivory">
          This page drifted out of orbit.
        </h1>
        <p className="mt-3 text-muted">
          Even the stars wander sometimes. Let&apos;s guide you back.
        </p>
        <Link
          href="/"
          className="btn-gold mt-8 inline-flex rounded-full px-7 py-3.5 font-semibold"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
