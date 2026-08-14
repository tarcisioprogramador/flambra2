import { PageHero } from "@/components/ui/PageHero";
import { buildPageMetadata, webPageSchema, jsonLd } from "@/lib/seo";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Termos de Uso",
  description:
    "Leia os Termos de Uso da Flambra: regras de participação no programa, envio de gravações, validação, pagamentos e programa de indicação.",
  path: "/termos-de-uso",
  keywords: ["termos de uso", "termos", "regras do programa"],
  noindex: false,
});

const SECTIONS = [
  {
    title: "1. Aceitação dos termos",
    content: [
      "Estes termos regem a utilização da plataforma operada pela Flambra Tecnologia LTDA, inscrita no CNPJ sob o nº 59.524.963/0001-37, com sede em Goiânia, Goiás.",
      "Ao criar uma conta e utilizar os serviços da Flambra, você declara ter lido, compreendido e concordado com estes Termos de Uso, com a Política de Privacidade e com as diretrizes de gravação disponibilizadas na plataforma.",
      "Caso não concorde com qualquer parte destes termos, não utilize os serviços.",
    ],
  },
  {
    title: "2. O serviço",
    content: [
      "A Flambra é uma plataforma que conecta participantes a projetos de coleta e treinamento de dados para inteligência artificial. Os participantes gravam tarefas do dia a dia com seus dispositivos móveis e enviam os vídeos para validação.",
      "As gravações enviadas são utilizadas para fins de treinamento de modelos de IA, conforme a Política de Privacidade.",
    ],
  },
  {
    title: "3. Cadastro e conta",
    content: [
      "O cadastro é gratuito e exige informações verdadeiras e atualizadas. Você é responsável pela confidencialidade dos seus dados de acesso e por toda atividade realizada na sua conta.",
      "A Flambra pode suspender contas que violem estes termos, utilizem informações falsas ou apresentem comportamento fraudulento.",
    ],
  },
  {
    title: "4. Gravações e validação",
    content: [
      "As gravações devem seguir as diretrizes de gravação da plataforma, incluindo requisitos de iluminação, estabilidade, enquadramento e privacidade.",
      "Toda gravação enviada passa por validação. Somente o tempo validado é convertido em “hora aprovada” e gera saldo. A Flambra pode reprovar gravações que não atendam às diretrizes, sem prejuízo de novas tentativas.",
      "Você não deve gravar ou enviar conteúdo que viole direitos de terceiros, que exponha dados pessoais sem autorização ou que seja ilegal.",
    ],
  },
  {
    title: "5. Pagamentos",
    content: [
      "As horas aprovadas geram saldo pago em reais, via PIX, conforme as regras de liberação da plataforma. Valores e prazos podem ser ajustados pela Flambra mediante aviso prévio.",
      "A Flambra pode reter ou estornar pagamentos em caso de fraude, violação destes termos ou erro de processamento.",
    ],
  },
  {
    title: "6. Programa de indicação",
    content: [
      "O programa de indicação permite que participantes compartilhem um link pessoal e recebam comissão sobre a atividade dos indicados, conforme as regras publicadas na plataforma.",
      "É proibida a divulgação do link em canais que violem as regras da plataforma ou que configurem spam, fraude ou prática enganosa.",
      "A Flambra pode alterar, suspender ou encerrar o programa de indicação a qualquer momento, com aviso prévio quando possível.",
    ],
  },
  {
    title: "7. Propriedade intelectual",
    content: [
      "As gravações enviadas, uma vez aceitas para uso, podem ser utilizadas pela Flambra e seus parceiros para fins de treinamento de inteligência artificial, conforme a Política de Privacidade.",
      "A identidade visual, logotipos, textos e demais conteúdos da plataforma são de propriedade da Flambra.",
    ],
  },
  {
    title: "8. Limitação de responsabilidade",
    content: [
      "A Flambra se esforça para manter a plataforma disponível e funcional, mas não garante disponibilidade ininterrupta. O uso do serviço é por conta e risco do participante.",
      "Ganhos apresentados são estimativas e não constituem promessa de rendimento. Resultados dependem de horas aprovadas e da participação de cada usuário.",
    ],
  },
  {
    title: "9. Alterações dos termos",
    content: [
      "Estes termos podem ser atualizados periodicamente. A versão vigente estará sempre disponível nesta página, e a continuidade do uso após alterações implica concordância com a nova versão.",
    ],
  },
  {
    title: "10. Contato",
    content: [
      `Para dúvidas sobre estes termos, entre em contato pelo e-mail ${COMPANY_INFO.email}.`,
    ],
  },
];

export default function TermosDeUsoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: "Termos de Uso",
              description: metadata.description ?? "",
              path: "/termos-de-uso",
              breadcrumbs: [{ name: "Termos de Uso", path: "/termos-de-uso" }],
            })
          ),
        }}
      />
      <PageHero
        eyebrow="Documento legal"
        title="Termos de Uso"
        description="As regras de participação no programa da Flambra. Leia com atenção antes de criar sua conta."
        crumbs={[{ name: "Termos de Uso", path: "/termos-de-uso" }]}
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm text-textMuted">
          Última atualização: agosto de 2026
        </p>
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
