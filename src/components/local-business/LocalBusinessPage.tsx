"use client";

import { useEffect, useState } from "react";
import Divider from "@/components/Divider";
import LocalBusinessHero from "./LocalBusinessHero";
import LocalBusinessStats from "./LocalBusinessStats";
import LocalBusinessProblems from "./LocalBusinessProblems";
import LocalBusinessHowItWorks from "./LocalBusinessHowItWorks";
import LocalBusinessSectors from "./LocalBusinessSectors";
import LocalBusinessServices from "./LocalBusinessServices";
import LocalBusinessPricing from "./LocalBusinessPricing";
import LocalBusinessProjects from "./LocalBusinessProjects";
import LocalBusinessFAQ from "./LocalBusinessFAQ";
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
    <div>
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

      {/* 1. Hero */}
      <LocalBusinessHero lang={lang} />

      {/* 2. Estatísticas — prova imediata */}
      <Divider />
      <LocalBusinessStats lang={lang} />

      {/* 3. O problema que ninguém resolve */}
      <Divider />
      <LocalBusinessProblems lang={lang} />

      {/* 4. Como funciona */}
      <Divider />
      <LocalBusinessHowItWorks lang={lang} />

      {/* 5. Casos por sector */}
      <Divider />
      <LocalBusinessSectors lang={lang} />

      {/* 6. Serviços */}
      <Divider />
      <LocalBusinessServices lang={lang} />

      {/* 7. Preços */}
      <section className="my-8">
        <Divider text={lang === "pt" ? "Preços" : "Pricing"} />
      </section>
      <LocalBusinessPricing lang={lang} />

      {/* 8. Projectos */}
      <section className="my-8">
        <Divider text={lang === "pt" ? "Projectos" : "Projects"} />
      </section>
      <LocalBusinessProjects lang={lang} />

      {/* 9. FAQ */}
      <Divider />
      <LocalBusinessFAQ lang={lang} />

      {/* 10. CTA final */}
      <Divider />
      <LocalBusinessCTA lang={lang} />
    </div>
  );
};

export default LocalBusinessPage;
