import clsx from "clsx";
import { MediaTypes } from "@/app/lib/types";
import Media from "./media";

export default function FirstPart({
  firstMedias
}: {
  firstMedias: MediaTypes[] | undefined;
}) {
  
  return (
    firstMedias?.length !== 0 && (
      <section className="relative grid items-center grid-cols-12 px-6 mb-24 lg:mb-32 xl:mb-48 gap-y-6 xl:gap-y-40">
        {firstMedias?.map(({ url, name, type }, i: number) => (
          <div
            key={i}
            className={clsx("transition-all duration-700 ", {
              "medias first-medias": firstMedias.length > 1,
              "col-start-1 col-span-12 xl:col-start-3 xl:col-span-8":
                firstMedias.length < 2,
            })}
          >
            <Media type={type} url={url} name={name} />
          </div>
        ))}
      </section>
    )
  );
}
