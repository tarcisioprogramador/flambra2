import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata, webPageSchema, jsonLd } from "@/lib/seo";
import { COMPANY_INFO, CTAS } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Sobre a Flambra",
  description:
    "Conheça a Flambra: a plataforma brasileira que conecta pessoas a projetos de inteligência artificial, pagando para gravar tarefas do dia a dia.",
  path: "/sobre",
  keywords: ["sobre a Flambra", "quem somos", "plataforma brasileira", "missão"],
});

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: "Sobre a Flambra",
              description: metadata.description ?? "",
              path: "/sobre",
              breadcrumbs: [{ name: "Sobre", path: "/sobre" }],
            })
          ),
        }}
      />
      <PageHero
        eyebrow="Quem somos"
        title="A Flambra conecta pessoas à próxima geração de robôs"
        description="Somos uma plataforma brasileira que paga pessoas para gravar tarefas reais do dia a dia, ajudando a treinar inteligências artificiais e robôs que vão executar essas tarefas no mundo real."
        crumbs={[{ name: "Sobre", path: "/sobre" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Nossa missão"
              title="Tornar a participação no futuro da IA acessível a todos"
            />
            <p className="mt-4 leading-relaxed text-textMuted">
              O treinamento de robôs e sistemas de inteligência artificial depende de dados reais do
              mundo real — e os lares brasileiros são uma fonte inestimável de exemplos. A Flambra
              nasceu para criar uma ponte justa entre essa demanda e as pessoas: você contribui com
              suas gravações e é recompensado por isso, com transparência e pagamento pontual.
            </p>
          </div>

          <div>
            <SectionHeading align="left" eyebrow="Nossos valores" title="O que guia a Flambra" />
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Transparência",
                  description: "Cada etapa — envio, validação, saldo — visível no seu painel, sem mistério.",
                },
                {
                  title: "Acessibilidade",
                  description: "Cadastro gratuito, sem experiência técnica e com pagamento simples via PIX.",
                },
                {
                  title: "Justiça",
                  description: "Regras claras de validação e recompensa por quem contribui de verdade.",
                },
              ].map((value) => (
                <div key={value.title} className="rounded-2xl border border-white/10 bg-surface p-6">
                  <h3 className="font-semibold text-text">{value.title}</h3>
                  <p className="mt-2 text-sm text-textMuted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading align="left" eyebrow="O futuro" title="Por que suas gravações importam" />
            <p className="mt-4 leading-relaxed text-textMuted">
              Robôs domésticos e assistentes inteligentes precisam aprender com exemplos reais de
              pessoas reais. Cada vídeo de uma tarefa executada do jeito certo — do jeito que
              milhões de brasileiros fazem — ensina esses sistemas a funcionar melhor. Sua rotina
              vira dado de valor, e a Flambra garante que esse valor volte para você.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6 text-sm text-textMuted">
            <p>
              <strong className="text-text">Sede:</strong> {COMPANY_INFO.location}
            </p>
            <p className="mt-1">
              <strong className="text-text">Contato:</strong>{" "}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:text-primary/80">
                {COMPANY_INFO.email}
              </a>
            </p>
            <p className="mt-1">
              <strong className="text-text">CNPJ:</strong> {COMPANY_INFO.cnpj}
            </p>
            <p className="mt-1">
              <strong className="text-text">Desde:</strong> {COMPANY_INFO.founded}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CTASection
          title="Faça parte dessa história"
          description="Sua rotina pode ajudar a treinar a próxima geração de robôs — e você ainda é pago por isso."
          ctaLabel={CTAS.signup.text}
          ctaType="cadastro"
          location="sobre"
          secondaryLabel="Como funciona"
          secondaryHref="/como-funciona"
        />
      </section>
    </>
  );
}
