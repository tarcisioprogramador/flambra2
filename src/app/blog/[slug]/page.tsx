import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { BlogReadTracker } from "@/components/blog/BlogReadTracker";
import { CTAButton } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildPageMetadata, articleSchema, faqSchema, jsonLd } from "@/lib/seo";
import { BLOG, SITE_NAME } from "@/lib/constants";
import {
  BLOG_POSTS,
  getPostBySlug,
  getRelatedPosts,
  getCategoryLabel,
} from "@/content/blog/posts";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `${BLOG.path}/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
    section: getCategoryLabel(post.category),
    images: [
      {
        url: post.featuredImage,
        width: 1200,
        height: 630,
        alt: post.imageAlt,
      },
    ],
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const articlePath = `${BLOG.path}/${post.slug}`;
  const publishedDate = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const updatedDate = new Date(post.updatedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <BlogReadTracker slug={post.slug} />

      {/* Schema.org Article + FAQ (quando aplicável) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            articleSchema({
              title: post.title,
              description: post.description,
              path: articlePath,
              image: post.featuredImage,
              publishedTime: post.publishedAt,
              modifiedTime: post.updatedAt,
              authorName: post.author,
              section: getCategoryLabel(post.category),
            })
          ),
        }}
      />
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(post.faqs)) }}
        />
      )}

      {/* Header do artigo */}
      <header className="border-b border-white/10 bg-gradient-to-b from-primary/10 via-surface to-background">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Blog", path: BLOG.path },
              { name: getCategoryLabel(post.category), path: `/blog/categoria/${post.category}` },
              { name: post.title, path: articlePath },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-textMuted">
            <Link
              href={`/blog/categoria/${post.category}`}
              className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white"
            >
              {getCategoryLabel(post.category)}
            </Link>
            <span>Por {post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{publishedDate}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} min de leitura</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-text sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-textMuted">{post.description}</p>
        </div>
      </header>

      {/* Imagem destacada */}
      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={post.featuredImage}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <ArticleContent blocks={post.content} />

        {/* CTA final do artigo */}
        <div className="mt-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface p-8 text-center">
          <h2 className="text-xl font-bold text-text">Coloque em prática hoje</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-textMuted">
            Crie sua conta gratuita na {SITE_NAME} e comece a ganhar dinheiro gravando suas tarefas.
          </p>
          <div className="mt-5">
            <CTAButton ctaType="cadastro" location="artigo-final">
              Quero começar a ganhar
            </CTAButton>
          </div>
        </div>

        {/* Data de atualização */}
        <p className="mt-8 text-xs text-textMuted/70">
          Última atualização: {updatedDate}
        </p>

        <RelatedArticles posts={related} />
      </article>
    </>
  );
}
