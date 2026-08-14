# 🔍 Auditoria SEO Final — Flambra

Auditoria executada como Arquiteto de SEO Sênior após a implementação.
Checklist de 20 itens → status → evidência.

| # | Verificação | Status | Evidência |
|---|-------------|--------|-----------|
| 1 | Todas as páginas possuem Title único | ✅ | 14 páginas + 10 artigos + 3 categorias, titles únicos via `buildPageMetadata` |
| 2 | Páginas importantes possuem Description | ✅ | Todas as páginas de conversão e artigos têm description própria |
| 3 | Somente um H1 por página | ✅ | `grep "<h1"` = 1 em todas as páginas testadas (Home, artigos, institucionais) |
| 4 | Headings hierarquizados | ✅ | H1 → H2 → H3 sem pulos (componentes `SectionHeading`, `PageHero`, `ArticleContent`) |
| 5 | URLs amigáveis | ✅ | `/como-funciona`, `/ganhar-dinheiro`, `/blog/slug-seo`, `/blog/categoria/x` |
| 6 | Canonical presente | ✅ | `rel="canonical"` em todas as páginas (via `alternates.canonical`) |
| 7 | Sitemap presente | ✅ | `/sitemap.xml` — 25 URLs (11 estáticas + 3 categorias + 10 artigos + home) |
| 8 | robots.txt presente | ✅ | `/robots.txt` com Allow, Disallow de /api e sitemap |
| 9 | Google consegue rastrear | ✅ | Todas as páginas `index,follow`; apenas 404 tem `noindex` |
| 10 | Sem conteúdo duplicado | ✅ | Canonical único por URL; sem páginas artificiais; sem texto oculto |
| 11 | Sem links quebrados | ✅ | Todas as rotas internas testadas (200); 404 apenas em rota inexistente |
| 12 | Blog com estrutura de clusters | ✅ | 3 clusters (Como Começar, Indicação, Renda Extra) com pillar + suporte |
| 13 | Links internos estratégicos | ✅ | Relacionados (3/artigo), CTAs inline, breadcrumbs, interlinking páginas ↔ blog |
| 14 | Imagens com alt | ✅ | Todas as imagens (`next/image`) com `alt` descritivo; SVGs do blog com alt |
| 15 | Schema.org apropriado | ✅ | Organization + WebSite (global), WebPage + BreadcrumbList, Article, FAQPage |
| 16 | Site rápido | ✅ | 100% SSG (34/34 estáticas), fontes com `display: swap`, imagens lazy + otimizadas, JS client mínimo |
| 17 | Site responsivo | ✅ | Breakpoints sm/md/lg/xl; sem overflow horizontal; menu mobile próprio |
| 18 | Site acessível (WCAG) | ✅ | Skip link, labels, aria-expanded/controls, focus-visible, contraste, `prefers-reduced-motion` |
| 19 | CTAs funcionando | ✅ | 34 CTAs auditados (docs/CTA-AUDIT.md) |
| 20 | CTAs de cadastro/ganho → link de indicação | ✅ | Todos via `REFERRAL_URL` (única fonte em `constants.ts`) |

---

## Observações de SEO para a próxima etapa

1. **Dominio próprio**: `SITE_URL` aponta para `flambra-site.vercel.app`. Trocar para o domínio
   oficial em `constants.ts` + env antes do lançamento.
2. **Search Console / Bing Webmaster**: submeter sitemap após o deploy.
3. **Verificação Google**: preencher `verification.google` no `layout.tsx`.
4. **GA4 + GTM**: definir IDs reais em `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_GTM_ID`.
5. **EEAT / Local SEO**: a página Sobre já tem localização (Goiânia/GO) e Organization Schema
   com endereço; adicionar página de contato com mapa quando houver endereço físico oficial.
6. **SEO para IA (AEO)**: FAQPage + respostas diretas nos artigos e respostas curtas no topo
   (already: hero responde "o que é", artigos abrem com resposta direta). Reforçar com
   seções "resposta rápida" no futuro.
7. **Core Web Vitals**: medir com Lighthouse no domínio final; monitorar LCP (hero estático, sem
   imagens grandes → LCP deve ser o título/h1, rápido).
