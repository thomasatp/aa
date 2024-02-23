import ArrowLink from "../arrowlink";

export default function Intro({
  tags,
  description,
  link
}: {
  tags: string[];
  description?: string;
  link?: string
}) {
  return (
    <section className="relative grid grid-cols-12 px-6 pb-24 mt-10 xl:mt-20 xl:pb-48 max-xl:gap-y-12 lg:px-20">
      <div className="col-span-12 col-start-1 xl:col-start-2 xl:col-span-2">
        <div className="flex items-start gap-2 text-xl font-semibold xl:flex-col">
          {tags.map((tag, i) => (
            <p
              className="px-3 py-1 text-sm transition-all duration-300 border rounded-full dark:border-neutral-600 dark:text-neutral-500 border-neutral-400 text-neutral-500"
              key={i}
            >
              {tag}
            </p>
          ))}
        </div>
        
      </div>
      <div className="col-span-12 col-start-1 xl:col-start-4 xl:col-span-6">
        {/* <h3 className="mb-6 text-base font-normal uppercase xl:mb-12 text-neutral-400">
            Services
          </h3> */}
        <p className="text-xl font-semibold  sm:text-4xl">{description}</p>
        {link && <a href={link} target="_blank" className="flex items-end gap-2 mt-12 text-xl font-bold leading-6 cursor-pointer group xl:mb-12 dark:text-white text-neutral-950">
          Voir le site <ArrowLink/>
        </a>}
      </div>
    </section>
  );
}
