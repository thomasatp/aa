import { Metadata } from "next";
import { getAboutPage } from "../lib/getAboutPage";
import { getAboutSkills } from "../lib/getAboutSkills";
import Hero from "../ui/homepage/hero";
import LottieBlock from "../ui/lottie";
import DevCrea from "../ui/devcrea";
import clsx from "clsx";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const aboutPage = await getAboutPage();

  return {
    title: `And After | ${aboutPage.title}`,
    description: aboutPage.description,
  };
}

export default async function Page({ searchParams }: { searchParams: any }) {
  const filter = searchParams.filter;
  const aboutPage = await getAboutPage();
  const aboutSkills = await getAboutSkills();

  const allSkills: string[] = [];
  aboutSkills.forEach((item) => allSkills.push(item.skill));
  const concatSkills = Array.from(new Set(allSkills.flat()));
  console.log(concatSkills);

  return (
    <main>
      <Hero title={aboutPage.title} description={aboutPage.description} />
      {/* <LottieBlock/> */}
      <div className="relative grid grid-cols-12 px-6 mt-20 lg:px-20">
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
      <DevCrea skills={concatSkills} filter={filter} />
      <div className="relative flex px-6 mt-20 overflow-scroll lg:overflow-hidden lg:px-20">
        <div
          className={clsx("w-full lg:max-w-1/2", {
            "blur": filter === concatSkills[1],
          })}
        >
          {aboutSkills
            .filter((item) => item.skill === concatSkills[0])
            .map((item, key) => (
              <div className="grid w-full grid-cols-6" key={key}>
                <h3 className="col-span-12 col-start-1 mb-6 text-base font-normal uppercase xl:mb-12 text-neutral-400 xl:col-start-1 xl:col-span-2">
                  {item.title}
                </h3>
                <p className="col-span-12 mb-6 text-xl font-semibold sm:text-4xl xl:col-start-3 xl:col-span-4">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
        <div
          className={clsx("w-full lg:max-w-1/2", {
            "blur": filter === concatSkills[0],
          })}
        >
          {aboutSkills
            .filter((item) => item.skill === concatSkills[1])
            .map((item, key) => (
              <div className="grid w-full grid-cols-6" key={key}>
                <h3 className="col-span-12 col-start-1 mb-6 text-base font-normal uppercase xl:mb-12 text-neutral-400 xl:col-start-1 xl:col-span-2">
                  {item.title}
                </h3>
                <p className="col-span-12 mb-6 text-xl font-semibold sm:text-4xl xl:col-start-3 xl:col-span-4">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
