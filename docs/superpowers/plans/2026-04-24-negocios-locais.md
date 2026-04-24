# /negocios-locais Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar a rota `/negocios-locais` no portfolio — página bilingue PT/EN para PMEs da Silver Coast, com detecção automática de idioma via `navigator.language` e toggle manual.

**Architecture:** Server Component shell em `src/app/negocios-locais/page.tsx` + Client Component `LocalBusinessPage.tsx` que gere o estado de idioma. Cada secção é um componente separado que recebe `lang: 'pt' | 'en'` como prop. Padrão idêntico à `advisory` page.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, classnames (`cx`). Sem dependências novas.

---

## File Map

| Ficheiro | Acção | Responsabilidade |
|---|---|---|
| `src/app/negocios-locais/page.tsx` | Criar | Server Component: metadata + render de `LocalBusinessPage` |
| `src/components/local-business/LocalBusinessPage.tsx` | Criar | Client Component: estado `lang`, detecção `navigator.language`, toggle PT/EN, composição das secções |
| `src/components/local-business/LocalBusinessHero.tsx` | Criar | Hero: headline, quem é Raphael, CTAs |
| `src/components/local-business/LocalBusinessProblems.tsx` | Criar | Problemas que resolve por tipo |
| `src/components/local-business/LocalBusinessHowItWorks.tsx` | Criar | 4 passos: Conversa → Diagnóstico → Implementação → Funciona |
| `src/components/local-business/LocalBusinessServices.tsx` | Criar | 10 serviços em grid de cards |
| `src/components/local-business/LocalBusinessPricing.tsx` | Criar | Tabela de preços: Starter / Growth / Pro / Full |
| `src/components/local-business/LocalBusinessProjects.tsx` | Criar | 3 cards linkando projectos existentes |
| `src/components/local-business/LocalBusinessCTA.tsx` | Criar | CTA final: Cal.com + WhatsApp |

---

## Task 1: Server Component + LocalBusinessPage shell

**Files:**
- Create: `src/app/negocios-locais/page.tsx`
- Create: `src/components/local-business/LocalBusinessPage.tsx`

- [ ] **Step 1: Criar `src/app/negocios-locais/page.tsx`**

```tsx
import { Metadata } from "next";
import LocalBusinessPage from "@/components/local-business/LocalBusinessPage";

export const metadata: Metadata = {
  title: "Negócios Locais — Raphael Bruno",
  description:
    "Automação e presença digital para negócios locais na Silver Coast. Atendimento WhatsApp 24/7, agendamento automático, CRM e muito mais.",
};

const NegociosLocaisPage = () => {
  return <LocalBusinessPage />;
};

export default NegociosLocaisPage;
```

- [ ] **Step 2: Criar `src/components/local-business/LocalBusinessPage.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Page from "@/components/layouts/Page";
import LocalBusinessHero from "./LocalBusinessHero";
import LocalBusinessProblems from "./LocalBusinessProblems";
import LocalBusinessHowItWorks from "./LocalBusinessHowItWorks";
import LocalBusinessServices from "./LocalBusinessServices";
import LocalBusinessPricing from "./LocalBusinessPricing";
import LocalBusinessProjects from "./LocalBusinessProjects";
import LocalBusinessCTA from "./LocalBusinessCTA";

export type Lang = "pt" | "en";

const LocalBusinessPage = () => {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    if (navigator.language.startsWith("en")) {
      setLang("en");
    }
  }, []);

  return (
    <Page>
      <Container>
        <div className="flex justify-end pt-4">
          <div className="flex items-center gap-2 font-mono text-sm">
            <button
              onClick={() => setLang("pt")}
              className={`transition-colors ${lang === "pt" ? "font-bold text-black" : "text-brown hover:text-black"}`}
            >
              PT
            </button>
            <span className="text-brown">|</span>
            <button
              onClick={() => setLang("en")}
              className={`transition-colors ${lang === "en" ? "font-bold text-black" : "text-brown hover:text-black"}`}
            >
              EN
            </button>
          </div>
        </div>
        <LocalBusinessHero lang={lang} />
        <Divider />
        <LocalBusinessProblems lang={lang} />
        <Divider />
        <LocalBusinessHowItWorks lang={lang} />
        <Divider />
        <LocalBusinessServices lang={lang} />
        <section className="my-8">
          <Divider text={lang === "pt" ? "Preços" : "Pricing"} />
        </section>
        <LocalBusinessPricing lang={lang} />
        <section className="my-8">
          <Divider text={lang === "pt" ? "Projectos" : "Projects"} />
        </section>
        <LocalBusinessProjects lang={lang} />
        <LocalBusinessCTA lang={lang} />
      </Container>
    </Page>
  );
};

export default LocalBusinessPage;
```

