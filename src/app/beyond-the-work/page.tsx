/* eslint-disable @next/next/no-img-element */
import Container from "@/components/Container";
import Page from "@/components/layouts/Page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond the Work — Raphael Bruno",
  description:
    "Music researcher, sound healer, meditator, longboard surfer. A few things about who I am outside of code.",
};

const items: Record<string, { text: string; sub?: string }[]> = {
  Books: [
    { text: "Demian", sub: "Hermann Hesse" },
    { text: "Zen Mind, Beginner's Mind", sub: "Shunryu Suzuki" },
    { text: "Cutting Through Spiritual Materialism", sub: "Chögyam Trungpa" },
    { text: "1984", sub: "George Orwell" },
  ],
  Interests: [
    { text: "Psychoacoustics" },
    { text: "Naad Yoga" },
    { text: "Neuroscience" },
    { text: "Jungian Psychology" },
    { text: "Buddhist Psychology" },
    { text: "Linguistics" },
    { text: "Poetry & Writing" },
    { text: "Agroforestry (Ernst Götsch)" },
  ],
};

const ListSection = ({
  title,
  entries,
}: {
  title: string;
  entries: { text: string; sub?: string }[];
}) => (
  <div className="flex flex-col gap-0 border-t border-black md:flex-row">
    <div className="w-full pt-8 md:w-1/3">
      <h2 className="callout-0 uppercase">{title}</h2>
    </div>
    <div className="w-full md:w-2/3">
      <ul className="flex flex-col divide-y divide-black md:mt-4">
        {entries.map((item, i) => (
          <li key={i} className="flex items-baseline justify-between py-3 md:py-4">
            <span className="body-2">{item.text}</span>
            {item.sub && (
              <span className="body-3 text-brown">{item.sub}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const BeyondTheworkPage = () => {
  return (
    <Page>
      <Container>
        {/* Header */}
        <header className="flex flex-col items-start justify-between gap-8 border-b border-b-black pb-8 pt-8 md:flex-row md:gap-16 md:pb-12 md:pt-12 lg:pb-16 lg:pt-16">
          <div className="flex w-full flex-col justify-between md:w-1/2">
            <p className="callout-0 mb-8 uppercase tracking-wider text-brown">
              Beyond the work
            </p>
            <h1 className="heading-1 mb-8">
              Let&apos;s be honest: if we&apos;re working together, you&apos;ll
              also be working with me as a person. So, who am I?
            </h1>
            <p className="body-1">
              Friends call me Rapha. I&apos;m energized by the ocean, by
              playing my flute in the small forest near my house, by meditation
              and silence, and by the kind of slow thinking that only happens
              on a longboard or deep in the woods. I live in Baleal, a small
              peninsula near Peniche on the Portuguese west coast. Three years
              in, still no good reason to leave.
            </p>
          </div>
          <div className="w-full md:w-5/12 lg:w-4/12">
            <video
              src="/rapha-flute.mp4"
              autoPlay
              controls
              playsInline
              className="w-full"
              style={{ maxHeight: "80vh" }}
            />
          </div>
        </header>

        {/* Music */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <div className="flex flex-col gap-0 md:flex-row">
            <div className="w-full pb-6 md:w-1/3 md:pb-0">
              <h2 className="callout-0 uppercase">Music</h2>
            </div>
            <div className="flex w-full flex-col gap-5 md:w-2/3">
              <p className="body-1">
                I&apos;m a multi-instrumentalist. I&apos;ve played in bands,
                recorded albums, and toured. But music, for me, has never been
                just sound. It&apos;s a system that shapes consciousness.
              </p>
              <p className="body-1">
                In my first year at university, I discovered that sound could
                heal. That shifted everything: how I understood music,
                vibration, resonance, people, life. I went deep and never came
                back up. Today I understand the world through vibration.
              </p>
              <p className="body-1">
                For over 13 years I&apos;ve practised and taught sound healing,
                working with individuals and training practitioners. The core
                of that work is learning to deep listen: to energy, to a body,
                to what is not being said. Training facilitators means teaching
                presence before technique. The instrument comes second, the
                person always comes first.
              </p>
              <p className="body-1">
                Being trained in a German methodology meant rigour and depth
                from the start. It was natural to go further, into
                psychoacoustics, neuroscience, and neurobiology. That science
                gave me the language for what I was already experiencing in
                sessions. And something more: a way of understanding people
                that doesn&apos;t judge. When someone can&apos;t sustain a
                habit, when focus collapses, when willpower runs out: that
                isn&apos;t weakness. That&apos;s biology.{" "}
                <strong>
                  Understanding the nervous system changes everything about how
                  I see a person.
                </strong>
              </p>
              <p className="body-1">
                And here is what I find endlessly fascinating:{" "}
                <strong>vibration is code.</strong> Music is symbols, patterns,
                frequencies. Programming languages are the same. A gong, a
                singing bowl, a line of Python. They all describe reality
                through a system of structured information. Everything drinks
                from the same source. That connection is part of why I became
                an engineer.
              </p>
            </div>
          </div>
        </section>

        {/* Surfing */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <div className="flex flex-col gap-0 md:flex-row">
            <div className="w-full pb-6 md:w-1/3 md:pb-0">
              <h2 className="callout-0 uppercase">Surfing</h2>
            </div>
            <div className="flex w-full flex-col gap-5 md:w-2/3 lg:flex-row lg:items-start lg:gap-10">
              <img
                src="/rapha-surf.jpg"
                alt="Rapha surfing longboard in Baleal"
                className="w-full object-cover lg:w-8/12"
              />
              <div className="flex flex-col gap-5 lg:w-4/12">
                <p className="body-1">
                  I surf longboard. Less about power, more about flow and
                  reading the wave. Living in Baleal with Supertubos a few
                  minutes away means I&apos;m in the water as often as the
                  Atlantic allows.
                </p>
                <p className="body-1">
                  There&apos;s something about being in the ocean that resets
                  everything. You stop being the narrator and just become part
                  of what&apos;s happening. It&apos;s the same quality I look
                  for in meditation, in a sound session, and honestly in good
                  code: full presence, no noise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practices */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <div className="flex flex-col gap-0 md:flex-row">
            <div className="w-full pb-6 md:w-1/3 md:pb-0">
              <h2 className="callout-0 uppercase">Practices</h2>
            </div>
            <div className="flex w-full flex-col gap-5 md:w-2/3">
              <p className="body-1">
                I&apos;ve been meditating for 23 years, rooted in a Buddhist
                lineage that values direct experience over doctrine. Kundalini
                yoga, sound healing, and study of Buddhist and Jungian
                psychology all feed into the same inquiry: what does it mean
                to actually understand a human being?
              </p>
              <p className="body-1">
                Sound healing has been my practice and livelihood for 13 years.
                I trained in the{" "}
                <span className="font-medium">Peter Hess method</span> and have
                worked with students and clients across Europe. I still run
                sessions. It&apos;s not something I left behind when I became
                an engineer. It&apos;s part of the same work.
              </p>
            </div>
          </div>
        </section>

        {/* Books */}
        <section className="py-8 lg:py-16 xl:py-20">
          <ListSection title="Books" entries={items.Books} />
        </section>

        {/* Interests */}
        <section className="py-8 lg:py-16 xl:py-20">
          <ListSection title="Interests" entries={items.Interests} />
        </section>

        {/* Nature */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <div className="flex flex-col gap-0 md:flex-row">
            <div className="w-full pb-6 md:w-1/3 md:pb-0">
              <h2 className="callout-0 uppercase">Nature</h2>
            </div>
            <div className="flex w-full flex-col gap-5 md:w-2/3">
              <img
                src="/rapha-agrofloresta.jpg"
                alt="Agroforestry"
                className="w-full object-cover"
              />
              <p className="body-1">
                I practise agroforestry in the tradition of{" "}
                <span className="font-medium">Ernst Götsch</span>, an approach
                to land and farming based on observation and cooperation with
                natural systems rather than control over them. Forests, hiking,
                and long walks through quiet landscapes are as essential to me
                as books or music. I need wild places to think clearly.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </Page>
  );
};

export default BeyondTheworkPage;
