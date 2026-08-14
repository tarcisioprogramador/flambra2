"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS, CTAS, SITE_NAME } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label={`${SITE_NAME} - página inicial`}>
          <span className="text-xl font-bold text-primary">{SITE_NAME}</span>
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm transition-colors ${
                isActive(item.href) ? "font-semibold text-primary" : "text-textMuted hover:text-text"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={CTAS.login.url}
            className="text-sm text-textMuted transition-colors hover:text-text"
            onClick={() => trackCtaClick("login", CTAS.login.text, "header")}
          >
            {CTAS.login.text}
          </Link>
          <Link
            href={CTAS.signup.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary/90"
            data-cta-type="cadastro"
            data-cta-location="header"
            onClick={() => trackCtaClick("cadastro", CTAS.signup.text, "header")}
          >
            {CTAS.signup.text}
          </Link>
        </div>

        {/* Botão menu mobile */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg
            className="h-6 w-6 text-text"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label="Navegação mobile">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`py-3 transition-colors ${
                  isActive(item.href) ? "font-semibold text-primary" : "text-textMuted hover:text-text"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="my-4 border-white/10" />
            <Link
              href={CTAS.login.url}
              className="py-3 text-textMuted transition-colors hover:text-text"
              onClick={() => setMobileMenuOpen(false)}
            >
              {CTAS.login.text}
            </Link>
            <Link
              href={CTAS.signup.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-primary px-4 py-3 text-center font-semibold text-white transition-all hover:bg-primary/90"
              data-cta-type="cadastro"
              data-cta-location="header-mobile"
              onClick={() => {
                setMobileMenuOpen(false);
                trackCtaClick("cadastro", CTAS.signup.text, "header-mobile");
              }}
            >
              {CTAS.signup.text}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
