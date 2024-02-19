import { Metadata } from "next";
import { getAboutPage } from "../lib/getAboutPage";
import Hero from "../ui/homepage/hero";
import LottieBlock from "../ui/lottie";
import DevCrea from "../ui/devcrea";


export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  
  const aboutPage = await getAboutPage();;

  return {
    title: `And After | ${aboutPage.title}`,
    description: aboutPage.description,
  };
}

export default async function Page({ searchParams }: { searchParams: any }) {
  const filter = searchParams.filter;
  const aboutPage = await getAboutPage();
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
      <DevCrea filter={filter}/>
      
    </main>
  );
}
