import { CTAButton } from "@/components/ui/Button";
import type { ContentBlock } from "@/content/blog/posts";

/**
 * Renderiza os blocos de conteúdo do artigo com hierarquia de
 * headings correta (h2/h3) e CTAs de conversão inline.
 */
export function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p key={index} className="leading-relaxed text-textMuted">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2 key={index} className="pt-4 text-2xl font-bold text-text">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="pt-2 text-xl font-semibold text-text">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={index} className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-textMuted">
                    <span className="mt-1.5 text-primary" aria-hidden="true">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="space-y-3">
                {block.items.map((item, itemIndex) => (
                  <li key={item} className="flex items-start gap-3 text-textMuted">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      {itemIndex + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="rounded-r-xl border-l-4 border-primary bg-surface p-6 text-lg font-medium italic text-text"
              >
                “{block.text}”
              </blockquote>
            );
          case "cta":
            return (
              <div
                key={index}
                className="my-2 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface p-8 text-center"
              >
                {block.text && <p className="text-text">{block.text}</p>}
                <div className="mt-4">
                  <CTAButton ctaType={block.ctaType} location={`artigo-${block.ctaType}`}>
                    {block.label ?? "Quero começar agora"}
                  </CTAButton>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
