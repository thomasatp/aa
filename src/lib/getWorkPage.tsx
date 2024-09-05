import base from "./airtable";
import { cache } from "react";
import { HeroWorkProps } from "./types";


export const getWorkPage = cache(async () => {
  let data: HeroWorkProps = {};
  try {
    const records = await base("Workpage").select().firstPage();
    records.forEach(({ fields }) => {
      data = {
        title: fields.title as HeroWorkProps["title"],
        description: fields.description as HeroWorkProps["description"],
        rupture : fields.rupture as HeroWorkProps["rupture"],
        metatitle: fields.metatitle as HeroWorkProps["metatitle"],
        metadescription: fields.metadescription as HeroWorkProps["metadescription"],
      };
    });
  } catch (error) {
    console.error(error);
  }
  return data;
});
