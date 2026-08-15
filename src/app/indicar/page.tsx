import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata, webPageSchema, jsonLd } from "@/lib/seo";
import { CTAS } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Indicar e Ganhar - Programa de Indicação",
  description:
    "Participe do programa de indicação da Flambra: compartilhe seu link, convide amigos e ganhe renda extra com comissão sobre a atividade dos seus indicados.",
  path: "/indicar",
  keywords: ["indicar e ganhar", "programa de indicação", "link de indicação", "convidar amigos", "comissão"],
});

const STEPS = [
  {
    number: "1",
    title: "Crie sua conta",
    description: "Cadastro gratuito. Seu link pessoal de indicação é gerado automaticamente na plataforma.",
  },
  {
    number: "2",
    title: "Compartilhe seu link",
    description: "Envie pelo WhatsApp, Instagram, grupos e redes. Cada pessoa que entrar pelo seu link fica vinculada a você.",
  },
  {
    number: "3",
    title: "Ganhe comissão",
    description: "Quando seus indicados participam do programa, você ganha comissão sobre a atividade deles.",
  },
  {
    number: "4",
    title: "Acompanhe no painel",
    description: "Veja quem entrou pelo seu link, quem está ativo e quanto de comissão já foi gerado.",
  },
];

export default function IndicarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: "Indicar e Ganhar",
              description: metadata.description ?? "",
              path: "/indicar",
              breadcrumbs: [{ name: "Indicar", path: "/indicar" }],
            })
          ),
        }}
      />
      <PageHero
        eyebrow="Programa de indicação"
        title="Indique, compartilhe e ganhe"
        description="Transforme sua rede de contatos em uma fonte extra de ganho. Compartilhe seu link de indicação e receba comissão sobre a atividade dos seus indicados."
        crumbs={[{ name: "Indicar", path: "/indicar" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="passos-indicacao">
        <SectionHeading
          eyebrow="Como indicar"
          title="Indicar leva menos de 1 minuto"
          description="Você não precisa gravar uma hora a mais: sua rede trabalhando com você soma renda ao seu mês."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-surface p-6 transition-all hover:border-primary/40"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-lg font-bold text-primary"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-textMuted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quem indicar */}
      <section className="border-t border-white/10 bg-surface/50" aria-labelledby="quem-indicar">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Público ideal"
                title="Quem vale a pena indicar?"
                description="O melhor indicado é quem realmente vai participar: pessoas com rotina em casa, tempo disponível e interesse em renda extra."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Familiares e amigos que moram perto e têm rotina parecida",
                  "Pessoas que buscam renda extra pelo celular",
                  "Quem já trabalha ou estuda em casa e quer aproveitar o tempo",
                  "Grupos de economia doméstica, trabalho online e renda extra",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-textMuted">
                    <span className="mt-0.5 text-primary" aria-hidden="true">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-surface p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Dica de divulgação
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text">
                “Envie o link com uma mensagem curta contando sua experiência real: o que você gravou,
                como foi a validação e por que vale a pena. Contexto gera confiança — e confiança gera cliques.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA de indicação */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <CTASection
          title="Pegue seu link de indicação agora"
          description="Crie sua conta gratuita, copie seu link e comece a construir sua rede de indicações hoje."
          ctaLabel={CTAS.affiliate.text}
          ctaType="indicacao"
          location="indicar"
          secondaryLabel="Dicas de divulgação"
          secondaryHref="/blog/como-divulgar-seu-link-de-indicacao"
        />
      </section>
    </>
  );
}
