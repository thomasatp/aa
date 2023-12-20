
export default function Hero() {
  return (
    <section className="relative grid grid-cols-12 gap-6 p-6 z-10">
      <h1 className="col-span-12 lg:col-span-7 xl:col-span-6 leading-[0.8] font-semibold text-end mb-4 text-[40vw] lg:text-[25vw] xl:text-[21vw]">
        and after
      </h1>
      <p className="grid items-end col-span-12 col-start-1 mb-6 text-5xl font-semibold leading-none text-white lg:col-start-9 xl:col-start-8 lg:col-span-4 xl:col-span-4 max-lg:order-5 max-lg:mt-12 max-lg:text-2xl ">
        Nous transformons vos idées en expériences digitales mémorables qui
        captivent et convertissent
      </p>
      <p className="col-span-4 col-start-1 text-2xl font-semibold leading-none text-white lg:col-start-2 xl:col-start-2 lg:col-span-2 xl:col-span-1 max-lg:text-lg text-start">
        strat
      </p>
      <p className="col-span-4 col-start-5 text-2xl font-semibold leading-none text-center text-white lg:col-start-4 xl:col-start-4 lg:col-span-2 xl:col-span-1 max-lg:text-lg">
        design
      </p>
      <p className="col-span-4 col-start-9 text-2xl font-semibold leading-none text-white lg:col-start-6 xl:col-start-6 lg:col-span-2 xl:col-span-1 max-lg:text-lg text-end">
        dev
      </p>
    </section>
  );
}
