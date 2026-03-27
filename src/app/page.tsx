/* eslint-disable @next/next/no-img-element */
import Container from "@/components/Container";
import LatestEntriesGrid from "@/components/entries/LatestEntriesGrid";
import LatestEntriesList from "@/components/entries/LatestEntriesList";
import Page from "@/components/layouts/Page";
import { getEntries } from "@/utils/entries";
import { compareDesc } from "date-fns";
import Link from "next/link";
import config from "@/../portfolio.config";
import SocialButtons from "@/components/SocialButtons";
import LatestPhotosGrid from "@/components/photos/LatestPhotosGrid";
import { getAlbums } from "@/utils/photos";
import TechStackGrid from "@/components/TechStackGrid";

const HomePage = async () => {
  const posts = await getEntries("posts");
  const projects = await getEntries("projects");
  const albums = await getAlbums();

  const latestPosts = posts
    .reverse()
    .sort((a, b) =>
      compareDesc(new Date(a.frontmatter.date), new Date(b.frontmatter.date)),
    )
    .slice(0, 8);

  const featuredProjects = projects
    .sort((a, b) =>
      (a.frontmatter.ordering || 0) <= (b.frontmatter.ordering || 0) ? -1 : 1,
    )
    .filter((entry) => entry.frontmatter.featured === true);

  const latestPhotos = albums.slice(0, 8).map((album) => {
    return album.photos[0];
  });

  return (
    <Page>
      <Container>
        {/* Hero */}
        <header className="mb-0 flex min-h-[80vh] flex-col items-stretch justify-between md:mb-12 md:flex-row lg:mb-16 2xl:mb-20">
          <section className="w-full md:w-5/12">
            <img
              className="m-0 block h-full w-full object-cover p-0"
              src="/profile.jpg"
              alt="Profile picture"
            />
          </section>
          <section className="flex w-full flex-col justify-end pb-8 pt-8 md:w-6/12 md:pb-0 md:pt-12 lg:pt-16">
            <h1 className="heading-1">
              Hi, I&apos;m Raphael.
              <br />
              I build software that moves things forward.
            </h1>
            <p className="body-0 mt-5 xl:mt-8 2xl:mt-10">
              Based in Portugal, I&apos;m a software engineer who builds{" "}
              <Link className="font-medium hover:underline" href="/projects/">
                products
              </Link>{" "}
              and AI-powered automations to local business. I turn complex ideas
              into clean, working software — end to end. Read a bit more{" "}
              <Link className="font-medium hover:underline" href="/about/">
                about me
              </Link>
              .
            </p>
            <SocialButtons />
          </section>
        </header>
        {/* What I Do */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <h2 className="heading-2 mb-8 lg:mb-12">What I Do</h2>
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-18">
            <div className="w-full lg:w-1/2">
              <p className="body-1 mb-4">
                <strong>For product teams</strong>
              </p>
              <p className="body-1">
                I act as a technical partner: architecting new features,
                integrating external services, and translating business goals
                into scalable software. Whether it&apos;s a full-stack
                application, an AI-powered agent, or a complex API integration, I
                focus on shipping software that works in the real world.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="body-1 mb-4">
                <strong>For local businesses</strong>
              </p>
              <p className="body-1">
                I design and build automation workflows using tools like n8n,
                Make, LangChain, FastAPI, and Voiceflow — integrated with
                third-party APIs and custom logic. I connect systems, eliminate
                manual work, and create pipelines that run on their own — so
                teams can focus on what matters.
              </p>
            </div>
          </div>
          <p className="body-1 mt-8 lg:mt-12">
            My goal is straightforward: write good software, automate what slows
            you down, and help your product move forward.
          </p>
        </section>
        {/* Banner */}
        <section>
          <div className="rounded-sm border border-black bg-black px-4 pb-3 pt-3 font-ibm text-xs text-beige">
            <p className="flex items-center justify-center gap-2 tracking-wider">
              <span>
                <span className="font-medium">Looking for a portfolio?</span>{" "}
                The code for this website is open source.{" "}
                <Link
                  className="text-ruby underline"
                  target="_blank"
                  href={config.repoUrl}
                >
                  View on Github
                </Link>{" "}
              </span>
            </p>
          </div>
        </section>
        {/* Projects */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <LatestEntriesGrid
            entries={featuredProjects}
            title="Featured Projects"
            urlPrefix="/projects"
            linkText="See All Projects"
          />
        </section>
        {/* Photos */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <LatestPhotosGrid
            photos={latestPhotos}
            title="Recent Photos"
            linkUrl="/photos/albums"
            linkText="See All Photos"
          />
        </section>
        {/* Entries */}
        <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
          <LatestEntriesList
            entries={latestPosts}
            title="Latest Posts"
            urlPrefix="/blog"
            linkText="See All Posts"
          />
        </section>
        <TechStackGrid />
      </Container>
    </Page>
  );
};

export default HomePage;
