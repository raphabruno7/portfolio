import Container from "@/components/Container";
import Page from "@/components/layouts/Page";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work — Raphael Bruno",
  description:
    "A transparent process from first conversation to finished product.",
};

const steps = [
  {
    number: "01",
    title: "The first call",
    body: "We start with a short call to talk about your project, what you're trying to build, and what's slowing you down. No pitch — just an honest conversation to see if it makes sense to go further.",
  },
  {
    number: "02",
    title: "The free audit",
    body: "If the call feels right, I go deeper. Depending on your situation, I'll look at your existing systems, your codebase, or your workflow. You'll get a clear overview of what's involved, what's realistic, and how I'd approach it — no strings attached.",
  },
  {
    number: "03",
    title: "The honest plan",
    body: "I'll tell you exactly what I think. If I'm the right person for the job, I'll lay out a roadmap with realistic scope and timeline. If I think you need something different — a different tool, a different approach, or a different person — I'll say that too.",
  },
  {
    number: "04",
    title: "Build & deliver",
    body: "Once we agree on the plan, we start. You get direct communication, regular updates, and a partner who cares about the outcome as much as you do.",
  },
];

const HowWeWorkPage = () => {
  return (
    <Page>
      <Container>
        {/* Header */}
        <header className="border-b border-b-black pb-8 pt-8 md:pb-12 md:pt-12 lg:pb-16 lg:pt-16">
          <h1 className="heading-1 mb-6 lg:w-8/12">How we work together</h1>
          <p className="body-1 lg:w-7/12">
            I don&apos;t believe in over-promising or building for the sake of
            building. My goal is to find the shortest, most reliable path from
            your idea to a working product. Here is how we get there.
          </p>
        </header>

        {/* Steps */}
        <section className="py-8 lg:py-16 xl:py-20">
          <div className="flex flex-col divide-y divide-black">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col gap-4 py-8 md:flex-row md:gap-0 lg:py-12"
              >
                <div className="w-full md:w-1/3">
                  <span className="callout-0 text-brown">{step.number}</span>
                  <h2 className="heading-2 mt-2">{step.title}</h2>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="body-1">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <h2 className="heading-2 mb-6 lg:w-8/12">Ready to start?</h2>
          <p className="body-1 mb-8 lg:w-7/12">
            To get the ball rolling,{" "}
            <Link
              className="underline"
              href="mailto:raphaelbruno.dev@proton.me"
            >
              send me a short email
            </Link>{" "}
            including:
          </p>
          <ul className="flex flex-col gap-4 lg:w-7/12">
            <li className="body-1 flex gap-3">
              <span className="mt-1 shrink-0 text-ruby">—</span>
              <span>
                <strong>Who you are:</strong> A quick intro to you and your
                project.
              </span>
            </li>
            <li className="body-1 flex gap-3">
              <span className="mt-1 shrink-0 text-ruby">—</span>
              <span>
                <strong>The challenge:</strong> Where do you need help and what
                have you tried so far?
              </span>
            </li>
            <li className="body-1 flex gap-3">
              <span className="mt-1 shrink-0 text-ruby">—</span>
              <span>
                <strong>Your timeline:</strong> One or two suggestions for a
                30–60 minute call.
              </span>
            </li>
          </ul>
        </section>
      </Container>
    </Page>
  );
};

export default HowWeWorkPage;
