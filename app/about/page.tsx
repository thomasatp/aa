import { useAboutPage } from "../lib/useAboutPage";
import Hero from "../ui/homepage/hero";

export default async function Page() {
  const aboutPage = await useAboutPage();
  console.log(aboutPage);
  return (
    <main>
      <Hero title={aboutPage.title} description={aboutPage.description} />
      <div className="relative grid grid-cols-12 px-6 mt-20 lg:px-20">
          {aboutPage.media && (
            <section className="relative col-span-12 aspect-video">
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
    </main>
  );
}
