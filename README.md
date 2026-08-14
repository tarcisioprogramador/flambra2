# Flambra — Site Institucional

Recriação do site institucional da **Flambra** (app.flambra.com): plataforma que paga
para gravar tarefas do dia a dia com o celular, usadas no treinamento de IA/robôs.
Projeto pronto para **SEO**, **conversão** (link de indicação centralizado) e **analytics** (GA4/GTM).

## 🚀 Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tema dark com a paleta da marca em `constants.ts`)
- 100% **SSG** (34 rotas estáticas) → performance e SEO
- Zero dependências extras além do Next/React

## 📁 Arquitetura

```
src/
├── app/                        # Rotas (App Router)
│   ├── page.tsx                # Home (hero, números, passos, transparência, indicação, FAQ, blog)
│   ├── layout.tsx              # Metadata global, Schema.org, GA4/GTM condicional, skip link
│   ├── sitemap.ts              # sitemap.xml automático (25 URLs)
│   ├── robots.ts               # robots.txt
│   ├── manifest.ts             # PWA manifest
│   ├── icon.svg                # Favicon da marca
│   ├── opengraph-image.tsx     # OG image dinâmica (1200x630)
│   ├── twitter-image.tsx       # Twitter Card image
│   ├── not-found.tsx           # 404 customizado
│   ├── como-funciona/          # Passo a passo + validação
│   ├── ganhar-dinheiro/        # Cenários de ganho (tabela) + formas de ganhar
│   ├── indicar/                # Programa de indicação
│   ├── cadastro/               # Página de cadastro (CTA único)
│   ├── perguntas-frequentes/   # FAQ completa (Schema FAQPage)
│   ├── sobre/                  # Missão, valores
│   ├── contato/                # Formulário validado (client)
│   ├── termos-de-uso/          # Documento legal
│   ├── politica-de-privacidade/# Documento legal (LGPD)
│   └── blog/
│       ├── page.tsx            # Index + busca (?q=) + filtro (?categoria=)
│       ├── [slug]/             # Artigo (Schema Article, relacionados, CTAs)
│       └── categoria/[categoria]/  # Listagem por categoria
├── components/
│   ├── layout/                 # Header (menu mobile) + Footer (mapa de links)
│   ├── ui/                     # Button/CTAButton, Breadcrumbs, FAQAccordion,
│   │                           # CTASection, PageHero, SectionHeading, ContactForm
│   └── blog/                   # BlogCard, BlogSearch, RelatedArticles, ArticleContent
├── content/
│   ├── blog/posts.ts           # 10 artigos originais (clusters) — dados tipados
│   └── faq.ts                  # FAQ por categoria
└── lib/
    ├── constants.ts            # ⭐ TODA a configuração centralizada (link de indicação!)
    ├── seo.ts                  # buildPageMetadata + builders JSON-LD
    └── analytics.ts            # trackEvent / trackCtaClick (GA4 + GTM)
```

## ⭐ Link de indicação (NÃO espalhar pelo código)

Todos os CTAs de **cadastro / indicação / ganhar dinheiro** usam o componente `CTAButton`,
que lê de **uma única fonte**: `REFERRAL_URL` em `src/lib/constants.ts`.

```ts
// src/lib/constants.ts (linha ~14)
export const REFERRAL_URL = "https://app.flambra.com/ref=D3D5653DFF&cadastro=1";
```

**Para trocar o link: altere apenas essa linha.** A auditoria completa está em `docs/CTA-AUDIT.md`.

## ▶️ Rodando o projeto

```bash
npm install
npm run dev        # desenvolvimento
npm run build      # build de produção
npm run start      # serve o build
npm run lint       # ESLint
```

## 📊 Analytics (GA4 + GTM)

Estrutura pronta em `src/lib/analytics.ts` + `layout.tsx`. Sem credenciais, **nada é carregado**.

```bash
cp .env.example .env.local
# Preencha:
# NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Eventos rastreados: `cta_click` (tipo/label/local), `page_view`, `signup_click`,
`referral_click`, `blog_search`, `blog_read`, `faq_open`, `contact_submit`.

## 📚 Documentação

| Documento | Conteúdo |
|---|---|
| `docs/CTA-AUDIT.md` | Matriz dos 34 CTAs (nome, página, seção, URL, acessibilidade, tracking) |
| `docs/CONTENT-STRATEGY.md` | Palavra-chave → intenção → página, clusters e interlinking |
| `docs/QA-REPORT.md` | Testes QA: resultado, problema e correção |
| `docs/SEO-AUDIT.md` | Auditoria final (20 itens) |

## ⚠️ Antes do lançamento

1. Trocar `SITE_URL` para o domínio oficial (constants.ts).
2. Substituir CNPJ/WhatsApp placeholders em `COMPANY_INFO`.
3. Definir IDs de GA4/GTM e verificação do Search Console.
4. Conectar o formulário de contato a um serviço de e-mail.
