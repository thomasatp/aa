import base from "./airtable";
import { cache } from "react";
import { HeroAboutProps } from "./types";


export const useAboutPage = cache(async () => {
  let data: HeroAboutProps = {};
  const regex: RegExp = /^(.*?)\.[^\.]*$/;
  try {
    const records = await base("Aboutpage").select().firstPage();
    records.forEach(({ fields }) => {
      data = {
        title: fields.title as HeroAboutProps["title"],
        description: fields.description as HeroAboutProps["description"],
        media: Array.isArray(fields.media) && fields.media.length > 0
                ? ({
                    url: fields.media[0].url,
                    name: fields.media[0].filename.match(regex)[1],
                    type: fields.media[0].type,
                  } as HeroAboutProps["media"])
                : ({
                    url: "",
                    name: "",
                    type: "",
                  } as HeroAboutProps["media"]),
      };
    });
  } catch (error) {
    console.error(error);
  }
  return data;
});