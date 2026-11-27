import Reveal from "@/components/Reveal";
import BlogCard from "@/components/BlogCard";
import { Heading } from "@/components/landing/Ornament";
import { getLatestPosts } from "@/lib/blog";

/** Latest three articles from Saanvi's blog. Renders nothing if the blog can't be reached. */
export default async function BlogSection() {
  const posts = await getLatestPosts(3);
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="paper relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Heading
          eyebrow="From the blog"
          title="Latest"
          script="insights & guides"
          sub="Practical articles by Saanvi on Vastu, astrology and numerology."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="h-full">
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
