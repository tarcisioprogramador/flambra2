import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { BLOG_POSTS } from "@/content/blog/posts";

/**
 * Sitemap automático (SEO programático):
 * inclui todas as páginas estáticas + artigos do blog + categorias.
 * Novas páginas/artigos entram automaticamente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number; changefreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changefreq: "weekly" },
    { path: "/como-funciona", priority: 0.9, changefreq: "monthly" },
    { path: "/ganhar-dinheiro", priority: 0.9, changefreq: "monthly" },
    { path: "/indicar", priority: 0.9, changefreq: "monthly" },
    { path: "/cadastro", priority: 0.9, changefreq: "monthly" },
    { path: "/perguntas-frequentes", priority: 0.7, changefreq: "monthly" },
    { path: "/sobre", priority: 0.5, changefreq: "yearly" },
    { path: "/contato", priority: 0.5, changefreq: "yearly" },
    { path: "/termos-de-uso", priority: 0.2, changefreq: "yearly" },
    { path: "/politica-de-privacidade", priority: 0.2, changefreq: "yearly" },
    { path: "/blog", priority: 0.8, changefreq: "weekly" },
  ];

  const categories = ["como-comecar", "indicacao", "renda-extra"].map((categoria) => ({
    url: `${SITE_URL}/blog/categoria/${categoria}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const posts = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: now,
      changeFrequency: page.changefreq,
      priority: page.priority,
    })),
    ...categories,
    ...posts,
  ];
}
