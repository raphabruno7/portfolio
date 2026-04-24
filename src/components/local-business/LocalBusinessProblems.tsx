import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "Onde é que o tempo vai embora?",
    problems: [
      {
        title: "Atendimento",
        description:
          "Telefonemas perdidos, WhatsApp sem resposta ao fim-de-semana, clientes que desaparecem antes de marcar. Cada lead não respondida é receita que sai pela porta.",
      },
      {
        title: "Reservas e faltas",
        description:
          "Confirmações manuais que ninguém faz. Clientes que não aparecem sem avisar. Agenda com buracos que podiam ter sido preenchidos.",
      },
      {
        title: "Follow-up",
        description:
          "Clientes que fizeram uma consulta, visitaram o imóvel ou jantaram uma vez — e nunca mais voltaram. Não por falta de interesse, por falta de contacto.",
      },
      {
        title: "Dados dispersos",
        description:
          "Informação em Excel, papel, WhatsApp e e-mail, tudo separado. Ninguém sabe ao certo o histórico de cada cliente.",
      },
    ],
  },
  en: {
    heading: "Where does the time go?",
    problems: [
      {
        title: "Missed enquiries",
        description:
          "Missed calls, unanswered WhatsApp messages at weekends, leads that disappear before booking. Every unanswered enquiry is revenue walking out the door.",
      },
      {
        title: "No-shows and gaps",
        description:
          "Manual confirmations that never happen. Clients who don't show up without warning. Gaps in the calendar that could have been filled.",
      },
      {
        title: "Lost follow-up",
        description:
          "Clients who had a consultation, viewed the property, or dined once — and never came back. Not from lack of interest, from lack of contact.",
      },
      {
        title: "Scattered data",
        description:
          "Information spread across spreadsheets, paper, WhatsApp, and email. Nobody really knows each client's history.",
      },
    ],
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessProblems = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <section className="my-8 md:my-12 lg:my-16">
      <h2 className="heading-1 mb-10 md:w-1/2">{t.heading}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {t.problems.map((problem) => (
          <div key={problem.title}>
            <h3 className="mb-2 font-mono text-sm font-medium uppercase tracking-wide text-ruby">
              {problem.title}
            </h3>
            <p className="body-2">{problem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessProblems;
