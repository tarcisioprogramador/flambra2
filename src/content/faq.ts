// ============================================================
// FLAMBRA - PERGUNTAS FREQUENTES (FAQ)
// ============================================================

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "programa",
    label: "Sobre o programa",
    items: [
      {
        question: "Como funciona a Flambra?",
        answer:
          "Você grava com o celular tarefas reais da sua rotina — como lavar louça, dobrar roupas ou preparar um café — e envia os vídeos pela plataforma. Essas gravações ajudam a treinar a próxima geração de robôs e inteligências artificiais. As horas aprovadas são pagas em dinheiro.",
      },
      {
        question: "O que são horas aprovadas?",
        answer:
          "Depois que você envia suas gravações, a equipe valida se o vídeo está dentro das diretrizes (boa iluminação, câmera estável e tarefa completa). O tempo validado vira “hora aprovada” e é essa hora que é paga, com valor de até R$ 25.",
      },
      {
        question: "Preciso pagar alguma coisa para começar?",
        answer:
          "Não. O cadastro é gratuito e você não paga nada para gravar, enviar ou receber. Desconfie de qualquer plataforma que cobre para você “liberar” ganhos.",
      },
      {
        question: "Preciso de equipamento especial?",
        answer:
          "Não. Basta um celular com câmera (qualquer modelo razoavelmente recente) e conexão com a internet para enviar os vídeos. Dá para começar hoje, da sua casa.",
      },
    ],
  },
  {
    id: "ganhos",
    label: "Ganhos e pagamento",
    items: [
      {
        question: "Quanto posso ganhar?",
        answer:
          "Você recebe até R$ 25 por hora de gravação aprovada. O quanto você ganha por mês depende da sua dedicação e da quantidade de horas válidas enviadas. Com consistência, é possível construir uma renda extra relevante no mês.",
      },
      {
        question: "Como recebo o pagamento?",
        answer:
          "Os pagamentos são feitos em reais, por PIX, para a conta que você cadastrar. Você acompanha horas enviadas, horas validadas e saldo em um só lugar na plataforma.",
      },
      {
        question: "Quantas horas por dia preciso dedicar?",
        answer:
          "Não existe obrigação de horário: você grava quando quiser e no seu ritmo. Começar com algumas horas por semana já permite entender o processo e ver os primeiros resultados.",
      },
      {
        question: "Quando o saldo é liberado para saque?",
        answer:
          "O saldo referente às horas aprovadas é liberado conforme as regras de validação da plataforma. Todo o processo — envio, validação e saldo — é visível no seu painel, sem mistério.",
      },
    ],
  },
  {
    id: "indicacao",
    label: "Indicação",
    items: [
      {
        question: "Como funciona o programa de indicação?",
        answer:
          "Você compartilha seu link de indicação com amigos e familiares. Quando alguém entra pelo seu link e começa a participar do programa, você ganha uma comissão sobre a atividade dele, conforme as regras da plataforma.",
      },
      {
        question: "Como crio meu link de indicação?",
        answer:
          "O link de indicação é gerado automaticamente dentro da plataforma, na área de indicações. Basta copiar e compartilhar no WhatsApp, Instagram ou onde preferir.",
      },
      {
        question: "Quantas pessoas posso indicar?",
        answer:
          "Não há limite de indicações. Quanto mais pessoas entrarem pelo seu link e participarem, maior pode ser a sua comissão no mês.",
      },
    ],
  },
  {
    id: "seguranca",
    label: "Segurança e confiança",
    items: [
      {
        question: "A Flambra é confiável?",
        answer:
          "A Flambra é uma plataforma brasileira com regras claras de validação e pagamento. Recomendamos sempre ler os Termos de Uso e a Política de Privacidade, acompanhar o painel e nunca pagar nada para participar.",
      },
      {
        question: "Posso participar de qualquer cidade do Brasil?",
        answer:
          "Sim. Como as gravações são feitas com o seu celular, na sua rotina, qualquer pessoa no Brasil com acesso à plataforma pode participar.",
      },
      {
        question: "Meus vídeos ficam públicos?",
        answer:
          "Não. Suas gravações são enviadas para a plataforma com a finalidade de treinamento de inteligência artificial, seguindo a Política de Privacidade. Você controla o que grava e o que envia.",
      },
    ],
  },
];

/** FAQ resumida usada no Schema.org FAQPage da página principal */
export const FAQ_MAIN_PAGE: FaqItem[] = [
  FAQ_CATEGORIES[0].items[0],
  FAQ_CATEGORIES[1].items[0],
  FAQ_CATEGORIES[1].items[1],
  FAQ_CATEGORIES[2].items[0],
  FAQ_CATEGORIES[3].items[0],
];
