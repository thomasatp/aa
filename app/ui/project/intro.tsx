export default function Intro({tags, description}: {tags: string[], description?: string}) {
    return (
        <section className="relative grid grid-cols-12 px-6 mt-10 xl:mt-20 xl:pb-20 max-xl:gap-y-12 lg:px-20">
        <div className="col-span-12 col-start-1 xl:col-start-2 xl:col-span-3">
          <p className="mb-6 text-base font-normal uppercase xl:mb-12 text-neutral-400">
            Skills
          </p>
          <div className="flex flex-col text-xl font-semibold sm:text-4xl">
            {tags.map((tag, i) => (
              <p key={i}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="col-span-12 col-start-1 xl:col-start-6 xl:col-span-6">
          <p className="mb-6 text-base font-normal uppercase xl:mb-12 text-neutral-400">
            Services
          </p>
          <div className="text-xl font-semibold sm:text-4xl">
            {description}
          </div>
        </div>
      </section>
    )
}