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
    <section className="relative grid items-center grid-cols-12 px-6 mt-20 gap-y-6 xl:gap-y-40 lg:px-20">
      {firstMedias?.length !== 0 &&
        firstMedias?.map(({ url, name, type }, i: number) => (
          <div
            key={i}
            className="transition-all duration-700 medias first-medias"
          >
            {type === "video/mp4" ? (
              <video
                className=" w-full h-auto"
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
  );
}
