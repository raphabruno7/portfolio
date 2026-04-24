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
