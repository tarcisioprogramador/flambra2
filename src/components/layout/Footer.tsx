import Link from "next/link";
import { SITE_NAME, SOCIAL_LINKS, NAV_ITEMS, CTAS, COMPANY_INFO, REFERRAL_URL } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-primary" aria-label={`${SITE_NAME} - página inicial`}>
              {SITE_NAME}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-textMuted">
              Grave tarefas reais da sua rotina com o celular, ajude a treinar a próxima geração de
              robôs e receba até R$ 25 por hora aprovada.
            </p>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-textMuted transition-colors hover:text-primary"
              aria-label="Telefone de contato"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {COMPANY_INFO.phone}
            </a>
            <div className="mt-6 flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textMuted transition-colors hover:text-primary"
                aria-label="Instagram da Flambra"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textMuted transition-colors hover:text-primary"
                aria-label="LinkedIn da Flambra"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="text-sm font-semibold text-text">Navegação</h3>
            <ul className="mt-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-textMuted transition-colors hover:text-text">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-sm text-textMuted transition-colors hover:text-text">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Conta */}
          <nav aria-label="Área da conta">
            <h3 className="text-sm font-semibold text-text">Conta</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href={CTAS.register.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-textMuted transition-colors hover:text-text"
                  data-cta-type="cadastro"
                  data-cta-location="footer"
                >
                  {CTAS.register.text}
                </Link>
              </li>
              <li>
                <Link
                  href={CTAS.affiliate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-textMuted transition-colors hover:text-text"
                  data-cta-type="indicacao"
                  data-cta-location="footer"
                >
                  {CTAS.affiliate.text}
                </Link>
              </li>
              <li>
                <Link href="/cadastro" className="text-sm text-textMuted transition-colors hover:text-text">
                  Como me cadastrar
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-textMuted transition-colors hover:text-text">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Links legais">
            <h3 className="text-sm font-semibold text-text">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/termos-de-uso" className="text-sm text-textMuted transition-colors hover:text-text">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-sm text-textMuted transition-colors hover:text-text">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/perguntas-frequentes" className="text-sm text-textMuted transition-colors hover:text-text">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-textMuted transition-colors hover:text-text">
                  Sobre a {SITE_NAME}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Barra de conversão */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-5 sm:flex-row">
          <p className="text-center text-sm font-medium text-text sm:text-left">
            Pronto para transformar sua rotina em renda extra?
          </p>
          <Link
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90"
            data-cta-type="cadastro"
            data-cta-location="footer-cta"
          >
            Quero começar a ganhar
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center text-sm text-textMuted sm:flex-row sm:justify-between">
          <p>
            © {currentYear} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-textMuted/70">
            {COMPANY_INFO.legalName} · CNPJ {COMPANY_INFO.cnpj} · {COMPANY_INFO.location} · {COMPANY_INFO.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
