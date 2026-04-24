"use client";

import { useState } from "react";
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "As dúvidas que toda a gente tem",
    faqs: [
      {
        q: "Os clientes vão perceber que é automático?",
        a: "Depende do que quiser. O sistema pode identificar-se como assistente digital ou comunicar de forma natural. A escolha é sua — o que não muda é a qualidade e rapidez da resposta.",
      },
      {
        q: "E se responder algo errado ao cliente?",
        a: "O sistema responde apenas com base na informação que fornece — horários, serviços, preços. Não inventa. Se surgir uma pergunta sem resposta, reencaminha para si ou regista para acompanhamento.",
      },
      {
        q: "Tenho de mudar o meu número de WhatsApp?",
        a: "Não. O sistema integra com o número que já usa. A configuração é feita sem alterar o que está em funcionamento.",
      },
      {
        q: "Quanto tempo demora a implementar?",
        a: "A maioria dos sistemas fica operacional entre 3 a 7 dias após a sessão de diagnóstico. Não precisa de equipa de IT nem de preparação técnica da sua parte.",
      },
      {
        q: "Funciona com o software que já uso?",
        a: "Na maioria dos casos, sim — Google Calendar, Outlook, ferramentas de agendamento, CRMs. Se tiver dúvidas sobre um software específico, é exactamente isso que discutimos na conversa inicial.",
      },
      {
        q: "E se quiser parar ou mudar alguma coisa?",
        a: "Sem fidelização. Pode ajustar, pausar ou cancelar a qualquer momento. O suporte mensal inclui alterações de conteúdo, horários e fluxos.",
      },
    ],
  },
  en: {
    heading: "Questions everyone asks",
    faqs: [
      {
        q: "Will clients notice it's automated?",
        a: "That's up to you. The system can introduce itself as a digital assistant or communicate naturally. Either way, the quality and speed of the reply stays the same.",
      },
      {
        q: "What if it gives a client the wrong answer?",
        a: "The system only responds based on the information you provide — hours, services, prices. It doesn't make things up. If a question comes in that it can't answer, it flags it for you.",
      },
      {
        q: "Do I have to change my WhatsApp number?",
        a: "No. The system works with the number your business already uses. Setup is done without changing anything that's already working.",
      },
      {
        q: "How long does it take to set up?",
        a: "Most systems are live within 3 to 7 days of the diagnosis session. No IT team needed, no technical preparation on your end.",
      },
      {
        q: "Does it work with the software I already use?",
        a: "In most cases, yes — Google Calendar, Outlook, scheduling tools, CRMs. If you're unsure about a specific tool, that's exactly what we cover in the initial conversation.",
      },
      {
        q: "What if I want to stop or change something?",
        a: "No lock-in. You can adjust, pause, or cancel at any time. Monthly support includes changes to content, hours, and flows.",
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
              <span className="font-noto text-base font-medium md:text-lg">{faq.q}</span>
              <span className="mt-1 shrink-0 font-overpass text-sm font-semibold text-ruby">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <p className="pb-6 font-inter text-sm leading-relaxed text-brown md:text-base">
                {faq.a}
              </p>
            )}
          </div>
        ))}
        <div className="border-t border-black" />
      </div>
    </section>
  );
};

export default LocalBusinessFAQ;
