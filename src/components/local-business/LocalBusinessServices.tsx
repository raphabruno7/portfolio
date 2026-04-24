import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "O que posso fazer pelo seu negócio",
    services: [
      {
        title: "Atendimento WhatsApp 24/7",
        description:
          "Responde a perguntas frequentes, qualifica leads e tria pedidos sem interromper a equipa.",
      },
      {
        title: "Agendamento automático",
        description:
          "Marcações via WhatsApp integradas com o calendário. Sem telefonemas, sem e-mails.",
      },
      {
        title: "Confirmações e remarcações",
        description:
          "Confirma 24h antes, remarca automaticamente se o cliente não puder.",
      },
      {
        title: "Qualificação de leads",
        description:
          "Filtra quem vale uma reunião antes de chegar ao humano. Menos tempo perdido.",
      },
      {
        title: "Follow-up automático",
        description:
          "Lembra honorários, visitas agendadas, renovações e check-ins. Nada fica por fazer.",
      },
      {
        title: "CRM com sync automático",
        description:
          "Pipeline de vendas com actividades registadas sem entrada manual.",
      },
      {
        title: "Prospecção activa B2B",
        description:
          "Identificação e contacto com potenciais clientes locais via WhatsApp.",
      },
      {
        title: "Campanhas WhatsApp",
        description:
          "Envio segmentado para a base de contactos: promoções, reactivação, novidades.",
      },
      {
        title: "Portal web do cliente",
        description:
          "Portal personalizado para o negócio com informação centralizada.",
      },
      {
        title: "Migração de dados",
        description:
          "Migração de Excel, Sheets ou CRM antigo para sistema novo, sem perder informação.",
      },
    ],
  },
  en: {
    heading: "What I can do for your business",
    services: [
      {
        title: "WhatsApp Support 24/7",
        description:
          "Answers FAQs, qualifies leads, and triages requests without interrupting your team.",
      },
      {
        title: "Automatic Scheduling",
        description:
          "Bookings via WhatsApp integrated with your calendar. No calls, no emails.",
      },
      {
        title: "Confirmations & Rescheduling",
        description:
          "Confirms 24h in advance, reschedules automatically if the client can't make it.",
      },
      {
        title: "Lead Qualification",
        description:
          "Filters who's worth a meeting before they reach you. Less time wasted.",
      },
      {
        title: "Automatic Follow-up",
        description:
          "Reminds clients about fees, appointments, renewals, and check-ins. Nothing falls through.",
      },
      {
        title: "CRM with Auto Sync",
        description:
          "Sales pipeline with activities logged automatically — no manual data entry.",
      },
      {
        title: "Active B2B Prospecting",
        description:
          "Identify and reach out to local potential clients via WhatsApp.",
      },
      {
        title: "WhatsApp Campaigns",
        description:
          "Segmented sends to your contact base: promotions, reactivation, news.",
      },
      {
        title: "Client Web Portal",
        description:
          "A custom portal for your business with centralised information.",
      },
      {
        title: "Data Migration",
        description:
          "Move from Excel, Sheets, or an old CRM to a new system without losing anything.",
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.services.map((service) => (
          <div key={service.title} className="border border-black p-5 lg:p-6">
            <h3 className="mb-2 font-mono text-sm font-medium uppercase tracking-wide">
              {service.title}
            </h3>
            <p className="body-2 text-brown">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessServices;
