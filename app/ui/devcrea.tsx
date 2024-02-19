import Link from "next/link";
import clsx from "clsx";

export default function DevCrea({ filter }: any) {
  return (
    <div className="relative grid grid-cols-12 px-6 mt-20 lg:px-20">
      <Link
        className="flex col-span-6 px-6 justify-end"
        href={`about?filter=dev`}
        scroll={false}
      >
        <h2
          className={clsx(
            "inline-block font-bold text-[10vw] blur-md transition-all duration-300",
            {
              "blur-none shade-text":
                filter === "dev" || filter === undefined,
              "hover:blur-none": filter === "crea",
            }
          )}
        >
          dev
        </h2>
      </Link>
      <Link
        className="flex col-span-6 px-6 justify-start"
        href={`about?filter=crea`}
        scroll={false}
      >
        <h2
          className={clsx(
            "inline-block font-bold text-[10vw] blur-md transition-all duration-300",
            {
              "blur-none shade-text":
                filter === "crea",
                "hover:blur-none": filter === "dev" || filter === undefined,
            }
          )}
        >
          crea
        </h2>
      </Link>
    </div>
  );
}
