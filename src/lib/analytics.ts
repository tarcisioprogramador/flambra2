"use client";

import { ANALYTICS } from "./constants";

// ------------------------------------------------------------
// ANALYTICS - Google Analytics 4 + Google Tag Manager
// ------------------------------------------------------------
// Arquitetura compatível com GA4 e GTM. Sem credenciais reais
// configuradas (NEXT_PUBLIC_GA4_ID / NEXT_PUBLIC_GTM_ID vazias),
// nenhum script externo é carregado e nenhum erro aparece.
//
// Para ativar: defina as variáveis no .env.local ou no painel da
// Vercel e faça deploy. Nenhuma alteração de código é necessária.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function hasGtag(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

function hasDataLayer(): boolean {
  return typeof window !== "undefined" && Array.isArray(window.dataLayer);
}

/**
 * Rastreia eventos de conversão e interação.
 * Funciona com GA4 (gtag) e GTM (dataLayer push).
 */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;

  const payload = {
    event: eventName,
    ...params,
  };

  // GTM
  if (hasDataLayer()) {
    window.dataLayer?.push(payload);
  }

  // GA4 direto
  if (hasGtag() && ANALYTICS.ga4Id) {
    window.gtag?.("event", eventName, params);
  }
}

/**
 * Rastreia clique em CTA de conversão.
 * @param ctaType tipo do CTA: "cadastro" | "indicacao" | "login" | "link"
 * @param label texto visível do botão
 * @param location onde o CTA está (ex.: "header", "hero", "blog-card")
 */
export function trackCtaClick(
  ctaType: "cadastro" | "indicacao" | "login" | "link",
  label: string,
  location: string
): void {
  const isConversion = ctaType === "cadastro" || ctaType === "indicacao";
  trackEvent(
    isConversion ? ANALYTICS.events.ctaClick : ANALYTICS.events.ctaClick,
    {
      cta_type: ctaType,
      cta_label: label,
      cta_location: location,
      conversion: isConversion,
    }
  );
}

/** Rastreia visualização de página (já coberta pelo GA4/GTM automaticamente). */
export function trackPageView(path: string): void {
  trackEvent(ANALYTICS.events.pageView, { page_path: path });
}

/** Rastreia buscas no blog. */
export function trackBlogSearch(query: string): void {
  trackEvent(ANALYTICS.events.blogSearch, { search_query: query });
}
