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
        description:
          "Sistema de prospecção ativa que encontra e avalia leads locais automaticamente — com scraping de Instagram e Google Maps.",
        tag: "Prospecção B2B",
      },
      {
        slug: "arcus-crm",
        title: "Arcus CRM",
        description:
          "CRM com agente conversacional de vendas integrado. Regista actividades, gere pipeline e comunica com leads via WhatsApp.",
        tag: "CRM & Automação",
      },
      {
        slug: "clinic-referral-automation",
        title: "Clinic Referral Automation",
        description:
          "Automação de referenciação para clínicas: do formulário ao PDF assinado enviado à clínica parceira em menos de 5 minutos.",
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
        description:
          "Active prospecting system that automatically finds and scores local leads — scraping Instagram and Google Maps.",
        tag: "B2B Prospecting",
      },
      {
        slug: "arcus-crm",
        title: "Arcus CRM",
        description:
          "CRM with an integrated conversational sales agent. Logs activities, manages pipeline, and communicates with leads via WhatsApp.",
        tag: "CRM & Automation",
      },
      {
        slug: "clinic-referral-automation",
        title: "Clinic Referral Automation",
        description:
          "Referral automation for clinics: from a form to a signed PDF sent to the partner clinic in under 5 minutes.",
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
