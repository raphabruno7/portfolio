/* eslint-disable @next/next/no-img-element */
import Container from "@/components/Container";
import Hero from "@/components/about/Hero";
import Page from "@/components/layouts/Page";
import Link from "next/link";

const AboutPage = async () => {
  return (
    <Page>
      <Container>
        <Hero
          title="I build software shaped by years of understanding people."
          description="I'm Raphael, a software engineer based in Portugal. My path ran through music, community building, and marketing before landing in code — and that background defines how I build."
          image="/profile.jpg"
          alt="Raphael Bruno profile picture"
        />

        {/* Journey */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <h2 className="heading-2 mb-8 lg:mb-12">My journey</h2>
          <div className="flex flex-col gap-6 lg:w-8/12">
            <p className="body-1">
              My background is unconventional. I studied music at the Federal
              University of Ceará (Brazil) and have spent the last 13 years
              practising and teaching sound healing — work I still do today.
              I trained practitioners in the Peter Hess method across Europe,
              built an online community of over 40,000 people from scratch, and
              learned early on that understanding people is a craft in itself.
            </p>
            <p className="body-1">
              The pandemic pushed me to understand the mechanics behind that
              community. I went deep into digital marketing, copywriting,
              product development, and storytelling. That led naturally to
              automation — WhatsApp APIs, ManyChat flows, AI agents, custom
              pipelines. I was building systems long before I wrote my first
              line of code.
            </p>
            <p className="body-1">
              That technical foundation eventually pulled me into programming
              itself. Under the mentorship of a senior German engineer, I moved
              from building my own apps to a hands-on engineering experience at
              Resonance Labs — going progressively deeper into full-stack
              development, system architecture, and AI-powered workflows. Today
              I build software with a decade of human insight baked into every
              technical decision.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <h2 className="heading-2 mb-8 lg:mb-12">Experience</h2>
          <div className="flex flex-col gap-2 lg:w-8/12">
            <p className="body-1">
              <strong>Technical Collaboration — Podkite Analytics Limited</strong>
            </p>
            <p className="body-2 text-brown">
              London, UK (remote) · Oct 2024 – Feb 2025
            </p>
            <p className="body-1 mt-2">
              Integrated APIs and synced podcast download, chart-ranking, and
              search-performance data across the platform.
            </p>
          </div>
        </section>

        {/* Why work with me */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <h2 className="heading-2 mb-8 lg:mb-12">Why work with me?</h2>
          <ul className="flex flex-col gap-4 lg:w-8/12">
            <li className="body-1 flex gap-3">
              <span className="mt-1 shrink-0 text-ruby">—</span>
              <span>
                I understand why products succeed or fail before they&apos;re
                built — I&apos;ve launched, marketed, and iterated from the
                user&apos;s side.
              </span>
            </li>
            <li className="body-1 flex gap-3">
              <span className="mt-1 shrink-0 text-ruby">—</span>
              <span>
                I connect business goals to working code without losing the
                original intent along the way.
              </span>
            </li>
            <li className="body-1 flex gap-3">
              <span className="mt-1 shrink-0 text-ruby">—</span>
              <span>
                My automation background means I think in systems: I build
                things that run on their own.
              </span>
            </li>
            <li className="body-1 flex gap-3">
              <span className="mt-1 shrink-0 text-ruby">—</span>
              <span>I communicate clearly. No jargon, no surprises.</span>
            </li>
          </ul>
        </section>

        {/* Beyond the work */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <p className="body-1 lg:w-8/12">
            When I&apos;m not writing code, you&apos;ll find me surfing the
            waves in Peniche or running a sound healing session. Both keep me
            grounded in the same thing that drives my work: presence,
            intention, and the way energy moves through a system.{" "}
            <Link className="underline" href="/beyond-the-work/">
              A bit more about me →
            </Link>
          </p>
        </section>

        {/* CTA */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <h2 className="heading-2 mb-4 lg:mb-6">Have a project in mind?</h2>
          <p className="body-1">
            From an initial conversation to full-cycle development, I offer a
            transparent and realistic path to getting your idea built.{" "}
            <Link
              className="underline"
              href="mailto:work@raphaelbruno.dev"
            >
              Send me an email →
            </Link>
          </p>
        </section>
      </Container>
    </Page>
  );
};

export default AboutPage;
