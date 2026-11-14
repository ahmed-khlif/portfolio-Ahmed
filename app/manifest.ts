import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.authorName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#0f1115",
    icons: [
      {
        src: "/icon.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    categories: [
      "portfolio",
      "software engineering",
      "artificial intelligence",
      "web development",
      "devops",
      "developer",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
