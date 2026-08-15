import { CTAButton } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

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
              roupas ou troque um pneu. Transforme sua rotina em{" "}
              <strong className="text-text">renda extra</strong> gravando pelo
              celular e receba pelas horas aprovadas via Pix, com suporte
              humano no WhatsApp.
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
            <Image
              src="/ganhe/afiliados-network.png"
              alt="Mulher com megafone no centro, cercada por pessoas gravando tarefas com celular na headband, mostrando ganhos por hora aprovada"
              width={768}
              height={576}
              priority
              className="w-full rounded-3xl object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
