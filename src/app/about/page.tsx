/* eslint-disable @next/next/no-img-element */
import Container from "@/components/Container";
import Hero from "@/components/about/Hero";
import MoreInfo from "@/components/about/MoreInfo";
import Page from "@/components/layouts/Page";

const AboutPage = async () => {
  return (
    <Page>
      <Container>
        <Hero
          title="Software engineer ready to build your next product or automate what slows you down."
          description="I'm Raphael, a software engineer based in Portugal, focused on product development and AI-powered automations for product teams and local businesses."
          image="/profile.jpg"
          alt="Raphael Bruno profile picture"
        />
        <section className="pt-12 lg:pt-16 xl:pt-20">
          <MoreInfo />
        </section>
      </Container>
    </Page>
  );
};

export default AboutPage;
