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
    <header className="flex flex-col py-8 md:py-12 lg:py-16 2xl:py-24">
      <p className="mb-4 font-mono text-sm text-brown">{t.eyebrow}</p>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <div className="w-full md:w-7/12">
          <h1 className="heading-1">{t.headline}</h1>
        </div>
        <div className="w-full md:w-5/12">
          <p className="body-2 mb-6">{t.body}</p>
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
          <p className="mt-4 font-mono text-xs text-brown">{t.note}</p>
        </div>
      </div>
    </header>
  );
};

export default LocalBusinessHero;
