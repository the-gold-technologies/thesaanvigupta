import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, CalendarDays } from "lucide-react";
import { formatDate, type BlogPost } from "@/lib/blog";

/** Full-image overlay card linking to an article on this site's /blog/[slug] page. */
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex h-full min-h-[440px] sm:min-h-[480px] flex-col justify-between overflow-hidden rounded-3xl border border-bronze/20 bg-mocha shadow-[0_20px_50px_-25px_rgba(43,31,24,0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:border-latte/50 hover:shadow-[0_30px_70px_-25px_rgba(43,31,24,0.85)]"
    >
      {/* Background full image with smooth zoom */}
      {post.image ? (
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <span className="parchment-sky absolute inset-0 grid place-items-center">
          <BookOpen className="h-12 w-12 text-latte/60" />
        </span>
      )}

      {/* Atmospheric dark gradient overlays to ensure text is crystal clear */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-55% to-black/20 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/50" />
      <div className="absolute inset-0 bg-mocha/20 mix-blend-multiply" />

      {/* Top row: Category tag & Date */}
      <div className="relative z-10 flex items-center justify-between gap-2 p-5 sm:p-6">
        {post.category ? (
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur-md">
            {post.category}
          </span>
        ) : (
          <span />
        )}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[11px] font-medium text-cream/90 backdrop-blur-sm">
          <CalendarDays className="h-3 w-3 text-latte" />
          {formatDate(post.date)}
        </span>
      </div>

      {/* Bottom content: Title, Excerpt, Read Article */}
      <div className="relative z-10 flex flex-col p-5 sm:p-6 pt-0">
        <h3 className="font-display text-xl font-normal leading-snug text-white transition-colors duration-300 group-hover:text-latte sm:text-2xl">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="mt-2.5 text-xs sm:text-sm font-light leading-relaxed text-cream/80 line-clamp-2">
            {post.excerpt}
          </p>
        )}

        <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-latte transition-colors duration-300 group-hover:text-cream">
          <span>Read article</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
