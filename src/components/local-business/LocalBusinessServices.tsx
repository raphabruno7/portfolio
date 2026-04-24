import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "O que posso fazer pelo seu negócio",
    services: [
      {
        title: "Atendimento WhatsApp 24/7",
        description: "Responde, qualifica e tria pedidos sem interromper a equipa. O negócio nunca fica sem resposta.",
      },
      {
        title: "Agendamento e confirmações",
        description: "Marcações via WhatsApp integradas com o calendário. Confirmação automática 24h antes. Remarcação se o cliente não puder.",
      },
      {
        title: "Follow-up automático",
        description: "Lembra consultas, visitas, renovações e check-ins no momento certo. Sem depender de memória ou Post-its.",
      },
      {
        title: "Qualificação de leads",
        description: "Filtra quem vale uma reunião antes de chegar a si. Menos tempo em conversas que não convertem.",
      },
      {
        title: "CRM e pipeline de vendas",
        description: "Actividades registadas automaticamente. Pipeline actualizado sem entrada manual. Histórico sempre acessível.",
      },
      {
        title: "Campanhas e prospecção",
        description: "Envio segmentado para a base de contactos e identificação activa de novos clientes locais via WhatsApp.",
      },
    ],
  },
  en: {
    heading: "What I can do for your business",
    services: [
      {
        title: "WhatsApp Support 24/7",
        description: "Responds, qualifies, and triages requests without interrupting your team. Your business is never left without a reply.",
      },
      {
        title: "Scheduling and confirmations",
        description: "Bookings via WhatsApp integrated with your calendar. Automatic confirmation 24h before. Rescheduling if the client can't make it.",
      },
      {
        title: "Automatic follow-up",
        description: "Reminds clients about appointments, visits, renewals, and check-ins at the right moment. No memory or Post-its needed.",
      },
      {
        title: "Lead qualification",
        description: "Filters who's worth a meeting before they reach you. Less time on conversations that don't convert.",
      },
      {
        title: "CRM and sales pipeline",
        description: "Activities logged automatically. Pipeline updated without manual entry. Full history always accessible.",
      },
      {
        title: "Campaigns and prospecting",
        description: "Segmented sends to your contact base and active identification of new local clients via WhatsApp.",
      },
    ],
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessServices = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <section className="my-8 md:my-12 lg:my-16">
      <h2 className="heading-1 mb-10">{t.heading}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {t.services.map((service) => (
          <div key={service.title}>
            <h3 className="callout-1 mb-3">{service.title}</h3>
            <p className="font-inter text-sm leading-relaxed text-brown md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessServices;
