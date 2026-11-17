import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/contact", ...services.map((s) => `/services/${s.slug}`)];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
