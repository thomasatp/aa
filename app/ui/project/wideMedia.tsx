import { ProjectProps } from "@/app/lib/types";
import Media from "./media";
import Image from "next/image";

export default function WideMedia({ media }: {media: ProjectProps["wideMedia"]}) {
  return (
    media &&  (
      <section className="relative w-full aspect-video rounded-lg overflow-hidden">
        <Media type={media.type} url={media.url} name={media.name} />
      </section>
    )
  );
}
