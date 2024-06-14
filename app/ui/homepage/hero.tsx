
import { HeroProps } from "@/app/lib/types";



export default async function Hero({title, description}: HeroProps) {
  return (
    <section className="grid relative z-10 grid-cols-12 gap-6 px-6 py-6 mt-6 pointer-events-none xl:mt-32 xl:gap-12 lg:pb-12 lg:px-20">
      <h1 className="col-span-12 xl:col-span-6 2xl:col-span-7 leading-[0.8] font-semibold text-start xl:text-end mb-8 text-[20vw] lg:text-[20vw] xl:text-[12vw]">
        {title?.toLowerCase()}
      </h1>
      <p className="grid col-span-12 col-start-1 items-end mb-6 text-lg text-neutral-600 dark:text-neutral-400 leading-1 xl:col-start-7 2xl:col-start-8 xl:col-span-4 2xl:col-span-3 max-lg:order-5 lg:text-xl">
       {description}
      </p>
    </section>
  );
}
