import Link from "next/link";
import clsx from "clsx";

export default function DevCrea({ filter }: any) {
  const dev = filter === "dev" || filter === undefined;
  const crea = filter === "crea";
  return (
    <div className="relative grid grid-cols-12 px-6 mt-20 lg:px-20">
      <div className="flex col-span-6 px-6 justify-end">
        <Link className={clsx("cursor-pointer blur-md transition-all duration-300", {
                "blur-none": dev,
                "hover:blur-none": crea,
              })} href={`about?filter=dev`} scroll={false}>
          <h2
            className={clsx(
              "inline-block font-bold text-[10vw] transition-all duration-300",
              {
                "shade-text": dev,
              }
            )}
          >
            dev
          </h2>
        </Link>
      </div>
      <div className="flex col-span-6 px-6 justify-start">
        <Link className={clsx("cursor-pointer blur-md transition-all duration-300", {
                "blur-none shade-text": crea,
                "hover:blur-none": dev,
              })} href={`about?filter=crea`} scroll={false}>
          <h2
            className={clsx(
              "inline-block font-bold text-[10vw] transition-all duration-300",
              {
                "shade-text": crea,
              }
            )}
          >
            crea
          </h2>
        </Link>
      </div>
    </div>
  );
}
