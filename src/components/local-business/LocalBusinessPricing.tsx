import Button from "@/components/Button";
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    note: "Todos os preços em EUR, sem IVA. Setup = implementação única. Mensal = manutenção + suporte.",
    cta: "Começar agora",
    packages: [
      {
        name: "Starter",
        setup: "€400",
        monthly: "€90/mês",
        includes: [
          "Atendimento WhatsApp 24/7",
          "Respostas a FAQ",
          "Triagem de pedidos",
        ],
      },
      {
        name: "Growth",
        setup: "€800",
        monthly: "€160/mês",
        includes: [
          "Tudo do Starter",
          "Agendamento automático",
          "Confirmações automáticas",
          "Remarcações automáticas",
        ],
      },
      {
        name: "Pro",
        setup: "€1.500",
        monthly: "€280/mês",
        includes: [
          "Tudo do Growth",
          "CRM com sync automático",
          "Follow-up automático",
          "Qualificação de leads",
        ],
      },
      {
        name: "Full",
        setup: "€3.000",
        monthly: "€450/mês",
        includes: [
          "Tudo do Pro",
          "Prospecção activa B2B",
          "Campanhas WhatsApp",
          "Portal web do cliente",
        ],
      },
    ],
  },
  en: {
    note: "All prices in EUR, excluding VAT. Setup = one-time implementation. Monthly = maintenance + support.",
    cta: "Get started",
    packages: [
      {
        name: "Starter",
        setup: "€400",
        monthly: "€90/mo",
        includes: [
          "WhatsApp Support 24/7",
          "FAQ responses",
          "Request triage",
        ],
      },
      {
        name: "Growth",
        setup: "€800",
        monthly: "€160/mo",
        includes: [
          "Everything in Starter",
          "Automatic scheduling",
          "Automatic confirmations",
          "Automatic rescheduling",
        ],
      },
      {
        name: "Pro",
        setup: "€1,500",
        monthly: "€280/mo",
        includes: [
          "Everything in Growth",
          "CRM with auto sync",
          "Automatic follow-up",
          "Lead qualification",
        ],
      },
      {
        name: "Full",
        setup: "€3,000",
        monthly: "€450/mo",
        includes: [
          "Everything in Pro",
          "Active B2B prospecting",
          "WhatsApp campaigns",
          "Client web portal",
        ],
      },
    ],
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessPricing = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <section className="my-8 md:my-12 lg:my-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {t.packages.map((pkg) => (
          <div
            key={pkg.name}
            className="flex flex-col border border-black p-5 lg:p-6"
          >
            <h3 className="mb-1 font-mono text-sm font-bold uppercase tracking-wide">
              {pkg.name}
            </h3>
            <p className="mb-1 text-2xl font-bold">{pkg.setup}</p>
            <p className="mb-4 font-mono text-sm text-brown">+ {pkg.monthly}</p>
            <ul className="mb-6 flex flex-col gap-2">
              {pkg.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 font-mono text-xs">
                  <span className="mt-0.5 text-ruby">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Button
                href="https://cal.eu/raphael-bruno-92p2gw/sessao-diagnostico-20-min"
                className="w-full text-center"
                external
              >
                {t.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 font-mono text-xs text-brown">{t.note}</p>
    </section>
  );
};

export default LocalBusinessPricing;
