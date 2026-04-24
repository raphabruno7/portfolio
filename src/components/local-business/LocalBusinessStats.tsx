import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    stats: [
      {
        value: "34%",
        label: "das marcações chegam fora do horário de atendimento",
      },
      {
        value: "5×",
        label: "mais conversões quando a primeira resposta chega em menos de 5 minutos",
      },
      {
        value: "98%",
        label: "de taxa de abertura no WhatsApp, contra 20% no e-mail",
      },
      {
        value: "3h+",
        label: "por dia que o dono médio de uma PME gasta em tarefas administrativas repetitivas",
      },
    ],
  },
  en: {
    stats: [
      {
        value: "34%",
        label: "of bookings arrive outside business hours",
      },
      {
        value: "5×",
        label: "more conversions when the first reply arrives in under 5 minutes",
      },
      {
        value: "98%",
        label: "open rate on WhatsApp, compared to 20% for email",
      },
      {
        value: "3h+",
        label: "per day the average SME owner spends on repetitive admin tasks",
      },
    ],
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessStats = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <section className="my-8 md:my-12 lg:my-16">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {t.stats.map((stat) => (
          <div key={stat.value} className="flex flex-col">
            <span className="mb-2 font-mono text-4xl font-bold text-ruby lg:text-5xl">
              {stat.value}
            </span>
            <p className="font-mono text-xs leading-relaxed text-brown">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessStats;
