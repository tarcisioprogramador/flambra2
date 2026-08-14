import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { PageHero } from "@/components/ui/PageHero";
import { CTAButton } from "@/components/ui/Button";
import { buildPageMetadata, webPageSchema, jsonLd } from "@/lib/seo";
import { BLOG, BLOG_CATEGORIES } from "@/lib/constants";
import { getPostsByCategory } from "@/content/blog/posts";

interface CategoryPageProps {
  params: Promise<{ categoria: string }>;
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { categoria } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === categoria);
  if (!category) return {};
  return buildPageMetadata({
    title: `${category.label} - Blog`,
    description: category.description,
    path: `/blog/categoria/${categoria}`,
    keywords: [category.label, "blog", "dicas"],
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoria } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === categoria);
  if (!category) notFound();

  const posts = getPostsByCategory(categoria);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: `${category.label} - Blog`,
              description: category.description,
              path: `/blog/categoria/${categoria}`,
              breadcrumbs: [
                { name: "Blog", path: BLOG.path },
                { name: category.label, path: `/blog/categoria/${categoria}` },
              ],
            })
          ),
        }}
      />
      <PageHero
        eyebrow="Categoria"
        title={category.label}
        description={category.description}
        crumbs={[
          { name: "Blog", path: BLOG.path },
          { name: category.label, path: `/blog/categoria/${categoria}` },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((cat) => (
            <a
              key={cat.slug}
              href={`/blog/categoria/${cat.slug}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                cat.slug === categoria
                  ? "bg-primary text-white"
                  : "border border-white/10 bg-surface text-textMuted hover:text-text"
              }`}
            >
              {cat.label}
            </a>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface p-10 text-center">
          <h2 className="text-2xl font-bold text-text">
            Aprendeu algo novo? Coloque em prática.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-textMuted">
            Crie sua conta gratuita e comece a gravar suas primeiras tarefas hoje mesmo.
          </p>
          <div className="mt-6">
            <CTAButton ctaType="cadastro" location={`categoria-${categoria}`}>
              Quero começar a ganhar
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
