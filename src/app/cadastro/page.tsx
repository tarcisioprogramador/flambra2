import { CTAButton } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { buildPageMetadata, webPageSchema, jsonLd } from "@/lib/seo";
import { CTAS } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Cadastro Gratuito",
  description:
    "Crie sua conta na Flambra em menos de 2 minutos: cadastro gratuito, sem taxa, para começar a ganhar dinheiro gravando tarefas pelo celular.",
  path: "/cadastro",
  keywords: ["cadastro", "criar conta", "cadastro gratuito", "começar agora"],
});

export default function CadastroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: "Cadastro Gratuito na Flambra",
              description: metadata.description ?? "",
              path: "/cadastro",
              breadcrumbs: [{ name: "Cadastro", path: "/cadastro" }],
            })
          ),
        }}
      />
      <PageHero
        eyebrow="Cadastro gratuito"
        title="Crie sua conta em 2 minutos"
        description="Sem taxa, sem burocracia e sem cartão de crédito. Seu cadastro libera acesso às diretrizes, ao painel e ao seu link de indicação."
        crumbs={[{ name: "Cadastro", path: "/cadastro" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-surface to-surface p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-text sm:text-3xl">
            Comece agora, de graça
          </h2>
          <p className="mt-3 text-textMuted">
            O cadastro acontece na plataforma oficial. Ao clicar no botão abaixo, você será
            direcionado para criar sua conta — e seu acesso já fica vinculado ao programa.
          </p>

          <div className="mt-8">
            <CTAButton size="lg" ctaType="cadastro" location="cadastro-page">
              {CTAS.register.text}
            </CTAButton>
          </div>

          <ul className="mt-8 grid gap-3 text-sm text-textMuted sm:grid-cols-2">
            {[
              "Cadastro 100% gratuito",
              "Sem taxa de participação",
              "Pagamento em reais via PIX",
              "Link de indicação incluído",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-accent" aria-hidden="true">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* O que você recebe após o cadastro */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: "📋",
              title: "Diretrizes de gravação",
              description: "Tudo o que você precisa saber para ter horas aprovadas desde o início.",
            },
            {
              icon: "📊",
              title: "Painel de acompanhamento",
              description: "Horas enviadas, validadas e saldo organizados em um só lugar.",
            },
            {
              icon: "🔗",
              title: "Seu link de indicação",
              description: "Gerado automaticamente para você compartilhar e ganhar comissão.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-surface p-6">
              <span className="text-3xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-3 font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm text-textMuted">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Nota de segurança */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-surface p-6">
          <h2 className="font-semibold text-text">⚠️ Antes de criar sua conta</h2>
          <p className="mt-2 text-sm leading-relaxed text-textMuted">
            Nenhuma plataforma séria cobra taxa para você começar. Desconfie de mensagens que
            prometem ganhos garantidos ou pedem dados bancários fora dos canais oficiais. Se tiver
            dúvidas, fale com a gente pela página de contato.
          </p>
        </div>
      </section>
    </>
  );
}
