import { PageHero } from "@/components/ui/PageHero";
import { buildPageMetadata, webPageSchema, jsonLd } from "@/lib/seo";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Política de Privacidade",
  description:
    "Saiba como a Flambra coleta, utiliza e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  path: "/politica-de-privacidade",
  keywords: ["política de privacidade", "LGPD", "dados pessoais", "privacidade"],
});

const SECTIONS = [
  {
    title: "1. Dados que coletamos",
    content: [
      "Coletamos dados fornecidos por você no cadastro (como nome, e-mail e dados de pagamento), dados de uso da plataforma (como páginas acessadas) e as gravações enviadas para fins de validação e treinamento.",
      "As gravações têm como finalidade o treinamento de inteligência artificial e são tratadas de acordo com a LGPD.",
    ],
  },
  {
    title: "2. Como usamos seus dados",
    content: [
      "Seus dados são utilizados para: criar e gerenciar sua conta; validar gravações; processar pagamentos; operar o programa de indicação; melhorar a plataforma; e cumprir obrigações legais.",
      "As gravações enviadas podem ser utilizadas pela Flambra e seus parceiros no treinamento de modelos de IA, observadas as diretrizes de privacidade e as permissões concedidas por você.",
    ],
  },
  {
    title: "3. Bases legais (LGPD)",
    content: [
      "Tratamos seus dados com base na execução do contrato (os Termos de Uso), no consentimento, no legítimo interesse e no cumprimento de obrigações legais, conforme o caso.",
    ],
  },
  {
    title: "4. Compartilhamento",
    content: [
      "Não vendemos seus dados pessoais. Compartilhamos dados apenas com: prestadores de serviço (pagamento, hospedagem, analytics) e parceiros de treinamento de IA, sempre sob contrato e com finalidade específica.",
    ],
  },
  {
    title: "5. Cookies e analytics",
    content: [
      "Utilizamos cookies essenciais e ferramentas de analytics (como Google Analytics) para entender o uso do site e melhorar a experiência. Você pode gerenciar cookies nas configurações do seu navegador.",
      "Quando configuradas, ferramentas de medição são utilizadas com anonimização de IP sempre que disponível.",
    ],
  },
  {
    title: "6. Seus direitos",
    content: [
      "Conforme a LGPD, você pode solicitar: confirmação da existência de tratamento; acesso aos dados; correção; anonimização ou eliminação; portabilidade; e revogação de consentimento.",
      "Para exercer seus direitos, entre em contato pelo e-mail da plataforma informando o que deseja. Responderemos dentro do prazo legal.",
    ],
  },
  {
    title: "7. Segurança",
    content: [
      "Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração, incluindo criptografia em trânsito e controle de acesso.",
    ],
  },
  {
    title: "8. Retenção",
    content: [
      "Mantemos seus dados pelo tempo necessário às finalidades descritas ou pelo prazo exigido por lei. Ao encerrar sua conta, os dados são excluídos ou anonimizados, salvo obrigação legal de retenção.",
    ],
  },
  {
    title: "9. Alterações desta política",
    content: [
      "Esta política pode ser atualizada para refletir mudanças legais ou operacionais. A versão vigente estará sempre disponível nesta página.",
    ],
  },
  {
    title: "10. Contato do encarregado",
    content: [
      "A Flambra Tecnologia LTDA (CNPJ 59.524.963/0001-37) é a controladora dos dados pessoais tratados por meio desta plataforma.",
      `Para questões de privacidade ou para exercer seus direitos como titular, entre em contato pelo e-mail ${COMPANY_INFO.email}.`,
    ],
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: "Política de Privacidade",
              description: metadata.description ?? "",
              path: "/politica-de-privacidade",
              breadcrumbs: [{ name: "Política de Privacidade", path: "/politica-de-privacidade" }],
            })
          ),
        }}
      />
      <PageHero
        eyebrow="Documento legal"
        title="Política de Privacidade"
        description="Como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
        crumbs={[{ name: "Política de Privacidade", path: "/politica-de-privacidade" }]}
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm text-textMuted">Última atualização: agosto de 2026</p>
        <div className="mt-8 space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-text">{section.title}</h2>
              {section.content.map((paragraph, index) => (
                <p key={index} className="mt-3 leading-relaxed text-textMuted">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
