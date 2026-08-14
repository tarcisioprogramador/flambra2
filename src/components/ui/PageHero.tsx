import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeroProps {
  title: string;
  description: string;
  crumbs: { name: string; path: string }[];
  eyebrow?: string;
}

/** Hero padrão de páginas internas: breadcrumbs + H1 único + descrição. */
export function PageHero({ title, description, crumbs, eyebrow }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-primary/10 via-surface to-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <Breadcrumbs items={crumbs} />
        {eyebrow && (
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-textMuted">{description}</p>
      </div>
    </section>
  );
}
