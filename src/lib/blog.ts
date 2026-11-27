/** Posts from the WordPress blog on thesaanvigupta.com (REST API), shown on this site. */

const WP_SITE = "https://www.thesaanvigupta.com";
const WP_API = `${WP_SITE}/wp-json/wp/v2`;
const REVALIDATE = 3600; // refresh posts at most once an hour

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  /** Natural size of `image`, so it can be shown uncropped. */
  imageSize?: { width: number; height: number };
  category?: string;
};

export type BlogArticle = BlogPost & {
  modified: string;
  /** Cleaned, safe-to-render HTML body. */
  html: string;
  readMinutes: number;
  /** Section headings (h2) for the table of contents. */
  toc: { id: string; text: string }[];
};

type WpPost = {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  /** SEO plugin data; its og_image is the fallback when the featured image is private. */
  yoast_head_json?: {
    og_image?: { url: string; width?: number; height?: number }[];
    description?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url?: string;
      media_details?: {
        width?: number;
        height?: number;
        sizes?: Record<
          string,
          { source_url: string; width: number; height: number }
        >;
      };
    }[];
    "wp:term"?: { name: string; taxonomy: string }[][];
  };
};

/* ───────────── text helpers ───────────── */

const ENTITIES: Record<string, string> = {
  amp: "&",
  quot: '"',
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: " ",
  hellip: "…",
  ndash: "–",
  mdash: "—",
  rsquo: "’",
  lsquo: "‘",
  rdquo: "”",
  ldquo: "“",
};

function decode(s: string) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) =>
      String.fromCodePoint(parseInt(n, 16))
    )
    .replace(/&([a-z]+);/gi, (m, n) => ENTITIES[n.toLowerCase()] ?? m);
}

