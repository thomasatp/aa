import { Metadata } from "next";
import { getLegalPage } from "../lib/getLegalPage";
import { getLegalNotices } from "../lib/getLegalNotices";
import Hero from "../ui/homepage/hero";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const aboutPage = await getLegalPage();

  return {
    title: `And After | ${aboutPage.title}`,
    description: aboutPage.description,
  };
}
export default async function Page() {
  const LegalPage = await getLegalPage();
  const notices = await getLegalNotices();
  return (
    <main>
      <Hero title={LegalPage.title} description={LegalPage.description} />

      {notices.map(({ title, description }, key) => (
        <div
          key={key}
          className="relative grid grid-cols-12 px-6 mt-20 lg:px-20"
        >
          <h3 className="col-span-12 col-start-1 mb-6 text-base font-normal uppercase xl:mb-12 text-neutral-400 xl:col-start-2 xl:col-span-3">
            {title}
          </h3>
          <p className="col-span-12 text-xl font-semibold sm:text-4xl xl:col-span-7">{description?.split("\n").map((not, key) => <span className="block" key={key}>{not}</span>)}</p>
        </div>
      ))}
    </main>
  );
}