- [ ] **Step 3: Confirmar que a rota carrega (sem erros de import)**

```bash
cd /Users/raphaelbruno/projects/portfolio && npx tsc --noEmit 2>&1 | head -20
```

Esperado: erros de "cannot find module" para os componentes que ainda não existem — normal nesta fase.

- [ ] **Step 4: Commit**

```bash
git add src/app/negocios-locais/page.tsx src/components/local-business/LocalBusinessPage.tsx
git commit -m "feat(negocios-locais): add route shell and language toggle"
```

---

## Task 2: LocalBusinessHero

**Files:**
- Create: `src/components/local-business/LocalBusinessHero.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
import Button from "@/components/Button";
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    eyebrow: "Silver Coast · Portugal",
    headline: "O seu negócio perde horas todos os dias com tarefas que podiam estar automáticas.",
    body: "Raphael Bruno é developer e especialista em automação. Trabalha com restaurantes, clínicas, guest houses, imobiliárias e escritórios na Silver Coast — negócios que querem trabalhar melhor, sem contratar mais.",
    cta: "Sessão gratuita de 20 min",
    ctaSecondary: "Falar no WhatsApp",
    note: "Sem compromisso. Apenas uma conversa.",
  },
  en: {
    eyebrow: "Silver Coast · Portugal",
    headline: "Your business loses hours every day on tasks that could run automatically.",
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
            <Button
              href="https://wa.me/351931822816"
              external
            >
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/local-business/LocalBusinessHero.tsx
git commit -m "feat(negocios-locais): add hero section"
```

---

## Task 3: LocalBusinessProblems

**Files:**
- Create: `src/components/local-business/LocalBusinessProblems.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "Onde é que o tempo vai embora?",
    problems: [
      {
        title: "Atendimento",
        description:
          "Telefonemas perdidos, WhatsApp sem resposta ao fim-de-semana, clientes que desaparecem antes de marcar. Cada lead não respondida é receita que sai pela porta.",
      },
      {
        title: "Reservas e faltas",
        description:
          "Confirmações manuais que ninguém faz. Clientes que não aparecem sem avisar. Agenda com buracos que podiam ter sido preenchidos.",
      },
      {
        title: "Follow-up",
        description:
          "Clientes que fizeram uma consulta, visitaram o imóvel ou jantaram uma vez — e nunca mais voltaram. Não por falta de interesse, por falta de contacto.",
      },
      {
        title: "Dados dispersos",
        description:
          "Informação em Excel, papel, WhatsApp e e-mail, tudo separado. Ninguém sabe ao certo o histórico de cada cliente.",
      },
    ],
  },
  en: {
    heading: "Where does the time go?",
    problems: [
      {
        title: "Missed enquiries",
        description:
          "Missed calls, unanswered WhatsApp messages at weekends, leads that disappear before booking. Every unanswered enquiry is revenue walking out the door.",
      },
      {
        title: "No-shows and gaps",
        description:
          "Manual confirmations that never happen. Clients who don't show up without warning. Gaps in the calendar that could have been filled.",
      },
      {
        title: "Lost follow-up",
        description:
          "Clients who had a consultation, viewed the property, or dined once — and never came back. Not from lack of interest, from lack of contact.",
      },
      {
        title: "Scattered data",
        description:
          "Information spread across spreadsheets, paper, WhatsApp, and email. Nobody really knows each client's history.",
      },
    ],
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessProblems = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <section className="my-8 md:my-12 lg:my-16">
      <h2 className="heading-1 mb-10 md:w-1/2">{t.heading}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {t.problems.map((problem) => (
          <div key={problem.title}>
            <h3 className="mb-2 font-mono text-sm font-medium uppercase tracking-wide text-ruby">
              {problem.title}
            </h3>
            <p className="body-2">{problem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessProblems;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/local-business/LocalBusinessProblems.tsx
git commit -m "feat(negocios-locais): add problems section"
```

