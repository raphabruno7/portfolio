/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    eyebrow: "Silver Coast · Portugal",
    headline:
      "O seu negócio perde horas todos os dias com tarefas que podiam estar automáticas.",
    body: "Raphael Bruno é developer e especialista em automação. Trabalha com restaurantes, clínicas, guest houses, imobiliárias e escritórios na Silver Coast — negócios que querem trabalhar melhor, sem contratar mais.",
    cta: "Sessão gratuita de 20 min",
    ctaSecondary: "Falar no WhatsApp",
    note: "Sem compromisso. Apenas uma conversa.",
  },
  en: {
    eyebrow: "Silver Coast · Portugal",
    headline:
      "Your business loses hours every day on tasks that could run automatically.",
    body: "Raphael Bruno is a developer and automation specialist. He works with restaurants, clinics, guest houses, estate agents, and law offices across the Silver Coast — businesses that want to work smarter, without hiring more people.",
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
