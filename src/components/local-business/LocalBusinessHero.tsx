/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    eyebrow: "Silver Coast · Portugal",
    headline: "O seu negócio nunca mais perde um cliente. Nem às 23h.",
    body: "Raphael Bruno cria sistemas de automação para negócios locais na Silver Coast — para que as marcações cheguem, os leads sejam respondidos e o follow-up aconteça, mesmo quando a equipa está ocupada ou o escritório está fechado.",
    cta: "Sessão gratuita de 20 min",
    ctaSecondary: "Falar no WhatsApp",
    note: "Sem compromisso. Apenas uma conversa.",
  },
  en: {
    eyebrow: "Silver Coast · Portugal",
    headline: "Your business never loses a client again. Not even at 11pm.",
    body: "Raphael Bruno builds automation systems for local businesses across the Silver Coast — so bookings come in, leads get answered, and follow-up happens even when your team is busy or your office is closed.",
    cta: "Free 20-min session",
    ctaSecondary: "Message on WhatsApp",
    note: "No commitment. Just a conversation.",
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessHero = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <header className="mb-0 flex min-h-[60vh] flex-col items-stretch justify-between md:mb-12 md:flex-row lg:mb-16 2xl:mb-20">
      <section className="w-full md:w-5/12">
        <img
          className="m-0 block h-full w-full object-cover object-top p-0"
          src="/profile-negocios-locais.jpg"
          alt="Raphael Bruno"
        />
      </section>
      <section className="flex w-full flex-col justify-end pb-8 pt-8 md:w-6/12 md:pb-0 md:pt-12 lg:pt-16">
        <p className="mb-4 font-mono text-sm text-brown">{t.eyebrow}</p>
        <h1 className="heading-1">{t.headline}</h1>
        <p className="body-2 mt-5 xl:mt-8 2xl:mt-10">{t.body}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row xl:mt-8">
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
        <p className="mt-4 font-mono text-xs text-brown">{t.note}</p>
      </section>
    </header>
  );
};

export default LocalBusinessHero;
