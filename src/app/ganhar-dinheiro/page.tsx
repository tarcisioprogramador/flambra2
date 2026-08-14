import { CTAButton } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata, webPageSchema, jsonLd } from "@/lib/seo";
import { CTAS, PROGRAM_VALUES } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Ganhar Dinheiro Gravando Tarefas",
  description:
    "Descubra quanto dá para ganhar gravando tarefas com o celular na Flambra: até R$ 25 por hora aprovada, pagamento por PIX e cadastro gratuito.",
  path: "/ganhar-dinheiro",
  keywords: ["ganhar dinheiro", "renda extra", "quanto ganha", "R$ 25 por hora", "ganhar pelo celular"],
});

const SCENARIOS = [
  {
    weeklyHours: "4 horas/semana",
    monthlyHours: "≈ 16 h/mês",
    monthly: "até R$ 400/mês",
    profile: "Ideal para quem quer testar e aprender",
  },
  {
    weeklyHours: "8 horas/semana",
    monthlyHours: "≈ 32 h/mês",
    monthly: "até R$ 800/mês",
    profile: "Ritmo leve e constante, fácil de manter",
  },
  {
    weeklyHours: "15 horas/semana",
    monthlyHours: "≈ 60 h/mês",
    monthly: "até R$ 1.500/mês",
    profile: "Dedicação regular com boa qualidade",
  },
  {
    weeklyHours: "Ritmo intenso",
    monthlyHours: "dedicação + qualidade",
    monthly: "R$ 4.500+/mês",
    profile: "Consistência alta e taxa de aprovação elevada",
  },
];

const WAYS = [
  {
    title: "Gravação de tarefas",
    description: "Grave tarefas da sua rotina e receba até R$ 25 por hora aprovada.",
    icon: "🎥",
    cta: "Começar a gravar",
    ctaType: "cadastro" as const,
  },
  {
    title: "Programa de indicação",
    description: "Compartilhe seu link e ganhe comissão sobre a atividade dos seus indicados.",
    icon: "🔗",
    cta: "Indicar e ganhar",
    ctaType: "indicacao" as const,
  },
];

export default function GanharDinheiroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: "Ganhar Dinheiro Gravando Tarefas",
              description: metadata.description ?? "",
              path: "/ganhar-dinheiro",
              breadcrumbs: [{ name: "Ganhar Dinheiro", path: "/ganhar-dinheiro" }],
            })
          ),
        }}
      />
      <PageHero
        eyebrow="Potencial de ganho"
        title="Quanto dá para ganhar gravando tarefas?"
        description="Até R$ 25 por hora aprovada. Seu total mensal depende das horas válidas que você envia — e isso está sob seu controle."
        crumbs={[{ name: "Ganhar Dinheiro", path: "/ganhar-dinheiro" }]}
      />

      {/* Cálculo realista */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="cenarios">
        <SectionHeading
          eyebrow="Cenários realistas"
          title="Quanto você pode ganhar por mês"
          description={`Cálculo baseado em R$ ${PROGRAM_VALUES.hourlyRate} por hora aprovada, considerando que todas as horas enviadas sejam validadas.`}
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">
                Cenários de ganho mensal na Flambra por horas aprovadas por semana
              </caption>
              <thead>
                <tr className="border-b border-white/10 bg-surfaceLight text-text">
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Dedicação
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Horas/mês
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Ganho estimado
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Perfil
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {SCENARIOS.map((row) => (
                  <tr key={row.weeklyHours} className="bg-surface transition-colors hover:bg-surfaceLight">
                    <td className="px-6 py-4 font-medium text-text">{row.weeklyHours}</td>
                    <td className="px-6 py-4 text-textMuted">{row.monthlyHours}</td>
                    <td className="px-6 py-4 font-semibold text-primary">{row.monthly}</td>
                    <td className="px-6 py-4 text-textMuted">{row.profile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-4 text-xs text-textMuted/70">
          * Valores estimados e não garantidos. O ganho real depende das horas aprovadas pela validação
          e da sua dedicação.
        </p>
      </section>

      {/* Formas de ganhar */}
      <section className="border-t border-white/10 bg-surface/50" aria-labelledby="formas">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Duas formas de ganhar"
            title="Ganhe gravando e ganhe indicando"
            description="Combine as duas formas para acelerar seus resultados: horas aprovadas + comissão de indicações."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {WAYS.map((way) => (
              <div
                key={way.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-surface p-8 transition-all hover:border-primary/40"
              >
                <span className="text-4xl" aria-hidden="true">
                  {way.icon}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-text">{way.title}</h3>
                <p className="mt-2 flex-1 text-textMuted">{way.description}</p>
                <div className="mt-6">
                  <CTAButton ctaType={way.ctaType} location={`ganhar-dinheiro-${way.ctaType}`}>
                    {way.cta}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ específica de ganhos */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="faq-ganhos">
        <SectionHeading
          eyebrow="Dúvidas sobre ganhos"
          title="O que mais perguntam sobre dinheiro"
        />
        <div className="mt-10 space-y-4">
          {[
            {
              q: "Como recebo o pagamento?",
              a: "Os pagamentos são feitos em reais, via PIX, para a conta que você cadastrar na plataforma.",
            },
            {
              q: "Preciso pagar algo para começar?",
              a: "Não. O cadastro é gratuito e não existe taxa para participar, gravar ou receber.",
            },
            {
              q: "O que acontece se meu vídeo for reprovado?",
              a: "Você recebe o motivo da reprovação e pode ajustar suas próximas gravações. A qualidade é o que determina a aprovação das horas.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-2xl border border-white/10 bg-surface p-6">
              <h3 className="font-semibold text-text">{item.q}</h3>
              <p className="mt-2 text-sm text-textMuted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CTASection
          title="Comece a construir seu ganho hoje"
          description="Cadastro gratuito, sem taxa e com pagamento por PIX. Sua primeira hora aprovada pode sair esta semana."
          ctaLabel={CTAS.payout.text}
          ctaType="cadastro"
          location="ganhar-dinheiro"
          secondaryLabel="Ver como funciona"
          secondaryHref="/como-funciona"
        />
      </section>
    </>
  );
}
