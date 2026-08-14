import Link from "next/link";
import { jsonLd, webPageSchema } from "@/lib/seo";

interface Crumb {
  name: string;
  path: string; // caminho absoluto ex.: "/como-funciona"
}

/**
 * Breadcrumbs automáticos + Schema.org BreadcrumbList.
 * Uso: <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: "Título", path: "" }]} />
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const fullItems: Crumb[] = [{ name: "Início", path: "/" }, ...items];

  const schema = webPageSchema({
    title: items[items.length - 1]?.name ?? "",
    description: "",
    path: items[items.length - 1]?.path ?? "/",
    breadcrumbs: fullItems.slice(1),
  });

  return (
    <nav aria-label="Trilha de navegação (breadcrumb)" className="text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-textMuted">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <span aria-hidden="true" className="text-textMuted/50">
                  /
                </span>
              )}
              {isLast || !item.path ? (
                <span className="text-text" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-text">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