function toText(html: string) {
  return decode(html.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

/** Posts open with a byline ("By Dr. Saanvi Gupta … QUICK ANSWER"); keep the answer. */
function cleanExcerpt(html: string, max = 150) {
  let t = toText(html).replace(/\[…\]|\[\.\.\.\]/g, "");
  const qa = t.search(/quick answer/i);
  if (qa >= 0) t = t.slice(qa + "quick answer".length).trim();
  if (t.length > max) t = t.slice(0, t.lastIndexOf(" ", max)) + "…";
  return t;
}

/** Map links to the old site onto this site's pages. */
function rewriteHref(href: string) {
  const m = href.match(
    /^(?:https?:\/\/(?:www\.)?thesaanvigupta\.com)?\/blog\/([a-z0-9-]+)\.html\/?$/i
  );
  if (m) return `/blog/${m[1]}`;
  const pages: Record<string, string> = {
    "contact.html": "/contact",
    "about.html": "/about",
    "achievement.html": "/achievements",
    "media.html": "/media",
    "blog.html": "/achievements#blog",
  };
  const p = href.match(
    /^https?:\/\/(?:www\.)?thesaanvigupta\.com\/?([a-z-]+\.html)?\/?$/i
  );
  if (p) return pages[p[1] ?? ""] ?? "/";
  return href;
}

/** Strip unsafe markup and reshape WordPress output for our article styles. */
function cleanContent(html: string) {
  let h = html
    // unsafe / unwanted elements and attributes
    .replace(/<(script|style|iframe|object|embed|form)[\s\S]*?<\/\1>/gi, "")
    .replace(/<(script|iframe|object|embed|input|button)[^>]*\/?>/gi, "")
    .replace(/\son[a-z]+\s*=\s*(".*?"|'.*?'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, "")
    .replace(/\s(width|height|style|class|id)="[^"]*"/gi, "")
    // the byline paragraph is shown in our own header
    .replace(/^\s*<p>\s*By\s+<strong>[\s\S]*?<\/p>/i, "")
    // empty paragraphs
    .replace(/<p>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "");

  // "QUICK ANSWER" single-cell table → highlighted callout
  h = h.replace(
    /<table>\s*<tbody>\s*<tr>\s*<td>\s*(?:<p>)?\s*<strong>\s*QUICK ANSWER\s*<\/strong>\s*(?:<\/p>)?([\s\S]*?)<\/td>\s*<\/tr>\s*<\/tbody>\s*<\/table>/i,
    '<aside class="quick-answer"><p class="qa-label">Quick answer</p>$1</aside>'
  );

  // scrollable tables on small screens
  h = h.replace(/<table>/gi, '<div class="table-wrap"><table>');
  h = h.replace(/<\/table>/gi, "</table></div>");

  // links: internal → this site, external → new tab
  h = h.replace(
    /<a\s+([^>]*?)href="([^"]+)"([^>]*)>/gi,
    (_, pre, href, post) => {
      const to = rewriteHref(href);
      const external = /^https?:\/\//i.test(to);
      const rest = `${pre}${post}`.replace(/\s(target|rel)="[^"]*"/gi, "");
      return external
        ? `<a ${rest} href="${to}" target="_blank" rel="noopener noreferrer">`
        : `<a ${rest} href="${to}">`;
    }
  );

  // lazy-load images from the post body
  h = h.replace(/<img\s/gi, '<img loading="lazy" ');

  return h.trim();
}

function toPost(p: WpPost): BlogPost {
  const media = p._embedded?.["wp:featuredmedia"]?.[0];
  const sizes = media?.media_details?.sizes;
  const og = p.yoast_head_json?.og_image?.[0];
  const category = p._embedded?.["wp:term"]
    ?.flat()
    .find((t) => t.taxonomy === "category" && t.name !== "Uncategorized");

  // best available image, with its natural size
  const pick = sizes?.large ?? sizes?.medium_large;
  let image: string | undefined;
  let w: number | undefined;
  let h: number | undefined;
  if (pick) {
    ({ source_url: image, width: w, height: h } = pick);
  } else if (media?.source_url) {
    image = media.source_url;
    w = media.media_details?.width;
    h = media.media_details?.height;
  } else if (og?.url) {
    ({ url: image, width: w, height: h } = og);
  }

  return {
    id: p.id,
    slug: p.slug,
    title: decode(p.title.rendered),
    excerpt: cleanExcerpt(p.excerpt.rendered),
    date: p.date,
    image,
    imageSize: w && h ? { width: w, height: h } : undefined,
    category: category?.name,
  };
}

/** Give each h2 an id and collect them for the table of contents. */
function addHeadingIds(html: string) {
  const toc: { id: string; text: string }[] = [];
  const used = new Set<string>();
  const out = html.replace(/<h2>([\s\S]*?)<\/h2>/gi, (_, inner) => {
    const text = toText(inner);
    let id =
      text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 60) || "section";
    while (used.has(id)) id += "-2";
    used.add(id);
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
}

/* ───────────── API ───────────── */

export async function getLatestPosts(count = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${WP_API}/posts?per_page=${count}&_embed=wp:featuredmedia,wp:term`,
      { next: { revalidate: REVALIDATE } }
    );
    if (!res.ok) return [];
    return ((await res.json()) as WpPost[]).map(toPost);
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<BlogArticle | null> {
  if (!/^[a-z0-9-]+$/i.test(slug)) return null;
  try {
    const res = await fetch(
      `${WP_API}/posts?slug=${slug}&_embed=wp:featuredmedia,wp:term`,
      { next: { revalidate: REVALIDATE } }
    );
    if (!res.ok) return null;
    const [p] = (await res.json()) as WpPost[];
    if (!p?.content) return null;
    const { html, toc } = addHeadingIds(cleanContent(p.content.rendered));
    const words = toText(html).split(" ").length;
    return {
      ...toPost(p),
      modified: p.modified,
      html,
      toc,
      readMinutes: Math.max(1, Math.round(words / 200)),
    };
  } catch {
    return null;
  }
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
