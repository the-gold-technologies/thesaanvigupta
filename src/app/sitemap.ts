import type { MetadataRoute } from "next";
import { serviceHref, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/vastu-coaching",
    "/media",
    "/achievements",
    ...services.map(serviceHref),
  ];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
