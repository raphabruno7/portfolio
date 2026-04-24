"use client";

import { useEffect, useState } from "react";
import Divider from "@/components/Divider";
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
    </div>
  );
};

export default LocalBusinessPage;
