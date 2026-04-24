import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "Como funciona",
    steps: [
      {
        number: "01",
        title: "Conversa gratuita",
        description:
          "20 minutos para perceber o negócio, o que está a correr bem e o que está a roubar tempo.",
      },
      {
        number: "02",
        title: "Diagnóstico",
        description:
          "Identificamos as tarefas com maior impacto para automatizar e apresentamos uma proposta clara.",
      },
      {
        number: "03",
        title: "Implementação",
        description:
          "Configuramos e testamos tudo em 1 a 2 semanas. Sem jargão, sem surpresas.",
      },
      {
        number: "04",
        title: "Funciona",
        description:
          "O sistema trabalha por si, 24/7. Raphael fica disponível para suporte e ajustes.",
      },
    ],
  },
  en: {
    heading: "How it works",
    steps: [
      {
        number: "01",
        title: "Free conversation",
        description:
          "20 minutes to understand your business, what's working well, and what's eating your time.",
      },
      {
        number: "02",
        title: "Diagnosis",
        description:
          "We identify the highest-impact tasks to automate and present a clear proposal.",
      },
      {
        number: "03",
        title: "Implementation",
        description:
          "We set up and test everything in 1 to 2 weeks. No jargon, no surprises.",
      },
      {
        number: "04",
        title: "It works",
        description:
          "The system runs for you, 24/7. Raphael remains available for support and adjustments.",
      },
    ],
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessHowItWorks = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <section className="my-8 md:my-12 lg:my-16">
      <h2 className="heading-1 mb-10">{t.heading}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step) => (
          <div key={step.number} className="flex flex-col">
            <span className="mb-3 font-mono text-3xl font-bold text-ruby">
              {step.number}
            </span>
            <h3 className="mb-2 font-mono text-sm font-medium uppercase tracking-wide">
              {step.title}
            </h3>
            <p className="body-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessHowItWorks;
