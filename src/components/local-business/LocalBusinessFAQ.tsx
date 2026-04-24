"use client";

import { useState } from "react";
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "As dúvidas que toda a gente tem",
    faqs: [
      {
        q: "Os clientes vão perceber que é automático?",
        a: "Depende do que quiser. O sistema pode ser transparente ('Olá, sou o assistente digital da Clínica X') ou comunicar de forma natural sem se identificar como automatizado. A escolha é sua — o que não muda é a qualidade e rapidez da resposta.",
      },
      {
        q: "E se responder algo errado ao cliente?",
        a: "O sistema responde apenas com base na informação que fornece — horários, serviços, preços, procedimentos. Não inventa. Se surgir uma pergunta para a qual não tem resposta, reencaminha para si ou anota para acompanhamento.",
      },
      {
        q: "Tenho de mudar o meu número de WhatsApp ou telefone?",
        a: "Não. O sistema integra com o número que já usa no negócio. Para WhatsApp, utiliza a API oficial do WhatsApp Business. Para outros canais, a configuração é feita sem alterar o que já está em funcionamento.",
      },
      {
        q: "Quanto tempo demora a implementar?",
        a: "A maioria dos sistemas fica operacional entre 3 a 7 dias após a sessão de diagnóstico. Não precisa de equipa de IT nem de preparação técnica da sua parte.",
      },
      {
        q: "Funciona com o software que já uso?",
        a: "Na maioria dos casos, sim. Os sistemas integram com Google Calendar, Outlook, ferramentas de agendamento, CRMs e outros serviços via API. Se tiver dúvidas sobre um software específico, é exactamente isso que discutimos na conversa inicial.",
      },
      {
        q: "E se quiser parar ou mudar alguma coisa?",
        a: "Sem fidelização. Pode ajustar, pausar ou cancelar a qualquer momento. O suporte mensal inclui alterações de conteúdo, horários, fluxos e integrações — o sistema acompanha o negócio à medida que evolui.",
      },
    ],
  },
  en: {
    heading: "Questions everyone asks",
    faqs: [
      {
        q: "Will clients notice it's automated?",
        a: "That's up to you. The system can be transparent ('Hi, I'm the digital assistant for Clinic X') or communicate naturally without identifying itself as automated. Either way, the quality and speed of the reply stays the same.",
      },
      {
        q: "What if it gives a client the wrong answer?",
        a: "The system only responds based on the information you provide — opening hours, services, prices, procedures. It doesn't make things up. If a question comes in that it can't answer, it flags it for you or routes it to a human.",
      },
      {
        q: "Do I have to change my WhatsApp number or phone number?",
        a: "No. The system works with the number your business already uses. For WhatsApp, it uses the official WhatsApp Business API. For other channels, setup is done without changing anything that's already working.",
      },
      {
        q: "How long does it take to set up?",
        a: "Most systems are live within 3 to 7 days of the diagnosis session. No IT team needed, no technical preparation on your end.",
      },
      {
        q: "Does it work with the software I already use?",
        a: "In most cases, yes. Systems integrate with Google Calendar, Outlook, scheduling tools, CRMs, and other services via API. If you're unsure about a specific tool, that's exactly what we cover in the initial conversation.",
      },
      {
        q: "What if I want to stop or change something?",
        a: "No lock-in. You can adjust, pause, or cancel at any time. The monthly support includes changes to content, hours, flows, and integrations — the system grows with your business.",
      },
    ],
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessFAQ = ({ lang }: Props) => {
  const t = content[lang];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="my-8 md:my-12 lg:my-16">
      <h2 className="heading-1 mb-10">{t.heading}</h2>
      <div className="flex flex-col">
        {t.faqs.map((faq, i) => (
          <div key={i} className="border-t border-black">
            <button
              className="flex w-full items-start justify-between gap-8 py-5 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-mono text-sm font-medium">{faq.q}</span>
              <span className="mt-0.5 shrink-0 font-mono text-ruby">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <p className="body-2 pb-6 text-brown">{faq.a}</p>
            )}
          </div>
        ))}
        <div className="border-t border-black" />
      </div>
    </section>
  );
};

export default LocalBusinessFAQ;
