// composables/seoConfig.ts
import type { UseHeadInput, UseSeoMetaInput } from "@unhead/vue";

const DEFAULT_TITLE = "Your Site | Your site description";
const DEFAULT_DESCRIPTION = "Your site description.";
const DEFAULT_IMAGE_URL = "https://example.com/your-site-hero.png";
const DEFAULT_URL = "https://www.yoursite.com";
const DEFAULT_TWITTER_CARD: "summary" | "summary_large_image" | "app" | "player" = "summary_large_image";

export interface SeoConfig {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
}

export function generateSeoMeta({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  imageUrl = DEFAULT_IMAGE_URL,
  url = DEFAULT_URL,
  twitterCard = DEFAULT_TWITTER_CARD,
}: SeoConfig): UseSeoMetaInput {
  return {
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: imageUrl,
    ogUrl: url,
    twitterCard,
  };
}

export function generateHeadConfig({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  imageUrl = DEFAULT_IMAGE_URL,
  url = DEFAULT_URL,
  twitterCard = DEFAULT_TWITTER_CARD,
}: SeoConfig): UseHeadInput {
  return {
    title,
    titleTemplate: (pageTitle?: string) => (pageTitle ? `${pageTitle} | Your Site` : "Your Site"),
    base: { href: "/" },
    link: [
      // favicon.ico
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "canonical", href: url },
    ],
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: imageUrl },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: twitterCard },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    script: [
      // { src: "https://analytics.example.com/script.js", async: true, defer: true },
    ],
    noscript: [
      { children: "Your browser does not support JavaScript or it is disabled." },
    ],
    htmlAttrs: { lang: "en" },
  };
}
