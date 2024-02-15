import Image from "next/image";
import clsx from "clsx";
import { ProjectProps } from "@/app/lib/types";

type secondPartProps = {
  secondMedias: ProjectProps["secondMedias"];
  secondPartTitle: ProjectProps["secondPartTitle"];
  secondPartDescription: ProjectProps["secondPartDescription"];
};

export default function SecondPart({
  secondMedias,
  secondPartTitle,
  secondPartDescription,
}: secondPartProps) {
  return (
     (secondMedias && secondMedias?.length > 0 || secondPartTitle || secondPartDescription) &&
      <section className="flex flex-col gap-10 py-24 mt-32 xl:gap-48 bg-neutral-100 dark:bg-neutral-900 lg:py-48 lg:mt-48">
        <div className="relative grid grid-cols-12 px-6 gap-y-6 xl:gap-y-40 lg:px-20">
          {secondPartTitle && (
            <h2 className="col-span-12 col-start-1 text-2xl font-semibold sm:text-4xl xl:col-span-4 xl:col-start-2">
              {secondPartTitle}
            </h2>
          )}
          {secondPartDescription && (
            <p className="col-span-12 col-start-1 text-xl sm:text-2xl xl:col-span-5 xl:col-start-7 text-neutral-600 dark:text-neutral-400">
              {secondPartDescription}
            </p>
          )}
        </div>
        <div className="relative grid items-center grid-cols-12 px-6 gap-y-6 xl:gap-y-40 lg:px-20">
          {secondMedias?.length !== 0 &&
            secondMedias?.map(({ url, name, type }, i: number) => (
              <div key={i} className="medias second-medias">
                {type === "video/mp4" ? (
                  <video
                    className="w-full h-auto"
                    preload="auto"
                    autoPlay
                    playsInline
                    loop
                    muted
                  >
                    <source src={url} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={`${url}`}
                    alt={name}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                )}
              </div>
            ))}
        </div>
      </section>
    
  );
}