---

## Task 4: LocalBusinessHowItWorks

**Files:**
- Create: `src/components/local-business/LocalBusinessHowItWorks.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "Como funciona",
    steps: [
      {
        number: "01",
        title: "Conversa gratuita",
        description: "20 minutos para perceber o negócio, o que está a correr bem e o que está a roubar tempo.",
      },
      {
        number: "02",
        title: "Diagnóstico",
        description: "Identificamos as tarefas com maior impacto para automatizar e apresentamos uma proposta clara.",
      },
      {
        number: "03",
        title: "Implementação",
        description: "Configuramos e testamos tudo em 1 a 2 semanas. Sem jargão, sem surpresas.",
      },
      {
        number: "04",
        title: "Funciona",
        description: "O sistema trabalha por si, 24/7. Raphael fica disponível para suporte e ajustes.",
      },
    ],
  },
  en: {
    heading: "How it works",
    steps: [
      {
        number: "01",
        title: "Free conversation",
        description: "20 minutes to understand your business, what's working well, and what's eating your time.",
      },
      {
        number: "02",
        title: "Diagnosis",
        description: "We identify the highest-impact tasks to automate and present a clear proposal.",
      },
      {
        number: "03",
        title: "Implementation",
        description: "We set up and test everything in 1 to 2 weeks. No jargon, no surprises.",
      },
      {
        number: "04",
        title: "It works",
        description: "The system runs for you, 24/7. Raphael remains available for support and adjustments.",
      },
    ],
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessHowItWorks = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <section className="my-8 md:my-12 lg:my-16">
      <h2 className="heading-1 mb-10">{t.heading}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step) => (
          <div key={step.number} className="flex flex-col">
            <span className="mb-3 font-mono text-3xl font-bold text-ruby">
              {step.number}
            </span>
            <h3 className="mb-2 font-mono text-sm font-medium uppercase tracking-wide">
              {step.title}
            </h3>
            <p className="body-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessHowItWorks;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/local-business/LocalBusinessHowItWorks.tsx
git commit -m "feat(negocios-locais): add how it works section"
```

---

## Task 5: LocalBusinessServices

**Files:**
- Create: `src/components/local-business/LocalBusinessServices.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "O que posso fazer pelo seu negócio",
    services: [
      { title: "Atendimento WhatsApp 24/7", description: "Responde a perguntas frequentes, qualifica leads e tria pedidos sem interromper a equipa." },
      { title: "Agendamento automático", description: "Marcações via WhatsApp integradas com o calendário. Sem telefonemas, sem e-mails." },
      { title: "Confirmações e remarcações", description: "Confirma 24h antes, remarca automaticamente se o cliente não puder." },
      { title: "Qualificação de leads", description: "Filtra quem vale uma reunião antes de chegar ao humano. Menos tempo perdido." },
      { title: "Follow-up automático", description: "Lembra honorários, visitas agendadas, renovações e check-ins. Nada fica por fazer." },
      { title: "CRM com sync automático", description: "Pipeline de vendas com actividades registadas sem entrada manual." },
      { title: "Prospecção activa B2B", description: "Identificação e contacto com potenciais clientes locais via WhatsApp." },
      { title: "Campanhas WhatsApp", description: "Envio segmentado para a base de contactos: promoções, reactivação, novidades." },
      { title: "Portal web do cliente", description: "Portal personalizado para o negócio com informação centralizada." },
      { title: "Migração de dados", description: "Migração de Excel, Sheets ou CRM antigo para sistema novo, sem perder informação." },
    ],
  },
  en: {
    heading: "What I can do for your business",
    services: [
      { title: "WhatsApp Support 24/7", description: "Answers FAQs, qualifies leads, and triages requests without interrupting your team." },
      { title: "Automatic Scheduling", description: "Bookings via WhatsApp integrated with your calendar. No calls, no emails." },
      { title: "Confirmations & Rescheduling", description: "Confirms 24h in advance, reschedules automatically if the client can't make it." },
      { title: "Lead Qualification", description: "Filters who's worth a meeting before they reach you. Less time wasted." },
      { title: "Automatic Follow-up", description: "Reminds clients about fees, appointments, renewals, and check-ins. Nothing falls through." },
      { title: "CRM with Auto Sync", description: "Sales pipeline with activities logged automatically — no manual data entry." },
      { title: "Active B2B Prospecting", description: "Identify and reach out to local potential clients via WhatsApp." },
      { title: "WhatsApp Campaigns", description: "Segmented sends to your contact base: promotions, reactivation, news." },
      { title: "Client Web Portal", description: "A custom portal for your business with centralised information." },
      { title: "Data Migration", description: "Move from Excel, Sheets, or an old CRM to a new system without losing anything." },
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
          <div
            key={service.title}
            className="border border-black p-5 lg:p-6"
          >
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/local-business/LocalBusinessServices.tsx
git commit -m "feat(negocios-locais): add services section"
```

