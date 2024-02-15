import { ProjectProps, MediaTypes } from "@/app/lib/airtable";
import Image from "next/image";

export default function WideMedia({ media }: {media: ProjectProps["wideMedia"]}) {
  return (
    media &&  (
      <section className="relative w-full aspect-video">
        {media.type === "video/mp4" ? (
          <video
            className="object-cover w-full h-full"
            preload="auto"
            autoPlay
            playsInline
            loop
            muted
          >
            <source src={media.url} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={`${media.url}`}
            alt={media.name}
            fill
            loading="lazy"
            sizes="800"
            className="absolute object-cover w-full"
          />
        )}
      </section>
    )
  );
}
