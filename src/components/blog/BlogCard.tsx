import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/content/blog/posts";
import { getCategoryLabel } from "@/content/blog/posts";
import { BLOG } from "@/lib/constants";

export function BlogCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
      <Link
        href={`${BLOG.path}/${post.slug}`}
        className="relative block aspect-[16/9] overflow-hidden"
        aria-label={`Ler artigo: ${post.title}`}
      >
        <Image
          src={post.featuredImage}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {getCategoryLabel(post.category)}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-textMuted">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} min de leitura</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-text transition-colors group-hover:text-primary">
          <Link href={`${BLOG.path}/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-textMuted">{post.excerpt}</p>
        <Link
          href={`${BLOG.path}/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          aria-label={`Ler artigo completo: ${post.title}`}
        >
          Ler artigo
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
