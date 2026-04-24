import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "Para o seu tipo de negócio",
    sectors: [
      {
        name: "Restaurantes e cafés",
        description: "Reservas confirmadas automaticamente, mesmo quando a sala está cheia e o telemóvel está em silêncio.",
      },
      {
        name: "Clínicas e consultórios",
        description: "Marcações feitas fora de horas, confirmações automáticas 24h antes e lista de espera gerida sem esforço.",
      },
      {
        name: "Guest houses e alojamento",
        description: "Hóspedes atendidos em PT e EN a qualquer hora — check-in, WiFi, parqueamento — sem depender da recepção.",
      },
      {
        name: "Imobiliárias",
        description: "Leads qualificados antes de chegar ao agente. Visitas agendadas automaticamente. Nenhum contacto perdido.",
      },
      {
        name: "Advocacia e serviços",
        description: "Primeiro contacto respondido ao minuto. Triagem do pedido e agendamento de consulta sem intervenção humana.",
      },
      {
        name: "Salões e bem-estar",
        description: "Cancelamentos preenchidos automaticamente pela lista de espera. Sem buracos na agenda, sem chamadas de última hora.",
      },
    ],
  },
  en: {
    heading: "For your type of business",
    sectors: [
      {
        name: "Restaurants and cafés",
        description: "Bookings confirmed automatically, even when the floor is full and the phone is on silent.",
      },
      {
        name: "Clinics and practices",
        description: "Appointments booked out of hours, automatic confirmations 24h before, and a waiting list managed without effort.",
      },
      {
        name: "Guest houses and rentals",
        description: "Guests assisted in PT and EN at any hour — check-in, WiFi, parking — without relying on reception.",
      },
      {
        name: "Estate agencies",
        description: "Leads qualified before they reach the agent. Viewings scheduled automatically. No contact lost.",
      },
      {
        name: "Law firms and services",
        description: "First contact answered in minutes. Request triaged and consultation booked without human intervention.",
      },
      {
        name: "Salons and wellness",
        description: "Cancellations filled automatically from the waiting list. No gaps, no last-minute calls.",
      },
    ],
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessSectors = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <section className="my-8 md:my-12 lg:my-16">
      <h2 className="heading-1 mb-10">{t.heading}</h2>
      <div className="grid grid-cols-1 gap-px border border-black md:grid-cols-2 lg:grid-cols-3">
        {t.sectors.map((sector) => (
          <div key={sector.name} className="flex flex-col gap-3 bg-beige p-5 lg:p-6">
            <h3 className="callout-1">{sector.name}</h3>
            <p className="font-inter text-sm leading-relaxed text-brown md:text-base">
              {sector.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessSectors;
