import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/siteConfig";

const staticRoutes = [
  "",
  "/areas-de-atuacao",
  "/areas-de-atuacao/previdenciario",
  "/areas-de-atuacao/civil",
  "/sobre",
  "/depoimentos",
  "/faq",
  "/contato",
  "/blog",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? undefined,
  }));

  return [...staticEntries, ...postEntries];
}
