import { Button, CTAButton } from "./Button";

interface CTASectionProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaType?: "cadastro" | "indicacao";
  location?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * Seção de conversão reutilizável. Todo CTA de conversão usa
 * CTAButton, que aponta para REFERRAL_URL (link de indicação).
 */
export function CTASection({
  title,
  description,
  ctaLabel,
  ctaType = "cadastro",
  location = "cta-section",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-surface to-surface px-6 py-16 text-center sm:px-12">
      {/* brilho decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold text-text sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-textMuted">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton size="lg" ctaType={ctaType} location={location}>
            {ctaLabel}
          </CTAButton>
          {secondaryLabel && secondaryHref && (
            <Button
              size="lg"
              variant="outline"
              href={secondaryHref}
              data-cta-type="link"
              data-cta-location={location}
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
        <p className="mt-4 text-xs text-textMuted/70">
          Cadastro gratuito · Sem taxa para participar · Pagamento via PIX
        </p>
      </div>
    </section>
  );
}
