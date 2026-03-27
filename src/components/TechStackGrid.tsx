import { stackItems } from "@/data/stack";
import Image from "next/image";

const TechStackGrid = () => {
  return (
    <section className="border-t border-t-black py-8 lg:py-16 xl:py-20">
      <h2 className="heading-2 mb-8 lg:mb-12">Tech Experience</h2>
      <div className="flex flex-wrap justify-center gap-x-0 gap-y-16" style={{ rowGap: "4rem" }}>
        {stackItems.map((item) => (
          <div
            key={item.name}
            className="flex w-1/3 flex-col items-center gap-3 sm:w-1/4 md:w-1/6"
          >
            {item.icon?.startsWith("url:") ? (
              <Image
                src={item.icon.replace("url:", "")}
                alt={item.name}
                width={44}
                height={44}
                unoptimized
                style={{ filter: "grayscale(100%) brightness(0.28) contrast(1.1)" }}
              />
            ) : item.icon ? (
              <Image
                src={`https://cdn.simpleicons.org/${item.icon}/3d3a37`}
                alt={item.name}
                width={44}
                height={44}
                unoptimized
              />
            ) : null}
            <span className="font-inter text-xs text-brown">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackGrid;
