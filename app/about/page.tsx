import { Metadata } from "next";
import { getAboutPage } from "../lib/getAboutPage";
import { getAboutSkills } from "../lib/getAboutSkills";
import { getPeople } from "../lib/getPeople";
import Hero from "../ui/homepage/hero";
import PeopleTile from "../ui/peopleTile";
import LottieBlock from "../ui/lottie";
import clsx from "clsx";
import AboutFilterBar from "../ui/aboutFilterBar";
export const dynamic = "force-dynamic";


export async function generateMetadata(): Promise<Metadata> {
  const aboutPage = await getAboutPage();

  return {
    title: `And After | ${aboutPage.metatitle}`,
    description: aboutPage.metadescription,
  };
}

export default async function Page({ searchParams }: { searchParams: any }) {
  const filter = searchParams.filter;
  const aboutPage = await getAboutPage();
  const aboutSkills = await getAboutSkills();
  const people = await getPeople();

  const allSkills: string[] = [];
  aboutSkills.forEach((item) => allSkills.push(item.skill));
  const concatSkills = Array.from(new Set(allSkills.flat()));

  return (
    <main>
      <Hero title={aboutPage.title} description={aboutPage.description} />
      {/* <LottieBlock/> */}
      <div className="relative grid grid-cols-12 px-6 mt-20 mb-20 lg:px-20">
        {aboutPage.media && (
          <section className="relative col-span-12 aspect-square xl:aspect-video">
            <video
              className="object-cover w-full h-full"
              preload="auto"
              autoPlay
              playsInline
              loop
              muted
            >
              <source src={aboutPage.media.url} type="video/mp4" />
            </video>
          </section>
        )}
      </div>
      <AboutFilterBar skills={concatSkills} filter={filter} />
      <div className="relative grid grid-cols-12 px-6 py-4 mt-20 lg:overflow-hidden lg:px-20">
        <div
          className={clsx("col-span-12 lg:col-span-6", {
            "filter-none lg:blur max-lg:hidden": filter === concatSkills[1],
          })}
        >
          {aboutSkills
            .filter((item) => item.skill === concatSkills[0])
            .map((item, key) => (
              <div className="grid w-full grid-cols-6" key={key}>
                <h3 className="col-span-12 col-start-1 mb-6 text-base font-normal uppercase xl:mb-12 text-neutral-400 xl:col-start-1 xl:col-span-2">
                  {item.title}
                </h3>
                <p className="col-span-12 mb-6 font-semibold text-l sm:text-3xl xl:col-start-3 xl:col-span-4">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
        <div
          className={clsx("col-span-12 lg:col-span-6", {
            "filter-none lg:blur max-lg:hidden": filter === concatSkills[0] || filter === undefined,
          })}
        >
          {aboutSkills
            .filter((item) => item.skill === concatSkills[1])
            .map((item, key) => (
              <div className="grid w-full grid-cols-6" key={key}>
                <h3 className="col-span-12 col-start-1 mb-6 text-base font-normal uppercase xl:mb-12 text-neutral-400 xl:col-start-1 xl:col-span-2">
                  {item.title}
                </h3>
                <p className="col-span-12 mb-6 font-semibold text-l sm:text-3xl xl:col-start-3 xl:col-span-4">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="relative grid grid-cols-12 gap-6 gap-y-16 px-6 lg:px-20 mt-20 2xl:[&>*:nth-child(1)]:col-start-2 2xl:[&>*:nth-child(4)]:col-start-3 2xl:[&>*:nth-child(7)]:col-start-2 2xl:[&>*:nth-child(10)]:col-start-3 2xl:[&>*:nth-child(13)]:col-start-2">
        {people.map(({ name, job, media }, i) => (
          <PeopleTile
            key={i}
            name={name}
            job={job}
            media={media}
          />
        ))}
      </div>
    </main>
  );
}
