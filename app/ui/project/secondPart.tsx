"use client";
import clsx from "clsx";
import { ProjectProps } from "@/app/lib/types";
import Media from "./media";
import { motion } from "framer-motion";
import { useSkew } from "@/app/hooks/useSkew";


type secondPartProps = {
  secondMedias: ProjectProps["secondMedias"];
  secondPartTitle: ProjectProps["secondPartTitle"];
  secondPartDescription: ProjectProps["secondPartDescription"];
  templateB?: boolean | undefined;
};

export default function SecondPart({
  secondMedias,
  secondPartTitle,
  secondPartDescription,
  templateB,
}: secondPartProps) {
  const skew = useSkew();

  return (
    ((secondMedias && secondMedias?.length > 0) ||
      secondPartTitle ||
      secondPartDescription) && (
      <section
        className="flex flex-col gap-10 pt-24 xl:gap-48 bg-neutral-100 dark:bg-neutral-900 lg:pt-32 xl:pt-48"
      >
        <div className="grid relative grid-cols-12 gap-y-6 px-6 xl:gap-y-40 lg:px-20">
          {secondPartTitle && (
            <h2  className="col-span-12 col-start-1 text-2xl font-semibold sm:text-4xl xl:col-span-4 xl:col-start-2">
              {secondPartTitle}
            </h2>
          )}
          {secondPartDescription && (
            <p  className="col-span-12 col-start-1 text-xl sm:text-2xl xl:col-span-5 xl:col-start-7 text-neutral-600 dark:text-neutral-400">
              {secondPartDescription}
            </p>
          )}
        </div>
        {secondMedias?.length !== 0 &&
          (templateB ? (
            <div className="grid relative grid-cols-12 gap-y-6 items-start px-0 pb-24 mb-0 xl:mb-48 xl:gap-y-40 lg:pb-32 xl:pb-48">
              {secondMedias?.map(({ url, name, type }, i: number) => (
                <motion.div style={{skewY: skew}} key={i} className="second-medias-b">
                  <Media type={type} url={url} name={name} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid relative grid-cols-12 gap-y-6 items-center px-6 pb-24 xl:gap-y-40 lg:px-20 lg:pb-32 xl:pb-48">
              {secondMedias?.map(({ url, name, type }, i: number) => (
                <motion.div style={{skewY: skew}} key={i} className="medias second-medias">
                  <Media type={type} url={url} name={name} />
                </motion.div>
              ))}
            </div>
          ))}
      </section>
    )
  );
}
