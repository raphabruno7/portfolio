import { Metadata } from "next";
import Container from "@/components/Container";
import Page from "@/components/layouts/Page";
import LocalBusinessPage from "@/components/local-business/LocalBusinessPage";

export const metadata: Metadata = {
  title: "Negócios Locais — Raphael Bruno",
  description:
    "Automação e presença digital para negócios locais na Silver Coast. Atendimento WhatsApp 24/7, agendamento automático, CRM e muito mais.",
  alternates: { canonical: "/negocios-locais/" },
};

const NegociosLocaisPage = () => {
  return (
    <Page>
      <Container>
        <LocalBusinessPage />
      </Container>
    </Page>
  );
};

export default NegociosLocaisPage;
