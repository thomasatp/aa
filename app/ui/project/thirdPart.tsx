import Image from "next/image";
import { ProjectProps } from "@/app/lib/types";

type thirdPartProps = {
  thirdMedia: ProjectProps["thirdMedia"];
  thirdPartTitle: ProjectProps["thirdPartTitle"];
  thirdPartDescription: ProjectProps["thirdPartDescription"];
};

export default function ThirdPart({
  thirdMedia,
  thirdPartTitle,
  thirdPartDescription,
}: thirdPartProps) {
  return (
     (thirdMedia || thirdPartTitle || thirdPartDescription) &&
      <section className="flex flex-col gap-10 py-24 xl:gap-48 bg-neutral-100 dark:bg-neutral-900 lg:py-48">
        <div className="relative grid grid-cols-12 px-6 gap-y-6 xl:gap-y-40 lg:px-20">
          {thirdPartTitle && (
            <h2 className="col-span-12 col-start-1 text-2xl font-semibold sm:text-4xl xl:col-span-8 xl:col-start-4">
              {thirdPartTitle}
            </h2>
          )}
        </div>
        <div className="relative grid grid-cols-12 px-6 gap-y-6 xl:gap-y-40 lg:px-20">
          {thirdPartDescription && (
            <p className="col-span-12 col-start-1 text-xl sm:text-2xl xl:col-span-3 xl:col-start-2 text-neutral-600 dark:text-neutral-400">
              {thirdPartDescription}
            </p>
          )}
          {thirdMedia && (
            <div className="relative col-start-1 col-span-12 xl:col-start-6 xl:col-span-6">
              {thirdMedia.type === "video/mp4" ? (
                <video
                  className="w-full h-auto"
                  preload="auto"
                  autoPlay
                  playsInline
                  loop
                  muted
                >
                  <source src={thirdMedia.url} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={`${thirdMedia.url}`}
                  alt={thirdMedia.name}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="w-full h-auto"
                />
              )}
            </div>
          )}
        </div>
      </section>
    
  );
}
