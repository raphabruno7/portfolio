"use client";

import { useEffect, useState } from "react";
import Divider from "@/components/Divider";
import LocalBusinessHero from "./LocalBusinessHero";
import LocalBusinessStats from "./LocalBusinessStats";
import LocalBusinessProblems from "./LocalBusinessProblems";
import LocalBusinessHowItWorks from "./LocalBusinessHowItWorks";
import LocalBusinessSectors from "./LocalBusinessSectors";
import LocalBusinessServices from "./LocalBusinessServices";
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
        <div className="flex items-center gap-2 font-overpass text-xs font-semibold uppercase tracking-widest">
          <button
            onClick={() => setLang("pt")}
            className={`transition-colors ${lang === "pt" ? "text-black" : "text-brown hover:text-black"}`}
          >
            PT
          </button>
          <span className="text-brown">|</span>
          <button
            onClick={() => setLang("en")}
            className={`transition-colors ${lang === "en" ? "text-black" : "text-brown hover:text-black"}`}
          >
            EN
          </button>
        </div>
      </div>

      <LocalBusinessHero lang={lang} />

      <Divider />
      <LocalBusinessStats lang={lang} />

      <Divider />
      <LocalBusinessProblems lang={lang} />

      <Divider />
      <LocalBusinessHowItWorks lang={lang} />

      <Divider />
      <LocalBusinessSectors lang={lang} />

      <Divider />
      <LocalBusinessServices lang={lang} />

      <Divider />
      <LocalBusinessFAQ lang={lang} />

      <Divider />
      <LocalBusinessCTA lang={lang} />
    </div>
  );
};

export default LocalBusinessPage;
