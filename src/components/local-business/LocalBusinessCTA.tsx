import Button from "@/components/Button";
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "Pronto para recuperar o seu tempo?",
    body: "Marque uma sessão gratuita de 20 minutos. Sem compromisso — é só uma conversa para perceber se faz sentido trabalharmos juntos.",
    cta: "Marcar sessão gratuita",
    ctaSecondary: "Falar no WhatsApp",
    note: "Raphael atende na Silver Coast: Óbidos, Caldas da Rainha, Lourinhã, Bombarral, Atouguia e arredores.",
  },
  en: {
    heading: "Ready to get your time back?",
    body: "Book a free 20-minute session. No commitment — it's just a conversation to see if we're a good fit.",
    cta: "Book free session",
    ctaSecondary: "Message on WhatsApp",
    note: "Raphael serves the Silver Coast: Óbidos, Caldas da Rainha, Lourinhã, Bombarral, Atouguia and surroundings.",
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessCTA = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <section className="mb-16 flex flex-col items-start py-12 md:py-16 lg:py-24">
      <h2 className="heading-1 mb-6 md:w-2/3">{t.heading}</h2>
      <p className="body-2 mb-8 md:w-1/2">{t.body}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          href="https://cal.eu/raphael-bruno-92p2gw/sessao-diagnostico-20-min"
          external
        >
          {t.cta}
        </Button>
        <Button href="https://wa.me/351931822816" external>
          {t.ctaSecondary}
        </Button>
      </div>
      <p className="mt-8 font-mono text-xs text-brown">{t.note}</p>
    </section>
  );
};

export default LocalBusinessCTA;
