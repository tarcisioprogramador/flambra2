import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata, webPageSchema, jsonLd } from "@/lib/seo";
import { CTAS } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Como Funciona",
  description:
    "Entenda o passo a passo da Flambra: cadastro gratuito, gravação de tarefas com o celular, validação de horas e pagamento por PIX. Sua renda extra começa aqui.",
  path: "/como-funciona",
  keywords: ["como funciona a Flambra", "passo a passo", "cadastro gratuito", "gravar tarefas"],
});

const STEPS = [
  {
    number: "1",
    title: "Cadastro gratuito",
    description:
      "Crie sua conta em menos de 2 minutos, sem pagar nada. Você só precisa de um celular com câmera e acesso à internet.",
    details: [
      "Sem taxa de adesão",
      "Sem cartão de crédito",
      "Acesso imediato às diretrizes de gravação",
    ],
  },
  {
    number: "2",
    title: "Grave tarefas da sua rotina",
    description:
      "Escolha tarefas que você já faz: lavar louça, dobrar roupas, varrer, cozinhar, organizar a mesa. Grave com o celular seguindo as diretrizes da plataforma.",
    details: [
      "Boa iluminação e câmera estável",
      "Tarefa completa do início ao fim",
      "Ambiente do seu dia a dia real",
    ],
  },
  {
    number: "3",
    title: "Envie os vídeos",
    description:
      "Envie suas gravações pela plataforma. Cada vídeo passa por uma validação para garantir que serve ao treinamento de inteligência artificial.",
    details: [
      "Envio direto pelo app ou plataforma",
      "Status de cada vídeo visível",
      "Feedback claro em caso de reprovação",
    ],
  },
  {
    number: "4",
    title: "Acompanhe a validação",
    description:
      "No painel você vê o que está em análise, o que foi validado e quanto virou saldo. Transparência total entre o envio e o pagamento.",
    details: [
      "Horas enviadas x horas validadas",
      "Motivo de reprovação, quando houver",
      "Saldo atualizado em tempo real",
    ],
  },
  {
    number: "5",
    title: "Receba por PIX",
    description:
      "As horas aprovadas geram saldo pago em reais, via PIX, para a conta que você cadastrar. Simples e sem burocracia.",
    details: [
      "Pagamento em reais",
      "Via PIX, direto na sua conta",
      "Histórico completo de pagamentos",
    ],
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: "Como Funciona a Flambra",
              description: metadata.description ?? "",
              path: "/como-funciona",
              breadcrumbs: [{ name: "Como Funciona", path: "/como-funciona" }],
            })
          ),
        }}
      />
      <PageHero
        eyebrow="Passo a passo"
        title="Como funciona a Flambra"
        description="Do cadastro ao pagamento: veja exatamente como você começa a ganhar renda extra gravando tarefas do seu dia a dia."
        crumbs={[{ name: "Como Funciona", path: "/como-funciona" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ol className="space-y-10">
          {STEPS.map((step, index) => (
            <li
              key={step.number}
              className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-surface p-6 sm:flex-row sm:gap-6 sm:p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-2xl font-bold text-primary">
                {step.number}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-text">
                  {step.title}
                </h2>
                <p className="mt-2 leading-relaxed text-textMuted">{step.description}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-1">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-textMuted">
                      <span className="mt-0.5 text-accent" aria-hidden="true">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              {index < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-7 left-1/2 hidden -translate-x-1/2 text-textMuted/40 sm:block"
                >
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Regras de validação */}
      <section className="border-t border-white/10 bg-surface/50" aria-labelledby="regras">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Validação"
            title="O que torna uma hora aprovada?"
            description="Gravações seguindo as diretrizes são validadas com mais rapidez e frequência."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-surface p-6">
              <h3 className="font-semibold text-text">🎥 Qualidade de imagem</h3>
              <p className="mt-2 text-sm text-textMuted">
                Iluminação adequada, câmera estável e enquadramento que mostra a tarefa completa.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface p-6">
              <h3 className="font-semibold text-text">🏠 Tarefa real</h3>
              <p className="mt-2 text-sm text-textMuted">
                Tarefas autênticas do seu dia a dia, do início ao fim, sem cortes bruscos.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface p-6">
              <h3 className="font-semibold text-text">🔒 Privacidade</h3>
              <p className="mt-2 text-sm text-textMuted">
                Sem rostos ou informações pessoais quando as diretrizes exigirem. Você controla o que grava.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <CTASection
          title="Comece seu passo 1 agora"
          description="O cadastro é gratuito e leva menos de 2 minutos. Sua primeira gravação pode ser hoje."
          ctaLabel={CTAS.signup.text}
          ctaType="cadastro"
          location="como-funciona"
          secondaryLabel="Ganhar dinheiro"
          secondaryHref="/ganhar-dinheiro"
        />
      </section>
    </>
  );
}
