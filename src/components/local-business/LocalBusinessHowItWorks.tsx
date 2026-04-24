import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "Como funciona",
    badge: "Ativo em menos de 1 semana",
    steps: [
      {
        number: "01",
        title: "Conversa gratuita",
        description: "20 minutos para perceber o negócio, o que está a correr bem e o que está a roubar tempo. Sem IT, sem preparação.",
      },
      {
        number: "02",
        title: "Diagnóstico",
        description: "Identificamos as tarefas com maior impacto para automatizar e apresentamos uma proposta clara — com custo, prazo e resultado esperado.",
      },
      {
        number: "03",
        title: "Implementação",
        description: "Configuramos e testamos tudo em 1 a 2 semanas. O negócio continua a funcionar normalmente durante o processo.",
      },
      {
        number: "04",
        title: "Funciona",
        description: "O sistema trabalha por si, 24/7. Raphael fica disponível para suporte, ajustes e melhorias contínuas.",
      },
    ],
  },
  en: {
    heading: "How it works",
    badge: "Live in less than 1 week",
    steps: [
      {
        number: "01",
        title: "Free conversation",
        description: "20 minutes to understand your business, what's working, and what's eating your time. No IT, no preparation needed.",
      },
      {
        number: "02",
        title: "Diagnosis",
        description: "We identify the highest-impact tasks to automate and present a clear proposal — with cost, timeline, and expected outcome.",
      },
      {
        number: "03",
        title: "Implementation",
        description: "We set up and test everything in 1 to 2 weeks. Your business keeps running normally throughout.",
      },
      {
        number: "04",
        title: "It works",
        description: "The system runs for you, 24/7. Raphael remains available for support, adjustments, and ongoing improvements.",
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
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="heading-1">{t.heading}</h2>
        <span className="inline-block self-start rounded-full border border-black px-3 py-1 font-overpass text-xs font-semibold uppercase tracking-widest md:self-auto">
          {t.badge}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step) => (
          <div key={step.number} className="flex flex-col">
            <span className="mb-3 font-noto text-3xl font-medium text-ruby">
              {step.number}
            </span>
            <h3 className="callout-1 mb-3">{step.title}</h3>
            <p className="font-inter text-sm leading-relaxed md:text-base">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessHowItWorks;
