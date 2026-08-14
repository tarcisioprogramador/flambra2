import { CTAButton } from "@/components/ui/Button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Grave
              <br />
              <span className="text-primary">Ganhe</span>
              <br />
              Receba no Pix
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-textMuted lg:mx-0">
              Você não aparece, só as suas mãos! Lave sua louça, dobre suas
              roupas ou troque um pneu. Grave pelo celular e receba pelas horas
              aprovadas via Pix, com suporte humano no WhatsApp.
            </p>

            {/* Badges de valor */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <div>
                <p className="text-2xl font-bold text-primary">R$25/h</p>
                <p className="text-xs text-textMuted">por hora</p>
              </div>
              <div className="h-10 w-px bg-white/10" aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold text-accent">R$4.500/mês</p>
                <p className="text-xs text-textMuted">
                  por gravações aprovadas
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <CTAButton size="lg" location="hero">
                Quero começar
              </CTAButton>
              <Link
                href="/como-funciona"
                className="text-sm font-medium text-textMuted transition-colors hover:text-text"
              >
                Como funciona →
              </Link>
            </div>

            {/* Info badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-textMuted lg:justify-start">
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full bg-accent"
                />
                Receba via Pix ou USDC
              </span>
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full bg-accent"
                />
                Pagamento seguro
              </span>
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full bg-accent"
                />
                Suporte humano
              </span>
            </div>
          </div>

          {/* Ilustração */}
          <div className="relative mx-auto flex max-w-md justify-center lg:max-w-none">
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-surface">
              {/* Placeholder com gradiente */}
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-primary/20 via-surface to-accent/10 p-8">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20">
                    <svg
                      className="h-10 w-10 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-text">
                    Grave com o celular
                  </p>
                  <p className="mt-1 text-xs text-textMuted">
                    Tarefas reais do dia a dia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
