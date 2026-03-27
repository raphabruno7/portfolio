import Link from "next/link";

export default function MoreInfo() {
  return (
    <section className="lg:gap-18 flex flex-col gap-6 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <p className="body-1 mb-6 2xl:mb-8">
          <strong>For product teams</strong>
        </p>
        <p className="body-1">
          I act as a technical partner: architecting new features, integrating
          external services, and translating business goals into scalable
          software. Whether it&apos;s a full-stack application, an AI-powered
          agent, or a complex API integration, I focus on shipping software that
          works in the real world.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <p className="body-1 mb-6 2xl:mb-8">
          <strong>For local businesses</strong>
        </p>
        <p className="body-1">
          I design and build automation workflows using tools like n8n and Make,
          integrated with third-party APIs and custom logic. I connect systems,
          eliminate manual work, and create pipelines that run on their own —
          so teams can focus on what matters.
          <br />
          <br />
          Want to chat? →{" "}
          <Link className="underline" href="mailto:raphaelbruno.dev@proton.me">
            Send me an email
          </Link>
        </p>
      </div>
    </section>
  );
}
