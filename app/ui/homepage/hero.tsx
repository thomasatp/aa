
import { HeroProps } from "@/app/lib/airtable";



export default async function Hero({title, description}: HeroProps) {
  return (
    <section className="relative z-10 grid grid-cols-12 gap-6 px-6 py-6 mt-32 pointer-events-none lg:mt-48 lg:px-20">
      <h1 className="col-span-12 xl:col-span-6 2xl:col-span-7 leading-[0.8] font-semibold text-start xl:text-end mb-4 text-[28vw] lg:text-[20vw] xl:text-[14vw]">
        {title}
      </h1>
      <p className="grid items-end col-span-12 col-start-1 mb-6 text-lg leading-1 xl:col-start-7 2xl:col-start-8 xl:col-span-4 2xl:col-span-3 max-lg:order-5 lg:text-xl ">
       {description}
      </p>
    </section>
  );
}
