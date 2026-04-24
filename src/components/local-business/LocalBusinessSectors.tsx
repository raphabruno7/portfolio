import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "Para o seu tipo de negócio",
    sectors: [
      {
        name: "Restaurantes e cafés",
        scenario: "Cliente envia mensagem às 22h a perguntar se há mesa para sábado.",
        result:
          "O sistema responde de imediato, verifica disponibilidade e confirma a reserva — sem ninguém acordado.",
      },
      {
        name: "Clínicas e consultórios",
        scenario: "Doente quer marcar consulta mas liga fora de horas. Linha toca e não atende.",
        result:
          "O sistema recebe o pedido via WhatsApp, verifica a agenda do médico e envia confirmação com data e hora.",
      },
      {
        name: "Guest houses e alojamento local",
        scenario: "Hóspede pede informações sobre check-in, WiFi e parqueamento — às 7h da manhã.",
        result:
          "Resposta automática personalizada com todas as informações, em português ou inglês conforme o hóspede.",
      },
      {
        name: "Imobiliárias",
        scenario: "Lead viu imóvel online e enviou mensagem. Sem resposta em 30 min, contacta a concorrência.",
        result:
          "O sistema qualifica o lead de imediato, agenda visita e regista tudo no CRM — sem intervenção humana.",
      },
      {
        name: "Advocacia e serviços",
        scenario: "Potencial cliente envia e-mail com dúvida jurídica às 23h. Fica sem resposta até segunda.",
        result:
          "Resposta automática a confirmar recepção, triagem do pedido e agendamento de primeira consulta.",
      },
      {
        name: "Salões e bem-estar",
        scenario: "Clientes cancelam em cima da hora. Vaga fica em branco, sem tempo para preencher.",
        result:
          "Sistema deteta cancelamento, contacta automaticamente a lista de espera e preenche a vaga.",
      },
    ],
  },
  en: {
    heading: "For your type of business",
    sectors: [
      {
        name: "Restaurants and cafés",
        scenario: "A customer messages at 10pm asking about a table for Saturday.",
        result:
          "The system replies instantly, checks availability, and confirms the booking — with nobody awake.",
      },
      {
        name: "Clinics and practices",
        scenario: "A patient wants to book an appointment but calls outside hours. The line rings with no answer.",
        result:
          "The system takes the request via WhatsApp, checks the doctor's calendar, and sends a confirmation with date and time.",
      },
      {
        name: "Guest houses and holiday rentals",
        scenario: "A guest asks about check-in, WiFi, and parking — at 7am.",
        result:
          "Automatic personalised reply with all the information, in Portuguese or English depending on the guest.",
      },
      {
        name: "Estate agencies",
        scenario: "A lead saw a property online and sent a message. No reply in 30 minutes — they contact a competitor.",
        result:
          "The system qualifies the lead immediately, schedules a viewing, and logs everything in the CRM — no human needed.",
      },
      {
        name: "Law firms and professional services",
        scenario: "A potential client emails a legal question at 11pm. No reply until Monday.",
        result:
          "Automatic reply confirming receipt, request triaged, and first consultation scheduled.",
      },
      {
        name: "Salons and wellness",
        scenario: "A client cancels last minute. The slot sits empty with no time to fill it.",
        result:
          "System detects the cancellation, automatically contacts the waiting list, and fills the slot.",
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.sectors.map((sector) => (
          <div key={sector.name} className="flex flex-col border border-black p-5 lg:p-6">
            <h3 className="mb-4 font-mono text-sm font-bold uppercase tracking-wide">
              {sector.name}
            </h3>
            <div className="mb-3 rounded-sm bg-black px-3 py-2">
              <p className="font-mono text-xs leading-relaxed text-beige">
                &ldquo;{sector.scenario}&rdquo;
              </p>
            </div>
            <p className="body-2 mt-1 text-brown">{sector.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessSectors;
