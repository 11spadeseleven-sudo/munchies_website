import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://munchies.dreamincolor.co.za";
  const paths = [
    "",
    "/how-it-works",
    "/sell",
    "/trust-safety",
    "/contact",
    "/privacy",
    "/terms",
    "/refunds",
    "/delivery",
    "/seller-terms",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
