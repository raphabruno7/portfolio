import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "O problema que ninguém resolve.",
    intro: "Não é falta de clientes. É que o negócio está sempre a perder receita em silêncio — nos momentos em que ninguém está a olhar.",
    problems: [
      {
        title: "Atendimento",
        description: "Telefonemas perdidos, WhatsApp sem resposta ao fim-de-semana, clientes que desaparecem antes de marcar. Cada lead não respondida é receita que sai pela porta.",
      },
      {
        title: "Reservas e faltas",
        description: "Confirmações manuais que ninguém faz. Clientes que não aparecem sem avisar. Agenda com buracos que podiam ter sido preenchidos.",
      },
      {
        title: "Follow-up",
        description: "Clientes que fizeram uma consulta, visitaram o imóvel ou jantaram uma vez — e nunca mais voltaram. Não por falta de interesse, por falta de contacto.",
      },
      {
        title: "Dados dispersos",
        description: "Informação em Excel, papel, WhatsApp e e-mail, tudo separado. Ninguém sabe ao certo o histórico de cada cliente.",
      },
    ],
  },
  en: {
    heading: "The problem nobody solves.",
    intro: "It's not a lack of clients. It's that your business is silently losing revenue — in the moments when nobody is watching.",
    problems: [
      {
        title: "Missed enquiries",
        description: "Missed calls, unanswered WhatsApp messages at weekends, leads that disappear before booking. Every unanswered enquiry is revenue walking out the door.",
      },
      {
        title: "No-shows and gaps",
        description: "Manual confirmations that never happen. Clients who don't show up without warning. Gaps in the calendar that could have been filled.",
      },
      {
        title: "Lost follow-up",
        description: "Clients who had a consultation, viewed the property, or dined once — and never came back. Not from lack of interest, from lack of contact.",
      },
      {
        title: "Scattered data",
        description: "Information spread across spreadsheets, paper, WhatsApp, and email. Nobody really knows each client's history.",
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
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:gap-16">
        <h2 className="heading-1 md:w-1/2">{t.heading}</h2>
        <p className="font-inter text-sm leading-relaxed text-brown md:w-1/2 md:self-end md:text-base">
          {t.intro}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {t.problems.map((problem) => (
          <div key={problem.title}>
            <h3 className="callout-1 mb-3">{problem.title}</h3>
            <p className="font-inter text-sm leading-relaxed md:text-base">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessProblems;
