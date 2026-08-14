import { Suspense } from "react";
import Link from "next/link";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { BlogCard } from "@/components/blog/BlogCard";
import { PageHero } from "@/components/ui/PageHero";
import { CTAButton } from "@/components/ui/Button";
import { buildPageMetadata, webPageSchema, jsonLd } from "@/lib/seo";
import { BLOG, BLOG_CATEGORIES } from "@/lib/constants";
import { BLOG_POSTS, getPostsByCategory } from "@/content/blog/posts";

export const metadata = buildPageMetadata({
  title: BLOG.title,
  description:
    "Dicas práticas para ganhar dinheiro gravando tarefas do dia a dia, entender o programa e aumentar suas indicações. Artigos originais e objetivos.",
  path: BLOG.path,
  keywords: ["blog", "dicas", "renda extra", "gravar tarefas", "indicação"],
});

interface BlogIndexProps {
  searchParams: Promise<{ q?: string; categoria?: string }>;
}

export default async function BlogIndexPage({ searchParams }: BlogIndexProps) {
  const { q = "", categoria = "" } = await searchParams;
  const normalizedQuery = q.trim().toLowerCase();

  const categoryPosts = categoria ? getPostsByCategory(categoria) : BLOG_POSTS;

  const filtered = normalizedQuery
    ? categoryPosts.filter((post) => {
        const haystack = `${post.title} ${post.description} ${post.excerpt} ${post.keywords.join(" ")}`.toLowerCase();
        return normalizedQuery
          .split(/\s+/)
          .every((term) => haystack.includes(term));
      })
    : categoryPosts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: BLOG.title,
              description: BLOG.description,
              path: BLOG.path,
              breadcrumbs: [{ name: "Blog", path: BLOG.path }],
            })
          ),
        }}
      />
      <PageHero
        eyebrow="Blog"
        title="Aprenda a ganhar mais com a Flambra"
        description="Guias práticos, dicas de gravação e estratégias de indicação escritos para responder suas dúvidas reais."
        crumbs={[{ name: "Blog", path: BLOG.path }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="h-12" aria-hidden="true" />}>
          <BlogSearch />
        </Suspense>

        {/* Resultado da busca */}
        {normalizedQuery && (
          <p className="mt-8 text-sm text-textMuted" role="status">
            {filtered.length === 0
              ? `Nenhum artigo encontrado para "${q}". Tente outra palavra.`
              : `${filtered.length} artigo${filtered.length > 1 ? "s" : ""} encontrado${
                  filtered.length > 1 ? "s" : ""
                } para "${q}".`}
          </p>
        )}

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-surface p-10 text-center">
            <p className="text-textMuted">Nenhum artigo encontrado.</p>
            <Link
              href="/blog"
              className="mt-4 inline-block font-semibold text-primary hover:text-primary/80"
            >
              Ver todos os artigos
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, index) => (
              <BlogCard key={post.slug} post={post} priority={index < 3} />
            ))}
          </div>
        )}

        {/* Categorias explicadas */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3" aria-label="Categorias do blog">
          {BLOG_CATEGORIES.map((cat) => {
            const count = getPostsByCategory(cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/blog/categoria/${cat.slug}`}
                className="group rounded-2xl border border-white/10 bg-surface p-6 transition-all hover:border-primary/40"
              >
                <h3 className="font-semibold text-text transition-colors group-hover:text-primary">
                  {cat.label}
                </h3>
                <p className="mt-2 text-sm text-textMuted">{cat.description}</p>
                <p className="mt-4 text-xs font-medium text-primary">
                  {count} artigo{count > 1 ? "s" : ""} →
                </p>
              </Link>
            );
          })}
        </div>

        {/* CTA de conversão */}
        <div className="mt-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface p-10 text-center">
          <h2 className="text-2xl font-bold text-text">Pronto para colocar em prática?</h2>
          <p className="mx-auto mt-3 max-w-lg text-textMuted">
            Leia, aprenda e comece: o cadastro é gratuito e suas primeiras gravações podem sair hoje.
          </p>
          <div className="mt-6">
            <CTAButton ctaType="cadastro" location="blog-index">
              Quero começar a ganhar
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
