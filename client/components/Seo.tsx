import React from "react";

export type SeoProps = {
  title: string;
  description: string;
  image?: string;
  canonicalPath?: string; // e.g. "/gtm"
  robots?: string; // e.g. "index, follow" or "noindex, nofollow"
};

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function upsertLink(rel: string, href: string) {
  let link = document.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export const Seo: React.FC<SeoProps> = ({ title, description, image, canonicalPath }) => {
  React.useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = canonicalPath ? `${origin}${canonicalPath}` : origin || "/";

    document.title = title;

    upsertMeta("meta[name='description']", { name: "description", content: description });
    upsertMeta("meta[name='robots']", { name: "robots", content: robots || "index, follow" });

    // Open Graph
    upsertMeta("meta[property='og:title']", { property: "og:title", content: title });
    upsertMeta("meta[property='og:description']", { property: "og:description", content: description });
    upsertMeta("meta[property='og:type']", { property: "og:type", content: "website" });
    upsertMeta("meta[property='og:url']", { property: "og:url", content: url });
    if (image) {
      upsertMeta("meta[property='og:image']", { property: "og:image", content: image });
    }

    // Twitter
    upsertMeta("meta[name='twitter:card']", { name: "twitter:card", content: image ? "summary_large_image" : "summary" });
    upsertMeta("meta[name='twitter:title']", { name: "twitter:title", content: title });
    upsertMeta("meta[name='twitter:description']", { name: "twitter:description", content: description });
    if (image) upsertMeta("meta[name='twitter:image']", { name: "twitter:image", content: image });

    // Canonical
    upsertLink("canonical", url);
  }, [title, description, image, canonicalPath]);

  return null;
};

export default Seo;
