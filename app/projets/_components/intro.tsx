import ArrowLink from "@/components/arrowlink";

export default function Intro({
  title,
  tags,
  description,
  link,
}: {
  title: string | undefined;
  tags?: string[];
  description?: string;
  link?: string;
}) {
  return (
    <section className="relative grid grid-cols-12 px-6 pb-24 mt-10 xl:mt-20 max-xl:gap-y-12 lg:px-20 items-baseline">
      <div className="col-span-12 lg:col-span-5">
        <h1
          className={`leading-[0.8] font-semibold uppercase mb-4 text-3xl break-words anton uppercase`}
        >
          {title}
        </h1>
        <div className="flex flex-wrap items-start gap-2 text-xl font-medium mt-8">
          {tags?.map((tag, i) => (
            <p
              className="px-4 py-2 text-sm transition-all duration-300 rounded-full dark:bg-neutral-800 dark:text-white bg-stone-200 text-neutral-950"
              key={i}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="col-start-1 col-span-12 lg:col-start-7 lg:col-span-6">
        <p className="text-xl leading-normal lg:text-5xl lg:leading-tight font-medium  mt-8">
          {description}
        </p>
        {/* {link && (
          <a
            href={link}
            target="_blank"
            className="flex items-end gap-2 mt-12 text-base font-semibold leading-6 cursor-pointer group xl:mb-12 dark:text-white text-neutral-950"
          >
            Voir le site <ArrowLink />
          </a>
        )} */}
      </div>
    </section>
  );
}