---

## Task 6: LocalBusinessPricing

**Files:**
- Create: `src/components/local-business/LocalBusinessPricing.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
import Button from "@/components/Button";
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    note: "Todos os preços em EUR, sem IVA. Setup = implementação única. Mensal = manutenção + suporte.",
    setupLabel: "Setup",
    monthlyLabel: "Mensal",
    cta: "Começar agora",
    packages: [
      {
        name: "Starter",
        setup: "€400",
        monthly: "€90/mês",
        includes: ["Atendimento WhatsApp 24/7", "Respostas a FAQ", "Triagem de pedidos"],
      },
      {
        name: "Growth",
        setup: "€800",
        monthly: "€160/mês",
        includes: ["Tudo do Starter", "Agendamento automático", "Confirmações automáticas", "Remarcações automáticas"],
      },
      {
        name: "Pro",
        setup: "€1.500",
        monthly: "€280/mês",
        includes: ["Tudo do Growth", "CRM com sync automático", "Follow-up automático", "Qualificação de leads"],
      },
      {
        name: "Full",
        setup: "€3.000",
        monthly: "€450/mês",
        includes: ["Tudo do Pro", "Prospecção activa B2B", "Campanhas WhatsApp", "Portal web do cliente"],
      },
    ],
  },
  en: {
    note: "All prices in EUR, excluding VAT. Setup = one-time implementation. Monthly = maintenance + support.",
    setupLabel: "Setup",
    monthlyLabel: "Monthly",
    cta: "Get started",
    packages: [
      {
        name: "Starter",
        setup: "€400",
        monthly: "€90/mo",
        includes: ["WhatsApp Support 24/7", "FAQ responses", "Request triage"],
      },
      {
        name: "Growth",
        setup: "€800",
        monthly: "€160/mo",
        includes: ["Everything in Starter", "Automatic scheduling", "Automatic confirmations", "Automatic rescheduling"],
      },
      {
        name: "Pro",
        setup: "€1,500",
        monthly: "€280/mo",
        includes: ["Everything in Growth", "CRM with auto sync", "Automatic follow-up", "Lead qualification"],
      },
      {
        name: "Full",
        setup: "€3,000",
        monthly: "€450/mo",
        includes: ["Everything in Pro", "Active B2B prospecting", "WhatsApp campaigns", "Client web portal"],
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
            <p className="mb-4 font-mono text-sm text-brown">
              + {pkg.monthly}
            </p>
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/local-business/LocalBusinessPricing.tsx
git commit -m "feat(negocios-locais): add pricing section"
```

---

## Task 7: LocalBusinessProjects

