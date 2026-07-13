import Container from "@/components/Container";
import EntrySmallGridListItem from "@/components/entries/EntrySmallGridListItem";
import Page from "@/components/layouts/Page";
import { getEntries } from "@/utils/entries";
import { compareDesc } from "date-fns";
import { Metadata } from "next";
import { ReactElement } from "react";

const HeroText = ({
  title,
  subtitle,
}: {
  title: string | ReactElement;
  subtitle: string | ReactElement;
}) => {
  return (
    <section className="border-t border-black pb-10 pt-10 lg:pb-20 lg:pt-24">
      <div className="mx-auto flex w-full flex-col gap-5 text-start lg:w-6/12 lg:text-center">
        <h2 className="font-overpass text-xs font-semibold uppercase leading-7 tracking-[0.2em] text-ruby lg:text-sm">
          Latest Projects
        </h2>
        <h1 className="heading-1">{title}</h1>
        <p className="body-2">{subtitle}</p>
      </div>
    </section>
  );
};

const ProjectListPage = async () => {
  // Get all projects from remote content bucket
  const entries = await getEntries("projects");

  const recentEntries = entries.sort((a, b) =>
    compareDesc(new Date(a.frontmatter.date), new Date(b.frontmatter.date)),
  );

  return (
    <Page>
      <Container>
        <HeroText
          title="Here are some of the things I've been working on."
          subtitle=""
        />
        <section className="mt-10 flex flex-col gap-8 border-t border-black pt-10 lg:mt-16 lg:flex-row lg:pt-16">
          <div className="w-full lg:w-1/3">
            <h3 className="callout-1 text-ruby">Recent</h3>
          </div>
          <ul className="flex w-full flex-col gap-12 lg:w-2/3">
            {recentEntries.map((entry) => {
              return (
                <li className="" key={entry.frontmatter.slug}>
                  <EntrySmallGridListItem
                    entry={entry}
                    urlPrefix={"/work"}
                    showBorder={false}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </Container>
    </Page>
  );
};

export const metadata: Metadata = {
  title: "Latest Work & Projects | Raphael Bruno",
  description:
    "AI automation systems, voice agents, and full-stack products built by Raphael Bruno — software engineer based in Portugal.",
};

export default ProjectListPage;
