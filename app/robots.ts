import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://bewerbung-jugendbeirat.vercel.app/sitemap.xml",
  };
}
