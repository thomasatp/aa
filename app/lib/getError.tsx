import base from "./airtable";
import { cache } from "react";
import { HeroError } from "./types";




export const getError = cache(async () => {
  let data: HeroError = {};
  const regex: RegExp = /^(.*?)\.[^\.]*$/;
  try {
    const records = await base("404").select().firstPage();
    records.forEach(({ fields }) => {
      data = {
        title: fields.title as HeroError["title"],
        description: fields.description as HeroError["description"],
        button: fields.button as HeroError["button"],
        media: Array.isArray(fields.media) && fields.media.length > 0
                ? ({
                    url: fields.media[0].url,
                    name: fields.media[0].filename.match(regex)[1],
                    type: fields.media[0].type,
                  } as HeroError["media"])
                : ({
                    url: "",
                    name: "",
                    type: "",
                  } as HeroError["media"]),
        metatitle: fields.metatitle as HeroError["metatitle"],
        metadescription: fields.metadescription as HeroError["metadescription"],
      };
    });
  } catch (error) {
    console.error(error);
  }
  return data;
});