import { Button, CTAButton } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata, faqSchema, jsonLd, webPageSchema } from "@/lib/seo";
import { FAQ_CATEGORIES } from "@/content/faq";
import { CTAS } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Perguntas Frequentes",
  description:
    "Todas as respostas sobre a Flambra: como funciona, quanto dá para ganhar, como receber por PIX, programa de indicação e segurança.",
  path: "/perguntas-frequentes",
  keywords: ["perguntas frequentes", "dúvidas", "FAQ", "como funciona"],
});

export default function PerguntasFrequentesPage() {
  const allFaqs = FAQ_CATEGORIES.flatMap((category) => category.items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(allFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: "Perguntas Frequentes",
              description: metadata.description ?? "",
              path: "/perguntas-frequentes",
              breadcrumbs: [{ name: "Perguntas Frequentes", path: "/perguntas-frequentes" }],
            })
          ),
        }}
      />
      <PageHero
        eyebrow="Central de dúvidas"
        title="Perguntas frequentes"
        description="Reunimos as respostas para as dúvidas mais comuns sobre o programa, ganhos, pagamento, indicação e segurança."
        crumbs={[{ name: "Perguntas Frequentes", path: "/perguntas-frequentes" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.id} aria-labelledby={`faq-${category.id}`}>
              <SectionHeading align="left" title={category.label} />
              <div className="mt-6">
                <FAQAccordion items={category.items} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-text">Ainda ficou alguma dúvida?</h2>
          <p className="mx-auto mt-3 max-w-lg text-textMuted">
            Fale com a gente pela página de contato ou comece agora — o cadastro é gratuito e você
            não precisa de respostas para tudo antes de começar.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton ctaType="cadastro" location="faq-page">
              {CTAS.signup.text}
            </CTAButton>
            <Button variant="outline" href="/contato" data-cta-type="link" data-cta-location="faq-page">
              Falar com a equipe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
