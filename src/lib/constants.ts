// ============================================================
// FLAMBRA - CONFIGURAÇÕES CENTRALIZADAS
// ------------------------------------------------------------
// REGRA: NUNCA espalhe o link de indicação pelo código.
// Sempre importe REFERRAL_URL deste arquivo.
// Para trocar o link, altere APENAS esta linha.
// ============================================================

// ------------------------------------------------------------
// LINK DE INDICAÇÃO - CONFIGURAÇÃO PRINCIPAL
// ------------------------------------------------------------
// Todo CTA de cadastro/indicação/ganhar dinheiro aponta para cá.
// Formato: https://app.flambra.com/ref=SEU_CODIGO&cadastro=1
export const REFERRAL_URL = "https://app.flambra.com/?ref=D3D5653DFF&cadastro=1";

// ------------------------------------------------------------
// IDENTIDADE DO SITE
// ------------------------------------------------------------
export const SITE_URL = "https://flambra.app";
export const SITE_NAME = "Flambra";
export const SITE_TAGLINE = "Ganhe dinheiro gravando tarefas do dia a dia";
export const SITE_DESCRIPTION =
  "Grave tarefas reais da sua rotina com o celular, ajude a treinar a próxima geração de robôs e receba até R$ 25 por hora aprovada.";
export const SITE_LOCALE = "pt_BR";
export const SITE_LANG = "pt-BR";
export const SITE_KEYWORDS = [
  "ganhar dinheiro",
  "ganhar dinheiro pelo celular",
  "gravar tarefas",
  "renda extra",
  "trabalho online",
  "trabalhar em casa",
  "treinar robôs",
  "inteligência artificial",
  "programa de indicação",
  "indicar e ganhar",
  "plataforma brasileira",
  "pix",
  "tarefas domésticas",
  "renda extra 2026",
] as const;

// ------------------------------------------------------------
// REDES SOCIAIS
// ------------------------------------------------------------
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/flambra.app/",
  linkedin: "https://br.linkedin.com/company/flambra",
} as const;

// ------------------------------------------------------------
// NAVEGAÇÃO PRINCIPAL
// ------------------------------------------------------------
export const NAV_ITEMS = [
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Ganhar Dinheiro", href: "/ganhar-dinheiro" },
  { label: "Indicar", href: "/indicar" },
  { label: "Blog", href: "/blog" },
  { label: "Perguntas Frequentes", href: "/perguntas-frequentes" },
  { label: "Sobre", href: "/sobre" },
] as const;

// ------------------------------------------------------------
// CTAs DO SITE
// ------------------------------------------------------------
// Todos os CTAs de conversão (cadastro/indicação/ganho) usam
// REFERRAL_URL. Apenas links de navegação interna ficam aqui.
export const CTAS = {
  // CTA principal - cadastro
  signup: {
    text: "Quero começar agora",
    url: REFERRAL_URL,
    type: "cadastro",
  },
  // CTA de indicação
  affiliate: {
    text: "Quero indicar e ganhar",
    url: REFERRAL_URL,
    type: "indicacao",
  },
  // CTA de ganho (payout)
  payout: {
    text: "Quero começar a ganhar",
    url: REFERRAL_URL,
    type: "cadastro",
  },
  // CTA de cadastro explícito
  register: {
    text: "Cadastre-se grátis",
    url: REFERRAL_URL,
    type: "cadastro",
  },
  // CTA secundário de cadastro
  secondarySignup: {
    text: "Criar minha conta",
    url: REFERRAL_URL,
    type: "cadastro",
  },
  // Login - mantém o fluxo do app
  login: {
    text: "Entrar",
    url: REFERRAL_URL,
    type: "login",
  },
} as const;

// ------------------------------------------------------------
// BLOG
// ------------------------------------------------------------
export const BLOG = {
  path: "/blog",
  title: "Blog da Flambra",
  description:
    "Dicas práticas para ganhar dinheiro gravando tarefas do dia a dia, entender o programa e aumentar suas indicações.",
} as const;

export const BLOG_CATEGORIES = [
  {
    slug: "como-comecar",
    label: "Como Começar",
    description:
      "Guias e tutoriais para quem está começando a ganhar dinheiro gravando tarefas.",
  },
  {
    slug: "indicacao",
    label: "Indicação",
    description:
      "Tudo sobre o programa de indicação: como funciona, como divulgar seu link e ganhar mais.",
  },
  {
    slug: "renda-extra",
    label: "Renda Extra",
    description:
      "Estratégias e dicas para aumentar seus ganhos e aproveitar melhor seu tempo.",
  },
] as const;

// ------------------------------------------------------------
// CORES (tema)
// ------------------------------------------------------------
export const COLORS = {
  primary: "#FF6B00",
  primaryHover: "#E85F00",
  secondary: "#1A1A2E",
  accent: "#00D4AA",
  background: "#0A0A14",
  surface: "#141428",
  surfaceLight: "#1C1C33",
  text: "#FFFFFF",
  textMuted: "#A0A0B0",
  border: "rgba(255,255,255,0.10)",
} as const;

// ------------------------------------------------------------
// INFORMAÇÕES DA EMPRESA
// ------------------------------------------------------------
export const COMPANY_INFO = {
  name: "Flambra",
  legalName: "Flambra Tecnologia LTDA",
  founded: 2022,
  location: "Goiânia, GO, Brasil",
  address: "Goiânia, Goiás, Brasil",
  cnpj: "59.524.963/0001-37",
  email: "contato@flambra.com",
  phone: "+552195934954",
  whatsapp: "+5521996936397",
  instagram: "https://www.instagram.com/flambra.app/",
  linkedin: "https://br.linkedin.com/company/flambra",
  offices: [
    {
      name: "Sede — Goiânia",
      city: "Goiânia",
      region: "GO",
      country: "BR",
      addressLocality: "Goiânia",
      description: "Sede administrativa da Flambra Tecnologia LTDA.",
    },
    {
      name: "Metropolitan Tokyo",
      city: "Tokyo",
      region: "Tokyo",
      country: "JP",
      addressLocality: "Metropolitan Tokyo",
      description: "Escritório de operações no Japão.",
    },
  ],
} as const;

// ------------------------------------------------------------
// VALORES DO PROGRAMA
// ------------------------------------------------------------
export const PROGRAM_VALUES = {
  hourlyRate: 25, // R$ por hora aprovada
  monthlyEstimate: 4500, // R$ estimativa mensal
  referralRate: 2.5, // % por indicação ativa
  currency: "BRL",
  payoutVia: "PIX",
  minHoursWeekly: 4, // horas mínimas sugeridas por semana
} as const;

// ------------------------------------------------------------
// ANALYTICS (Google Analytics 4 / Google Tag Manager)
// ------------------------------------------------------------
// Defina em .env.local (ou no painel da Vercel):
//   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
//   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
// Sem credenciais, os scripts não são carregados (sem erro em console).
export const ANALYTICS = {
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  // Eventos rastreados via dataLayer/gtag
  events: {
    ctaClick: "cta_click",
    pageView: "page_view",
    signupClick: "signup_click",
    referralClick: "referral_click",
    blogSearch: "blog_search",
    blogRead: "blog_read",
    faqOpen: "faq_open",
    contactSubmit: "contact_submit",
  } as const,
} as const;

// ------------------------------------------------------------
// CONTATO / FORMULÁRIOS
// ------------------------------------------------------------
export const CONTACT = {
  subject: "Fale com a Flambra",
  successMessage: "Mensagem enviada com sucesso! Em breve retornaremos.",
} as const;
