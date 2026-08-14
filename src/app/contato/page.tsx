import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/ui/ContactForm";
import { buildPageMetadata, webPageSchema, jsonLd } from "@/lib/seo";
import { COMPANY_INFO, SOCIAL_LINKS } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Contato",
  description:
    "Fale com a equipe da Flambra: tire dúvidas sobre o programa, pagamentos, indicações ou sua conta. Respondemos por e-mail e redes sociais.",
  path: "/contato",
  keywords: ["contato", "falar com a Flambra", "suporte", "dúvidas"],
});

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: "Contato",
              description: metadata.description ?? "",
              path: "/contato",
              breadcrumbs: [{ name: "Contato", path: "/contato" }],
            })
          ),
        }}
      />
      <PageHero
        eyebrow="Fale com a gente"
        title="Como podemos ajudar?"
        description="Tire suas dúvidas sobre o programa, pagamentos, indicações ou sua conta. Escolha o canal que preferir."
        crumbs={[{ name: "Contato", path: "/contato" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Formulário */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-text sm:text-2xl">Envie uma mensagem</h2>
            <p className="mt-2 text-sm text-textMuted">
              Preencha o formulário e sua mensagem será encaminhada para {COMPANY_INFO.email}.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          {/* Informações */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-text sm:text-2xl">Outros canais</h2>
            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-surface p-5 transition-all hover:border-primary/40"
              >
                <span className="text-2xl" aria-hidden="true">
                  ✉️
                </span>
                <div>
                  <p className="font-semibold text-text">E-mail</p>
                  <p className="mt-1 text-sm text-textMuted">{COMPANY_INFO.email}</p>
                </div>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-surface p-5 transition-all hover:border-primary/40"
              >
                <span className="text-2xl" aria-hidden="true">
                  📸
                </span>
                <div>
                  <p className="font-semibold text-text">Instagram</p>
                  <p className="mt-1 text-sm text-textMuted">@flambra.app</p>
                </div>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-surface p-5 transition-all hover:border-primary/40"
              >
                <span className="text-2xl" aria-hidden="true">
                  💼
                </span>
                <div>
                  <p className="font-semibold text-text">LinkedIn</p>
                  <p className="mt-1 text-sm text-textMuted">Flambra no LinkedIn</p>
                </div>
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-surface p-5 text-sm text-textMuted">
              <p className="font-semibold text-text">Atendimento</p>
              <p className="mt-2">
                Respondemos em horário comercial. Para questões urgentes sobre sua conta, verifique
                a página de{" "}
                <a href="/perguntas-frequentes" className="text-primary hover:text-primary/80">
                  perguntas frequentes
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
