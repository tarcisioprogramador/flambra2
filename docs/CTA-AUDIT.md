# 📋 Auditoria de CTAs — Flambra

**Link oficial de conversão (centralizado em `src/lib/constants.ts` → `REFERRAL_URL`):**

```
https://app.flambra.com/ref=D3D5653DFF&cadastro=1
```

> **Regra do projeto:** todo CTA de cadastro/indicação/ganho usa o componente
> `CTAButton`, que importa `REFERRAL_URL` de um único lugar. Para trocar o link,
> altere **apenas** `src/lib/constants.ts` linha 14.

---

## Matriz de auditoria

| # | Nome do botão | Página | Seção | URL atual | URL nova | Tipo de CTA | Funciona? | Acessibilidade | Rastreamento |
|---|---------------|--------|-------|-----------|----------|-------------|-----------|----------------|--------------|
| 1 | Quero começar agora | Home | Header (desktop) | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ aria-label + foco | ✅ `cta_click` + data-cta |
| 2 | Quero começar agora | Home | Header (mobile) | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ aria-label | ✅ |
| 3 | Quero começar agora | Home | Hero | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 4 | Como funciona | Home | Hero | `/como-funciona` | `/como-funciona` | link interno | ✅ | ✅ | ✅ `cta_click` (link) |
| 5 | Quero acompanhar meus resultados | Home | Transparência | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 6 | Quero indicar e ganhar | Home | Indicação | `REFERRAL_URL` | `REFERRAL_URL` | indicação | ✅ | ✅ | ✅ |
| 7 | Ver o passo a passo completo | Home | Como funciona | `/como-funciona` | `/como-funciona` | link interno | ✅ | ✅ | — |
| 8 | Ver todas as perguntas frequentes | Home | FAQ | `/perguntas-frequentes` | `/perguntas-frequentes` | link interno | ✅ | ✅ | — |
| 9 | Ver todos os artigos | Home | Blog | `/blog` | `/blog` | link interno | ✅ | ✅ | — |
| 10 | Quero começar agora | Home | CTA final | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 11 | Quero começar agora | Como Funciona | CTA final | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 12 | Ganhar dinheiro | Como Funciona | CTA final (secundário) | `/ganhar-dinheiro` | `/ganhar-dinheiro` | link interno | ✅ | ✅ | ✅ |
| 13 | Começar a gravar | Ganhar Dinheiro | Formas de ganhar | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 14 | Indicar e ganhar | Ganhar Dinheiro | Formas de ganhar | `REFERRAL_URL` | `REFERRAL_URL` | indicação | ✅ | ✅ | ✅ |
| 15 | Quero começar a ganhar | Ganhar Dinheiro | CTA final | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 16 | Ver como funciona | Ganhar Dinheiro | CTA final (secundário) | `/como-funciona` | `/como-funciona` | link interno | ✅ | ✅ | ✅ |
| 17 | Quero indicar e ganhar | Indicar | CTA final | `REFERRAL_URL` | `REFERRAL_URL` | indicação | ✅ | ✅ | ✅ |
| 18 | Dicas de divulgação | Indicar | CTA final (secundário) | `/blog/como-divulgar...` | `/blog/como-divulgar...` | link interno | ✅ | ✅ | ✅ |
| 19 | Cadastre-se grátis | Cadastro | Card principal | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 20 | Quero começar agora | Perguntas Frequentes | CTA final | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 21 | Falar com a equipe | Perguntas Frequentes | CTA final | `/contato` | `/contato` | link interno | ✅ | ✅ | ✅ |
| 22 | Quero começar agora | Sobre | CTA final | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 23 | Enviar mensagem | Contato | Formulário | (mailto) | (mailto) | formulário | ✅ | ✅ labels + erro | ✅ `contact_submit` |
| 24 | Quero começar a ganhar | Blog | Index (CTA) | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 25 | Quero começar a ganhar | Blog | Categoria (CTA) | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 26 | Ler artigo | Blog | Cards | `/blog/[slug]` | `/blog/[slug]` | link interno | ✅ | ✅ aria-label | — |
| 27 | Quero começar a ganhar | Blog | Artigo (CTA inline) | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 28 | Quero indicar e ganhar | Blog | Artigo (CTA inline) | `REFERRAL_URL` | `REFERRAL_URL` | indicação | ✅ | ✅ | ✅ |
| 29 | Quero começar a ganhar | Blog | Artigo (CTA final) | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 30 | Quero começar a ganhar | Footer | Barra de conversão | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 31 | Cadastre-se grátis | Footer | Conta | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |
| 32 | Quero indicar e ganhar | Footer | Conta | `REFERRAL_URL` | `REFERRAL_URL` | indicação | ✅ | ✅ | ✅ |
| 33 | Entrar | Header/Footer | Login | `REFERRAL_URL` | `REFERRAL_URL` | login | ✅ | ✅ | ✅ `cta_click` (login) |
| 34 | Quero começar a ganhar | 404 | Página não encontrada | `REFERRAL_URL` | `REFERRAL_URL` | cadastro | ✅ | ✅ | ✅ |

**Legenda:** `REFERRAL_URL` = `https://app.flambra.com/ref=D3D5653DFF&cadastro=1`

---

## Verificação automática

Ferramentas usadas na auditoria:

```bash
# 1. Garantir que app.flambra.com só aparece centralizado em constants.ts
grep -rn "app.flambra.com" src/ --include="*.tsx" --include="*.ts"

# 2. Contar CTAs de conversão na home renderizada
curl -s http://localhost:3111/ | grep -o 'href="https://app.flambra.com/ref=D3D5653DFF&amp;cadastro=1"' | wc -l
# → 9 na home (Header desktop/mobile, Hero, Transparência, Indicação, CTA final, Blog…)

# 3. Artigos do blog: CTAs inline renderizados
curl -s http://localhost:3111/blog/como-funciona-o-sistema-de-indicacao | grep -c "app.flambra.com/ref=D3D5653DFF"
```

**Resultado: nenhum CTA de conversão aponta para endereço incorreto.**
