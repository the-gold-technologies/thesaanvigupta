import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ChevronRight, Clock, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { FacebookIcon, LinkedInIcon, WhatsAppIcon } from "@/components/Icons";
import { formatDate, getLatestPosts, getPost } from "@/lib/blog";
import { site, waLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const AUTHOR = "Dr. Saanvi Gupta";

/** Pre-render the most recent articles; older ones render on first visit. */
export async function generateStaticParams() {
  const posts = await getLatestPosts(3);
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [AUTHOR],
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const url = `${site.url}/blog/${post.slug}`;
  const share = [
    {
      label: "WhatsApp",
      icon: WhatsAppIcon,
      href: `https://wa.me/?text=${encodeURIComponent(`${post.title} — ${url}`)}`,
    },
    {
      label: "Facebook",
      icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: "LinkedIn",
      icon: LinkedInIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}`,
    },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.modified,
    image: post.image,
    author: { "@type": "Person", name: AUTHOR, url: `${site.url}/about` },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <div className="bg-cream text-cocoa">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Header: featured image as background with balanced height matching reference ── */}
      <header className="parchment-sky deep relative flex min-h-[440px] items-end overflow-hidden text-cream sm:min-h-[480px] lg:min-h-[520px]">
        {post.image && (
          <>
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* overlays keep the text readable on any image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#16120e] via-[#16120e]/80 via-50% to-[#16120e]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#16120e]/90 via-[#16120e]/50 to-transparent" />
          </>
        )}

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:pb-14 lg:pt-36">
          <Reveal className="max-w-3xl">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-xs text-cream/70"
            >
              <Link href="/" className="transition hover:text-latte">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-latte/60" />
              <Link href="/blog" className="transition hover:text-latte">
                Blog
              </Link>
              <ChevronRight className="h-3 w-3 text-latte/60" />
              <span className="line-clamp-1 max-w-[14rem] font-medium text-latte sm:max-w-md">
                {post.title}
              </span>
            </nav>

            {post.category && (
              <span className="mt-4 inline-flex rounded-full border border-latte/35 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-latte backdrop-blur-md">
                {post.category}
              </span>
            )}

            <h1 className="mt-3.5 font-display text-2xl font-normal leading-[1.2] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)] sm:text-3xl lg:text-[2.6rem]">
              {post.title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-cream/85 line-clamp-2 sm:text-base">
              {post.excerpt}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-4 text-xs text-cream/85 sm:text-sm">
              <span className="flex items-center gap-2.5">
                <span className="relative h-8 w-8 overflow-hidden rounded-full border border-latte/60 shadow sm:h-9 sm:w-9">
                  <Image
                    src="/images/saanvi.webp"
                    alt={AUTHOR}
                    fill
                    sizes="36px"
                    className="object-cover object-top"
                  />
                </span>
                <span className="font-semibold text-white sm:text-base">
                  {AUTHOR}
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-cream/80">
                <CalendarDays className="h-3.5 w-3.5 text-latte sm:h-4 sm:w-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5 text-cream/80">
                <Clock className="h-3.5 w-3.5 text-latte sm:h-4 sm:w-4" />
                {post.readMinutes} min read
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-8 px-5 py-14 sm:px-6 md:py-20 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12 lg:px-8">
        {/* Main Article Content (Right side on desktop, Top on mobile) */}
        <div className="order-1 w-full lg:order-2">
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* share */}
          <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-bronze/15 pt-8">
            <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-bronze">
              Share this article
            </span>
            {share.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${s.label}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-bronze/25 text-bronze-deep transition hover:border-mocha hover:bg-mocha hover:text-cream"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* author */}
          <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-bronze/15 bg-white p-6 sm:flex-row sm:items-center">
            <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-latte">
              <Image
                src="/images/saanvi.webp"
                alt={site.name}
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </span>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-bronze">
                Written by
              </span>
              <div className="mt-1 font-display text-xl text-midnight">
                {site.name}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-cocoa/70">
                {site.tagline} in Noida with 20+ years of practice, helping
                families and businesses with practical, fear-free guidance.
              </p>
              <Link
                href="/about"
                className="mt-2 inline-block text-sm font-semibold text-bronze-deep underline decoration-bronze/40 underline-offset-4 hover:text-cocoa"
              >
                More about Saanvi
              </Link>
            </div>
          </div>
        </div>

        {/* Sticky Sidebar (Left side on desktop, Bottom on mobile) */}
        <aside className="order-2 lg:order-1 lg:pt-2">
          <div className="sticky top-28 space-y-5">
            {post.toc.length > 1 && (
              <nav
                aria-label="In this article"
                className="hidden rounded-3xl border border-bronze/15 bg-white p-6 lg:block"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-bronze">
                  In this article
                </div>
                <ol className="mt-4 space-y-2.5 text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {post.toc.map((t, i) => (
                    <li key={t.id} className="flex gap-2.5">
                      <span className="font-display text-xs leading-5 text-bronze/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <a
                        href={`#${t.id}`}
                        className="leading-snug text-cocoa/75 transition hover:text-bronze-deep"
                      >
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="parchment-sky deep overflow-hidden rounded-3xl p-6 text-cream">
              <div className="flex items-center gap-3">
                <span className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-latte/50">
                  <Image
                    src="/images/saanvi.webp"
                    alt={site.name}
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </span>
                <div>
                  <div className="font-display text-lg">{site.name}</div>
                  <div className="text-xs text-cream/65">{site.tagline}</div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-cream/80">
                Have a question about your home, chart or numbers? Ask Saanvi
                for a personal consultation.
              </p>
              <a
                href={waLink(
                  `Namaste Saanvi ma'am, I read your article "${post.title}" and would like to book a consultation.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-latte px-5 py-3 text-sm font-semibold text-mocha transition hover:bg-cream"
              >
                <WhatsAppIcon className="h-4 w-4" /> Ask Saanvi on WhatsApp
              </a>
              <a
                href={`tel:${site.phonePrimaryRaw}`}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-latte/35 px-5 py-3 text-sm font-semibold text-cream transition hover:border-latte hover:bg-white/5"
              >
                <Phone className="h-4 w-4" /> {site.phonePrimary}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
