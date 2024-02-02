import Image from "next/image";
import clsx from "clsx";
import { MediaTypes } from "@/app/lib/notion";

export default function FirstPart({
  firstMedias,
}: {
  firstMedias: MediaTypes[] | undefined;
}) {

  return (
    <section className="relative grid items-center grid-cols-12 px-6 mt-20 gap-y-6 xl:gap-y-40 lg:px-20">
      {firstMedias?.length !== 0 &&
        firstMedias?.map(({ url, name }, i: number) => (
          <div
            key={i}
            className="transition-all duration-700 medias first-medias"
          >
            {url.includes(".mp4") ? (
              <video
                className="object-cover w-full h-full"
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
                fill
                loading="lazy"
                sizes="800"
                className={clsx("absolute w-full object-cover")}
              />
            )}
          </div>
        ))}
    </section>
  );
}
