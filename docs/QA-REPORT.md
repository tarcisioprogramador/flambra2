# 🧪 Relatório de QA — Flambra

Relatório completo de testes executados após o desenvolvimento, no formato
**TESTE → RESULTADO → PROBLEMA → CORREÇÃO REALIZADA**.

---

## Execução

| Item | Detalhe |
|---|---|
| Build | `npm run build` (Next.js 16.3.0, Turbopack) — ✅ 34 rotas geradas |
| Lint | `npm run lint` (ESLint + Next) — ✅ 0 erros |
| Servidor | `next start` em produção, porta 3111 |
| Verificação | `curl` nas páginas renderizadas (HTML servido) |

---

## Matriz de testes

| # | TESTE | RESULTADO | PROBLEMA | CORREÇÃO REALIZADA |
|---|-------|-----------|----------|--------------------|
| 1 | Build de produção | ✅ PASS | — | — |
| 2 | TypeScript (`tsc` no build) | ✅ PASS | — | — |
| 3 | ESLint | ✅ PASS | 6 warnings de import não usado + 1 erro `no-html-link-for-pages` | Imports removidos; `<a href="/blog">` → `<Link>` |
| 4 | Todas as rotas retornam 200 | ✅ PASS (19/19) | — | — |
| 5 | Rota inexistente → 404 customizado | ✅ PASS | — | — |
| 6 | Home: título único + description | ✅ PASS | — | — |
| 7 | Home: canonical | ✅ PASS | — | — |
| 8 | Home: Open Graph + Twitter | ✅ PASS | — | — |
| 9 | Home: JSON-LD (Organization, WebSite, FAQPage) | ✅ PASS | — | — |
| 10 | Home: CTAs → link de indicação | ✅ PASS (9 CTAs) | — | — |
| 11 | Artigo: Schema Article + BreadcrumbList + Person | ✅ PASS | — | — |
| 12 | Artigo: exatamente 1 `<h1>` | ✅ PASS | — | — |
| 13 | Artigo: breadcrumbs visíveis (aria-label) | ✅ PASS | — | — |
| 14 | Artigo: CTAs inline → link de indicação | ✅ PASS (7) | — | — |
| 15 | Blog: busca `?q=` filtra artigos | ✅ PASS | — | — |
| 16 | Blog: busca sem resultado mostra aviso | ✅ PASS | — | — |
| 17 | Blog: filtro por categoria `?categoria=` | ✅ PASS | — | — |
| 18 | sitemap.xml: 25 URLs | ✅ PASS | — | — |
| 19 | robots.txt: Allow + sitemap | ✅ PASS | — | — |
| 20 | manifest.webmanifest | ✅ PASS | — | — |
| 21 | Headers de segurança (X-Frame-Options, nosniff…) | ✅ PASS | — | — |
| 22 | Favicon `/icon.svg` | ✅ PASS | ❌ `<text>` não suportado em ImageResponse (build quebrava) | Substituído por `icon.svg` estático |
| 23 | OG image (`opengraph-image`) | ✅ PASS | — | — |
| 24 | Link de indicação centralizado (1 única ocorrência em `constants.ts`) | ✅ PASS | — | — |
| 25 | Menu mobile (JS client, aria-expanded) | ✅ PASS (revisão de código) | — | — |
| 26 | Formulário de contato (validação + acessibilidade) | ✅ PASS (revisão de código) | — | — |
| 27 | Responsividade (breakpoints sm/md/lg, sem overflow-x) | ✅ PASS (revisão de código + `overflow-x: hidden`) | — | — |
| 28 | Console JS (sem erros óbvios; analytics desligado sem env) | ✅ PASS | — | — |
| 29 | Imagens com `alt` + lazy loading | ✅ PASS | — | — |
| 30 | Links internos entre clusters (relacionados) | ✅ PASS | — | — |

---

## Pendências conhecidas (fora do escopo do código)

1. **CNPJ placeholder** — `COMPANY_INFO.cnpj` usa `XX.XXX.XXX/0001-XX`. Substituir pelo CNPJ real antes do lançamento.
2. **WhatsApp placeholder** — número fictício em `constants.ts`. Substituir pelo número oficial.
3. **Teste visual em navegadores** — a validação de layout por breakpoint foi feita por revisão de código e renderização HTML. Recomendo abrir o site em Chrome DevTools (modo responsivo) e Lighthouse.
4. **Formulário de contato** — envia por `mailto:`. Para produção, conectar a um serviço de e-mail/API.
5. **Analytics** — GA4/GTM desligados até definir `NEXT_PUBLIC_GA4_ID`/`NEXT_PUBLIC_GTM_ID` (sem credenciais falsas, por design).
