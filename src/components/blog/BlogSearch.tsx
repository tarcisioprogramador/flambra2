"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BLOG_CATEGORIES, BLOG } from "@/lib/constants";
import { trackBlogSearch } from "@/lib/analytics";

/**
 * Busca do blog: atualiza ?q= na URL (SEO-friendly, compartilhável)
 * e filtra artigos no servidor via searchParams.
 */
export function BlogSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [debounced, setDebounced] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debounced === (searchParams.get("q") ?? "")) return;
    const params = new URLSearchParams(searchParams.toString());
    if (debounced) {
      params.set("q", debounced);
      trackBlogSearch(debounced);
    } else {
      params.delete("q");
    }
    const qs = params.toString();
    router.replace(qs ? `${BLOG.path}?${qs}` : BLOG.path, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  const activeCategory = searchParams.get("categoria");

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-sm">
        <label htmlFor="blog-search" className="sr-only">
          Buscar artigos no blog
        </label>
        <svg
          className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-textMuted"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
        </svg>
        <input
          id="blog-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar artigos…"
          className="w-full rounded-xl border border-white/10 bg-surface py-3 pl-11 pr-4 text-text placeholder:text-textMuted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <nav aria-label="Categorias do blog" className="flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            !activeCategory
              ? "bg-primary text-white"
              : "border border-white/10 bg-surface text-textMuted hover:text-text"
          }`}
        >
          Todos
        </Link>
        {BLOG_CATEGORIES.map((category) => (
          <Link
            key={category.slug}
            href={`/blog?categoria=${category.slug}`}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category.slug
                ? "bg-primary text-white"
                : "border border-white/10 bg-surface text-textMuted hover:text-text"
            }`}
          >
            {category.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