**Files:**
- Create: `src/components/local-business/LocalBusinessProjects.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
import Link from "next/link";
import { Lang } from "./LocalBusinessPage";

const content = {
  pt: {
    heading: "Trabalho real, resultados reais",
    viewProject: "Ver projecto →",
    projects: [
      {
        slug: "easy-leads",
        title: "Easy Leads AI",
        description: "Sistema de prospecção ativa que encontra e avalia leads locais automaticamente — com scraping de Instagram e Google Maps.",
        tag: "Prospecção B2B",
      },
      {
        slug: "arcus-crm",
        title: "Arcus CRM",
        description: "CRM com agente conversacional de vendas integrado. Regista actividades, gere pipeline e comunica com leads via WhatsApp.",
        tag: "CRM & Automação",
      },
      {
        slug: "clinic-referral-automation",
        title: "Clinic Referral Automation",
        description: "Automação de referenciação para clínicas: do formulário ao PDF assinado enviado à clínica parceira em menos de 5 minutos.",
        tag: "Clínicas",
      },
    ],
  },
  en: {
    heading: "Real work, real results",
    viewProject: "View project →",
    projects: [
      {
        slug: "easy-leads",
        title: "Easy Leads AI",
        description: "Active prospecting system that automatically finds and scores local leads — scraping Instagram and Google Maps.",
        tag: "B2B Prospecting",
      },
      {
        slug: "arcus-crm",
        title: "Arcus CRM",
        description: "CRM with an integrated conversational sales agent. Logs activities, manages pipeline, and communicates with leads via WhatsApp.",
        tag: "CRM & Automation",
      },
      {
        slug: "clinic-referral-automation",
        title: "Clinic Referral Automation",
        description: "Referral automation for clinics: from a form to a signed PDF sent to the partner clinic in under 5 minutes.",
        tag: "Healthcare",
      },
    ],
  },
};

interface Props {
  lang: Lang;
}

const LocalBusinessProjects = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <section className="my-8 md:my-12 lg:my-16">
      <h2 className="heading-1 mb-10">{t.heading}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {t.projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col border border-black p-5 transition-colors hover:bg-black hover:text-white lg:p-6"
          >
            <span className="mb-3 font-mono text-xs text-ruby group-hover:text-white">
              {project.tag}
            </span>
            <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wide">
              {project.title}
            </h3>
            <p className="body-2 mb-4 text-brown group-hover:text-white">
              {project.description}
            </p>
            <span className="mt-auto font-mono text-xs">{t.viewProject}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LocalBusinessProjects;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/local-business/LocalBusinessProjects.tsx
git commit -m "feat(negocios-locais): add projects section"
```

---

## Task 8: LocalBusinessCTA

**Files:**
- Create: `src/components/local-business/LocalBusinessCTA.tsx`

- [ ] **Step 1: Criar o componente**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/local-business/LocalBusinessCTA.tsx
git commit -m "feat(negocios-locais): add CTA section"
```

---

## Task 9: Type check + verify build

- [ ] **Step 1: TypeScript check**

```bash
cd /Users/raphaelbruno/projects/portfolio && npx tsc --noEmit 2>&1
```

Esperado: 0 erros.

- [ ] **Step 2: Build de produção**

```bash
cd /Users/raphaelbruno/projects/portfolio && npm run build 2>&1 | tail -20
```

Esperado: build bem sucedido, rota `/negocios-locais` listada nas static pages.

- [ ] **Step 3: Dev server — verificar página**

```bash
cd /Users/raphaelbruno/projects/portfolio && npm run dev
```

Abrir `http://localhost:3000/negocios-locais` e verificar:
- Toggle PT/EN visível no topo
- Idioma detectado automaticamente pelo device
- Todas as secções renderizam (Hero, Problems, HowItWorks, Services, Pricing, Projects, CTA)
- Links Cal.com e WhatsApp com `target="_blank"` (via `external` prop do Button)
- Cards de projectos linkam correctamente para `/projects/easy-leads`, etc.
- Layout consistente com o resto do portfolio

- [ ] **Step 4: Commit final**

```bash
git add -A
git commit -m "feat(negocios-locais): complete page implementation"
```
