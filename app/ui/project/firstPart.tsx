import Image from "next/image";
import clsx from "clsx";
// import { MediaTypes } from "@/app/lib/notion";
import { MediaTypes } from "@/app/lib/types";

export default function FirstPart({
  firstMedias,
}: {
  firstMedias: MediaTypes[] | undefined;
}) {
  return (
    firstMedias?.length !== 0 && (
      <section className="relative grid items-center grid-cols-12 px-6 mb-24 lg:mb-32 xl:mb-48 gap-y-6 xl:gap-y-40">
        {firstMedias?.map(({ url, name, type }, i: number) => (
          <div
            key={i}
            className={clsx("transition-all duration-700 medias", {
              "first-medias": firstMedias.length > 1,
              "col-start-1 col-span-12 xl:col-start-3 xl:col-span-8":
                firstMedias.length < 2,
            })}
          >
            {type === "video/mp4" ? (
              <video
                className="w-full h-auto "
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
      </section>
    )
  );
}
