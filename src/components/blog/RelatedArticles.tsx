import Link from "next/link";
import type { BlogPost } from "@/content/blog/posts";
import { BLOG } from "@/lib/constants";

/**
 * Artigos relacionados + links internos estratégicos (interlinking).
 * Aparecem ao final de cada artigo para aumentar tempo de leitura e
 * distribuir autoridade entre os clusters.
 */
export function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="artigos-relacionados" className="mt-14">
      <h2 id="artigos-relacionados" className="text-xl font-bold text-text sm:text-2xl">
        Artigos relacionados
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`${BLOG.path}/${post.slug}`}
            className="group rounded-xl border border-white/10 bg-surface p-5 transition-all hover:border-primary/40"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-primary">
              Continue lendo
            </span>
            <h3 className="mt-2 text-sm font-semibold leading-snug text-text transition-colors group-hover:text-primary">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-xs text-textMuted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
